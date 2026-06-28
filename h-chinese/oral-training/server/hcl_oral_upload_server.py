#!/usr/bin/env python3
import cgi
import json
import os
import re
import shutil
import ssl
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

DEFAULT_SUBMISSIONS_DIR = Path.home() / "Documents" / "HCL-Oral-Submissions"
SUBMISSIONS_DIR = Path(os.environ.get("HCL_ORAL_SUBMISSIONS_DIR", DEFAULT_SUBMISSIONS_DIR))
CERT_FILE = Path(os.environ.get("HCL_ORAL_CERT_FILE", "local-server.pem"))
KEY_FILE = Path(os.environ.get("HCL_ORAL_KEY_FILE", "local-server-key.pem"))
MAX_UPLOAD_BYTES = int(os.environ.get("HCL_ORAL_MAX_UPLOAD_BYTES", str(80 * 1024 * 1024)))
ALLOWED_AUDIO_MIME = {"audio/webm", "audio/ogg", "audio/mp4", "audio/mpeg", "audio/wav", "application/octet-stream"}


def safe_name(value):
    cleaned = re.sub(r"[^A-Za-z0-9._\-\u4e00-\u9fff]+", "-", value.strip())
    return cleaned.strip("-") or "student"


class HCLOralHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        if self.path != "/api/submit-assignment":
            self.send_error(404, "Unknown endpoint")
            return

        content_type = self.headers.get("Content-Type", "")
        if not content_type.startswith("multipart/form-data"):
            self.send_json(400, {"error": "Expected multipart/form-data"})
            return
        content_length = int(self.headers.get("Content-Length", "0") or 0)
        if content_length > MAX_UPLOAD_BYTES:
            self.send_json(413, {"error": "Upload too large"})
            return

        form = cgi.FieldStorage(
            fp=self.rfile,
            headers=self.headers,
            environ={
                "REQUEST_METHOD": "POST",
                "CONTENT_TYPE": content_type,
                "CONTENT_LENGTH": self.headers.get("Content-Length", "0"),
            },
        )

        student_name = safe_name(form.getfirst("student_name", "Dennis"))
        timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        submission_dir = SUBMISSIONS_DIR / f"{timestamp}-{student_name}"
        submission_dir.mkdir(parents=True, exist_ok=True)

        metadata = {
            "student_name": form.getfirst("student_name", "Dennis"),
            "mode": form.getfirst("mode", ""),
            "submitted_at": datetime.now().isoformat(timespec="seconds"),
            "presentation_transcript": form.getfirst("presentation_transcript", ""),
            "discussion_transcripts": self.parse_json_field(form.getfirst("discussion_transcripts", "[]")),
            "report": self.parse_json_field(form.getfirst("report_json", "{}")),
            "recordings": [],
        }

        recording_fields = form["recordings"] if "recordings" in form else []
        if not isinstance(recording_fields, list):
            recording_fields = [recording_fields]

        for index, item in enumerate(recording_fields, start=1):
            if not getattr(item, "filename", ""):
                continue
            if item.type not in ALLOWED_AUDIO_MIME:
                self.send_json(400, {"error": "Unsupported audio format"})
                shutil.rmtree(submission_dir, ignore_errors=True)
                return
            filename = f"{index:02d}-{safe_name(Path(item.filename).name)}"
            target = submission_dir / filename
            with target.open("wb") as output:
                shutil.copyfileobj(item.file, output)
            metadata["recordings"].append(
                {
                    "filename": filename,
                    "size_bytes": target.stat().st_size,
                }
            )

        if not metadata["recordings"]:
            shutil.rmtree(submission_dir, ignore_errors=True)
            self.send_json(400, {"error": "No recording files received"})
            return

        (submission_dir / "metadata.json").write_text(
            json.dumps(metadata, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

        self.send_json(
            200,
            {
                "ok": True,
                "saved_to": "teacher_submission_folder",
                "recording_count": len(metadata["recordings"]),
            },
        )
        print(f"Saved HCL oral submission to {submission_dir}")

    def parse_json_field(self, value):
        try:
            return json.loads(value)
        except json.JSONDecodeError:
            return value

    def send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    SUBMISSIONS_DIR.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer(("0.0.0.0", 8443), HCLOralHandler)
    context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    context.load_cert_chain(certfile=CERT_FILE, keyfile=KEY_FILE)
    server.socket = context.wrap_socket(server.socket, server_side=True)
    print("HCL Oral upload server running at https://0.0.0.0:8443/")
    print(f"Saving submissions to {SUBMISSIONS_DIR}")
    server.serve_forever()
