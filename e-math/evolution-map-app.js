/**
 * evolution-map-app.js
 * v21.0 - Clean & Consistent UI Update
 * * UI CHANGE: Removed icons from Angle Engine.
 * * LAYOUT: Unified Card Structure: ID (Top) -> Name -> Trigger -> [Expand: Cue/Rule].
 * * GRID: Maintained 4-column layout for desktop.
 */

import { ARCHETYPES_DATA } from './archetypes-data.js';
import { SOPS_DATA } from './sops-data.js';

// ==========================================
// 1. DATA CONFIGURATION
// ==========================================

// --- PART A: CLASSIC FRAMEWORK CONFIG (Eye/Hand/Brain) ---
const GEO_LOGIC_MAP = {
    layer1: {
        title: "Layer 1 (Eye): Visual Triggers 👁️",
        desc: "Scan -> Match: Identify visual features, instantly recall theorems",
        color: "#06b6d4", // Cyan
        items: new Set([
            "SOP-ANG-M00", "SOP-ANG-M01", "SOP-ANG-M02", "SOP-ANG-M03", 
            "SOP-ANG-M04", "SOP-ANG-M05", "SOP-ANG-M06", "SOP-ANG-M07", 
            "SOP-ANG-M08", "SOP-ANG-M09", "SOP-ANG-M10", "SOP-ANG-M11",
            "SOP-GEO-CIRC-01", "SOP-GEO-CIRC-02", "SOP-GEO-CIRC-03", 
            "SOP-GEO-CIRC-04", "SOP-GEO-CIRC-05", "SOP-GEO-CIRC-06",
            "SOP-GEO-CIRC-07", "SOP-GEO-CONG-01"
        ])
    },
    layer2: {
        title: "Layer 2 (Hand): Calculation Tools 🛠️",
        desc: "Execute: Establish relationships, solve using formulas",
        color: "#f59e0b", // Amber
        items: new Set([
            "SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03", 
            "SOP-GEO-COORD-04", "SOP-GEO-COORD-05", "SOP-GEO-COORD-06",
            "SOP-GEO-COORD-07", "SOP-GEO-COORD-08", "SOP-GEO-COORD-09", "SOP-GEO-COORD-10",
            "SOP-TRIG-01", "SOP-TRIG-02", "SOP-TRIG-03", "SOP-TRIG-04", "SOP-L2-TRIG-01",
            "SOP-MEN-01", "SOP-MEN-02", "SOP-MEN-03", "SOP-MEN-04",
            "SOP-GEO-SIM-02", "SOP-GEO-SIM-03", "SOP-GEO-SIM-04", "SOP-GEO-CIRC-08",
            "SOP-GEO-PYTH-01", "SOP-GEO-PYTH-02",
            "SOP-GEO-CONS-01", "SOP-GEO-CONS-02", "SOP-GEO-CONS-03", 
            "SOP-GEO-CONS-04", "SOP-GEO-CONS-05", "SOP-GEO-CONS-06",
            "SOP-GEO-BEAR-01", "SOP-GEO-BEAR-02", "SOP-GEO-BEAR-03",
            "SOP-GEO-TRANS-01", "SOP-GEO-TRANS-02", "SOP-GEO-TRANS-03", 
            "SOP-GEO-TRANS-04", "SOP-GEO-TRANS-05"
        ])
    },
    layer3: {
        title: "Layer 3 (Brain): Reasoning & Proof 🗣️",
        desc: "Format & Logic: Write rigorous proof steps",
        color: "#8b5cf6", // Purple
        items: new Set(["SOP-GEO-SIM-01", "SOP-GEO-CONG-02", "SOP-L2-GEO-01"])
    }
};

// --- PART B: NEW DEEP DIVE ENGINES DATA ---

// 1. CIRCLE ENGINE (Unified Format)
const CIRCLE_ENGINE_DATA = [
    { id: "SOP-GEO-CIRC-01", name: "Angle in Semicircle", trigger: "Diameter shown", cue: "Endpoints lie on circle", rule: "Angle in semicircle = 90°" },
    { id: "SOP-GEO-CIRC-02", name: "Centre vs Circumference", trigger: "Center + Circumference angle", cue: "Same arc subtended", rule: "∠Center = 2 × ∠Circ" },
    { id: "SOP-GEO-CIRC-03", name: "Same Segment", trigger: "Two angles from same chord", cue: "Bowtie pattern", rule: "Angles in same segment equal" },
    { id: "SOP-GEO-CIRC-04", name: "Cyclic Quadrilateral", trigger: "4 points lie on a circle", cue: "Opposite vertices", rule: "Opposite angles sum to 180°" },
    { id: "SOP-GEO-CIRC-05", name: "Tangent Properties", trigger: "Tangent touches circle", cue: "Radius shown", rule: "Tangent ⊥ Radius (90°) / PA=PB" },
    { id: "SOP-GEO-CIRC-06", name: "Alternate Segment", trigger: "Tangent + Chord", cue: "One angle at tangent", rule: "Tan–Chord ∠ = Opp segment ∠" },
    { id: "SOP-GEO-CIRC-07", name: "Chord Properties", trigger: "Equal chords / symmetry", cue: "Radii to midpoint", rule: "Perpendicular bisector → center" },
    { id: "SOP-GEO-CIRC-08", name: "Arc & Sector", trigger: "Sector / arc question", cue: "θ shown", rule: "θ/360 × (2πr, πr²)" }
];

const CIRCLE_COMBOS = [
    { title: "1. Tangent → 90° → Pythagoras", formula: "CIRC-05 + PYTH", detail: "Use when finding distance from center to external point." },
    { title: "2. Tan ⟂ Radius + Same Segment", formula: "CIRC-05 + CIRC-03", detail: "Use for complex tangent angles (look for hidden isosceles)." },
    { title: "3. Cyclic Quad + Opp Angles", formula: "CIRC-04 + Line Sum", detail: "Find x in quadrilaterals, then use line sum for exterior." },
    { title: "4. Tan-Chord + Isosceles", formula: "CIRC-06 + ANG-M07", detail: "Tangent creates equal angles, Isosceles moves them." },
    { title: "5. Chord Prop + Coordinates", formula: "CIRC-07 + COORD", detail: "Perpendicular bisector equation meets at center." },
    { title: "6. Arc/Sector + Similarity", formula: "CIRC-08 + SIM", detail: "Cone nets or similar sectors (Length ratio k)." }
];

// 2. ANGLE ENGINE (Unified Format)
const ANGLE_ENGINE_DATA = [
    { id: "SOP-ANG-M00", name: "Straight Line", trigger: "A straight line", cue: "Adjacent angles", rule: "Sum = 180°" },
    { id: "SOP-ANG-M01", name: "Corresponding", trigger: "Z-pattern / F-pattern", cue: "Parallel line arrows", rule: "Corresponding ∠ equal" },
    { id: "SOP-ANG-M02", name: "Alt. Interior", trigger: "Z-pattern", cue: "Parallel lines", rule: "Alternate interior ∠ equal" },
    { id: "SOP-ANG-M03", name: "Co-Interior", trigger: "C-pattern", cue: "Parallel lines", rule: "Sum = 180°" },
    { id: "SOP-ANG-M04", name: "Vert. Opposite", trigger: "X-shape", cue: "Two straight lines intersect", rule: "Vertically opposite ∠ equal" },
    { id: "SOP-ANG-M05", name: "Triangle Sum", trigger: "Triangle", cue: "Three angles", rule: "Sum = 180°" },
    { id: "SOP-ANG-M06", name: "Ext. Angle", trigger: "Angle extends outside", cue: "Remote interior angles", rule: "Ext = sum of 2 remote interior" },
    { id: "SOP-ANG-M07", name: "Isosceles", trigger: "Two equal sides", cue: "Base angles", rule: "Base angles equal" },
    { id: "SOP-ANG-M08", name: "Equilateral", trigger: "All sides equal", cue: "3 congruent markings", rule: "All ∠ = 60°" },
    { id: "SOP-ANG-M09", name: "Poly. Interior", trigger: "Multi-sided polygon", cue: "n sides", rule: "(n–2)×180°" },
    { id: "SOP-ANG-M10", name: "Regular Poly.", trigger: "Regular polygon", cue: "All sides & angles equal", rule: "Interior = (n–2)×180°/n" },
    { id: "SOP-ANG-M11", name: "Quad Sum", trigger: "Quadrilateral", cue: "4 vertices", rule: "Sum = 360°" }
];

const ANGLE_COMBOS = [
    { title: "A. Angle → Similarity → Mensuration", formula: "ANG-M + SIM + MEN", detail: "Use F/Z/C angles to prove AA Similarity, then use k² (Area) or k³ (Vol) ratios." },
    { title: "B. Circle → Trig / Pythagoras", formula: "CIRC + PYTH/TRIG", detail: "Identify 90° (Tangent/Semicircle) to unlock Pythagoras or SOHCAHTOA." },
    { title: "C. Angle → Coordinate Geometry", formula: "ANG-M + COORD", detail: "Parallel lines (F/Z/C) means Equal Gradients (m1=m2). Use for equations." },
    { title: "D. Angle → Congruency", formula: "ANG-M + CONG", detail: "Use Isosceles or Alt. Angles to find the 'A' or 'S' needed for SAS/ASA tests." },
    { title: "E. 3D Mixed (Bearings + Trig)", formula: "BEAR + TRIG + PYTH", detail: "Convert Bearings to angles first. Draw 2D vertical sections to solve." }
];

// 3. PROOF ENGINE
const PROOF_SENTENCES = [
    "Angles in the same segment are equal",
    "Angle at centre is twice angle at circumference",
    "Angle in a semicircle is 90°",
    "Opposite angles of cyclic quad sum to 180°",
    "Tangent is perpendicular to radius",
    "Tangents from external point are equal in length",
    "Alternate segment theorem",
    "Base angles of isosceles triangle are equal",
    "Alternate interior angles (parallel lines)",
    "Corresponding angles (parallel lines)",
    "Vertically opposite angles",
    "Diagonals of parallelogram bisect each other"
];

// ==========================================
// 2. GLOBAL STATE
// ==========================================
let allCategories = [];
let allSOPs = [];
const SOP_MAP = new Map();

const ICONS = {
    'D1': '🔢', 'D2': '📐', 'D3': '📊', 'L2L3': '🧩',
    plus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5V19M5 12H19"/></svg>`,
    minus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19"/></svg>`,
    chevronDown: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
    eye: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    tool: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    brain: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`
};

// ==========================================
// 3. STYLE INJECTION (4x3 GRID + BLUE THEME)
// ==========================================
function injectStyles() {
    const styleId = 'geo-styles-complete';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* --- 1. GLOBAL & MAIN MAP STYLES --- */
        .category-card { margin-bottom: 1.5rem; transition: all 0.3s; }
        .archetype-card-wrapper { margin-bottom: 0.5rem; }
        
        /* --- 2. CLASSIC FRAMEWORK STYLES --- */
        .geo-framework-section { padding: 3rem 2rem; max-width: 1600px; margin: 0 auto; position: relative; }
        .geo-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; }
        .geo-framework-title { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #fff 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
        
        .geo-stack { display: flex; flex-direction: column; gap: 1.5rem; }
        .geo-layer-card { background: rgba(255,255,255,0.03); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; transition: all 0.3s; }
        .geo-layer-card.expanded { border-color: var(--layer-color); background: rgba(255,255,255,0.05); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); }
        .geo-layer-header { padding: 1.5rem 2rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 100%); min-height: 88px; }
        .geo-layer-title-group { display: flex; align-items: center; gap: 1.5rem; }
        .geo-layer-icon { font-size: 2rem; color: var(--layer-color); width: 40px; text-align: center; }
        .geo-layer-title { font-size: 1.25rem; font-weight: 700; color: #fff; }
        .geo-layer-desc { font-size: 0.95rem; opacity: 0.7; font-style: italic; color: var(--text-secondary); }
        .geo-layer-body { max-height: 0; overflow: hidden; transition: max-height 0.5s; opacity: 0; }
        .geo-layer-card.expanded .geo-layer-body { max-height: 5000px; opacity: 1; padding: 0 2rem 2rem; }
        
        .geo-sop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; margin-top: 1rem; }
        .layer-visual { --layer-color: #06b6d4; }
        .layer-calc { --layer-color: #f59e0b; }
        .layer-proof { --layer-color: #8b5cf6; }

        /* --- 3. NEW DEEP DIVE ENGINE STYLES --- */
        .geo-deep-dive-section { padding: 3rem 2rem; max-width: 1600px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4rem; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; transform: translateY(20px); }
        
        /* Glass Card Utility */
        .glass-card {
            background: rgba(30, 41, 59, 0.4); 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            backdrop-filter: blur(12px);
            border-radius: 0.75rem; 
            padding: 1rem; 
            transition: all 0.2s;
            cursor: pointer;
            height: 100%; /* Ensure equal height in grid */
            display: flex;
            flex-direction: column;
        }
        .glass-card:hover {
            background: rgba(30, 41, 59, 0.6);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        /* Detail Panels in New Engine */
        .detail-panel { margin-top: auto; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem; color: #cbd5e1; display: none; }
        .glass-card.active .detail-panel { display: block; }

        /* Grid Utilities for Perfect Layouts */
        .grid-4 { 
            display: grid; 
            gap: 1rem; 
            grid-template-columns: repeat(1, 1fr); 
        }
        .grid-3 { 
            display: grid; 
            gap: 1.5rem; 
            grid-template-columns: repeat(1, 1fr); 
        }
        .grid-2 { 
            display: grid; 
            gap: 1rem; 
            grid-template-columns: repeat(1, 1fr); 
        }

        /* Responsive Breakpoints */
        @media (min-width: 640px) { 
            .grid-4 { grid-template-columns: repeat(2, 1fr); }
            .grid-3 { grid-template-columns: repeat(2, 1fr); }
            .grid-2 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) { 
            /* FORCE 4 COLUMNS ON DESKTOP for perfect 4x3 (Angle) and 4x2 (Circle) */
            .grid-4 { grid-template-columns: repeat(4, 1fr); } 
            .grid-3 { grid-template-columns: repeat(3, 1fr); }
        }

        /* Helper Classes */
        .text-gradient-purple { background: linear-gradient(to right, #c084fc, #e879f9); -webkit-background-clip: text; color: transparent; }
        .text-gradient-blue { background: linear-gradient(to right, #60a5fa, #22d3ee); -webkit-background-clip: text; color: transparent; }
        .text-gradient-indigo { background: linear-gradient(to right, #818cf8, #a78bfa); -webkit-background-clip: text; color: transparent; }
        
        .badge { font-size: 0.75rem; font-family: monospace; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.3); color: #cbd5e1; }
        .badge-purple { color: #d8b4fe; background: rgba(168, 85, 247, 0.2); border: 1px solid rgba(168, 85, 247, 0.3); }
        .badge-blue { color: #93c5fd; background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.3); }

        /* Mini SOP Card (Used in Classic Framework) */
        .mini-sop { 
            background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); 
            border-radius: 0.5rem; padding: 0.75rem; cursor: pointer; transition: all 0.2s;
            display: flex; flex-direction: column;
        }
        .mini-sop:hover { background: rgba(255,255,255,0.08); transform: translateX(2px); }
        .mini-sop.active { background: rgba(255,255,255,0.08); border-color: var(--layer-color); }
        .sop-header-flex { display: flex; justify-content: space-between; align-items: center; width: 100%; }
        .sop-arrow { opacity: 0.5; transition: transform 0.2s; }
        .mini-sop.active .sop-arrow { transform: rotate(180deg); opacity: 1; }
        .sop-detail { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; opacity: 0; margin-top: 0; }
        .mini-sop.active .sop-detail { max-height: 1000px; padding-top: 1rem; opacity: 1; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 0.5rem; }
        
        /* Power Combos (Shared by Circle & Angle) */
        .power-combos { margin-top: 1rem; background: rgba(30, 41, 59, 0.3); border-radius: 0.75rem; padding: 1rem; border: 1px solid rgba(255,255,255,0.1); }
        .combo-header { font-size: 0.8rem; text-transform: uppercase; font-weight: 700; margin-bottom: 0.75rem; color: #cbd5e1; }
        .combo-item { display: flex; justify-content: space-between; padding: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem; }
        .combo-item:last-child { border-bottom: none; }
    `;
    document.head.appendChild(style);
}

// ==========================================
// 4. DATA PROCESSING
// ==========================================
function naturalSort(a, b) {
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
}

function processData() {
    console.log("Processing Data...");
    allSOPs = SOPS_DATA || [];
    allSOPs.forEach(sop => SOP_MAP.set(sop.id, sop));

    const allArchetypes = JSON.parse(JSON.stringify(ARCHETYPES_DATA)).map(a => ({...a, children: [] }));
    let archetypeMap = new Map();
    allArchetypes.forEach(a => archetypeMap.set(a.id, a));

    let topLevelArchetypes = [];
    allArchetypes.forEach(a => {
        if (a.parent) {
            const parent = archetypeMap.get(a.parent);
            if (parent) parent.children.push(a); else topLevelArchetypes.push(a);
        } else {
            topLevelArchetypes.push(a);
        }
    });
    topLevelArchetypes.forEach(parent => parent.children.sort(naturalSort));

    const cat1 = topLevelArchetypes.filter(a => a.level === 'L1' && a.domain.includes('D1')).sort(naturalSort);
    const cat2 = topLevelArchetypes.filter(a => a.level === 'L1' && a.domain.includes('D2')).sort(naturalSort);
    const cat3 = topLevelArchetypes.filter(a => a.level === 'L1' && a.domain.includes('D3')).sort(naturalSort);
    const cat4 = topLevelArchetypes.filter(a => a.level === 'L2' || a.level === 'L3').sort((a,b) => a.level.localeCompare(b.level) || naturalSort(a,b));

    allCategories = [
        { id: 'l1-d1', title: 'I. L1 - Number & Algebra', icon: ICONS['D1'], archetypes: cat1 },
        { id: 'l1-d2', title: 'II. L1 - Geometry & Measurement', icon: ICONS['D2'], archetypes: cat2 },
        { id: 'l1-d3', title: 'III. L1 - Statistics & Probability', icon: ICONS['D3'], archetypes: cat3 },
        { id: 'l2-l3', title: 'IV. L2 & L3 - Integrated Models', icon: ICONS['L2L3'], archetypes: cat4 }
    ];
}

// ==========================================
// 5. RENDERER PART 1: MAIN EVOLUTION MAP
// ==========================================
function renderArchetypeCard(archetype) {
    const level = archetype.level || 'L?';
    return `
    <div class="archetype-card-wrapper">
        <div class="archetype-card level-${level.toLowerCase()}" onclick="toggleArchetype(this)">
          <div class="archetype-title">
            <span class="level-badge">${level}</span>
            <span class="archetype-name">${archetype.name}</span>
            <span class="archetype-id">${archetype.id}</span>
          </div>
          <div class="archetype-expand-indicator">${ICONS.plus}</div>
        </div>
        <div class="archetype-details-container" style="display: none;">
            <div class="branches-overview"><p>${archetype.description}</p></div>
        </div>
    </div>`;
}

// ==========================================
// 6. RENDERER PART 2: CLASSIC GEO FRAMEWORK
// ==========================================
function getSopsForLayer(layerType) {
    const layerConfig = GEO_LOGIC_MAP[layerType];
    if (!layerConfig) return [];
    return allSOPs.filter(sop => layerConfig.items.has(sop.id));
}

function renderFrameworkSopCard(sop) {
    const steps = sop.steps || [];
    return `
    <div class="mini-sop" onclick="this.classList.toggle('active')">
        <div class="sop-header-flex">
            <div><span style="font-family:monospace; color:var(--layer-color); font-size:0.75rem">${sop.id}</span><div style="font-weight:600; font-size:0.9rem">${sop.name.split('·')[1] || sop.name}</div></div>
            <div class="sop-arrow">${ICONS.chevronDown}</div>
        </div>
        <div class="sop-detail">
            <div style="font-size:0.9rem; color:#cbd5e1; margin-bottom:0.5rem">${sop.description}</div>
            ${steps.length > 0 ? `<ol style="padding-left:1rem; font-size:0.85rem; color:#94a3b8">${steps.slice(0,3).map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
        </div>
    </div>`;
}

function renderOriginalFramework() {
    const visualSops = getSopsForLayer('layer1');
    const calcSops = getSopsForLayer('layer2');
    const proofSops = getSopsForLayer('layer3');

    return `
    <section class="geo-framework-section">
        <div class="geo-header-row">
            <h2 class="geo-framework-title">Geometry SOP Logic Framework</h2>
            <div style="font-size:0.9rem; opacity:0.7">Eye / Hand / Brain</div>
        </div>
        <div class="geo-stack">
            <!-- Layer 1 -->
            <div class="geo-layer-card layer-visual">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.eye}</div>
                        <div class="geo-layer-info">
                            <div class="geo-layer-title">Layer 1: Visual Triggers</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer1.desc}</div>
                        </div>
                    </div>
                    <div class="expand-indicator">${ICONS.plus}</div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">${visualSops.map(renderFrameworkSopCard).join('')}</div>
                </div>
            </div>
            <!-- Layer 2 -->
            <div class="geo-layer-card layer-calc">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.tool}</div>
                        <div class="geo-layer-info">
                            <div class="geo-layer-title">Layer 2: Calculation Tools</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer2.desc}</div>
                        </div>
                    </div>
                    <div class="expand-indicator">${ICONS.plus}</div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">${calcSops.map(renderFrameworkSopCard).join('')}</div>
                </div>
            </div>
            <!-- Layer 3 -->
            <div class="geo-layer-card layer-proof">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.brain}</div>
                        <div class="geo-layer-info">
                            <div class="geo-layer-title">Layer 3: Reasoning & Proof</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer3.desc}</div>
                        </div>
                    </div>
                    <div class="expand-indicator">${ICONS.plus}</div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">${proofSops.map(renderFrameworkSopCard).join('')}</div>
                </div>
            </div>
        </div>
    </section>`;
}

// ==========================================
// 7. RENDERER PART 3: NEW DEEP DIVE ENGINES
// ==========================================

function renderCircleEngine() {
    return `
    <div class="mb-12 animate-fade-in-up">
        <div style="border-left: 4px solid #a855f7; padding-left: 1rem; margin-bottom: 1.5rem;">
            <h2 class="text-gradient-purple" style="font-size: 1.5rem; font-weight: 800;">🟣 Circle Trigger Engine</h2>
            <span class="badge badge-purple">VISUAL LAYER · 8 SOPs + 6 COMBOS</span>
        </div>

        <!-- 8 Core SOP Tiles -->
        <div class="grid-4">
            ${CIRCLE_ENGINE_DATA.map(sop => `
                <div class="glass-card" onclick="this.classList.toggle('active')">
                    <!-- TOP: ID + Arrow -->
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem">
                        <span class="badge badge-purple">${sop.id}</span>
                        <span class="sop-arrow">▼</span>
                    </div>
                    
                    <!-- MIDDLE: Name -->
                    <div style="font-weight:700; color:#f1f5f9; margin-bottom:0.25rem">${sop.name}</div>
                    
                    <!-- BOTTOM: Trigger (Always Visible) -->
                    <div style="font-size:0.8rem; color:rgba(216,180,254,0.7); font-style:italic; margin-bottom:0.5rem">Trigger: ${sop.trigger}</div>
                    
                    <!-- EXPANDED: Cue & Rule -->
                    <div class="detail-panel">
                        <div class="detail-row"><div class="detail-label">Cue</div><div class="detail-text" style="color:#d8b4fe">${sop.cue}</div></div>
                        <div class="detail-row"><div class="detail-label">Rule</div><div class="detail-text">${sop.rule}</div></div>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- 6 Power Combos -->
        <div class="power-combos" style="background:rgba(168, 85, 247, 0.1); border:1px solid rgba(168, 85, 247, 0.3)">
            <div class="combo-header" style="color:#d8b4fe">⚡ 6 Power Combinations (Exam Patterns)</div>
            <div class="grid-2">
                ${CIRCLE_COMBOS.map(combo => `
                    <div class="glass-card" style="background:rgba(0,0,0,0.2)" onclick="this.classList.toggle('active')">
                        <div style="display:flex; justify-content:space-between; align-items:center">
                            <span style="font-weight:600; color:#e2e8f0; font-size:0.9rem">${combo.title}</span>
                            <span class="badge badge-purple">${combo.formula}</span>
                        </div>
                        <div class="detail-panel" style="margin-top:0.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1)">
                            <p><strong style="color:#d8b4fe">Use Case:</strong> ${combo.detail}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    `;
}

function renderAngleEngine() {
    return `
    <div class="mb-12 animate-fade-in-up" style="animation-delay: 0.1s">
        <div style="border-left: 4px solid #3b82f6; padding-left: 1rem; margin-bottom: 1.5rem;">
            <h2 class="text-gradient-blue" style="font-size: 1.5rem; font-weight: 800;">🔵 Angle Trigger Engine</h2>
            <span class="badge badge-blue">ANG-M00~M11 · FOUNDATION</span>
        </div>

        <div class="grid-4">
            ${ANGLE_ENGINE_DATA.map(sop => `
                <div class="glass-card" onclick="this.classList.toggle('active')">
                    <!-- TOP: ID + Arrow -->
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem">
                        <span class="badge badge-blue">${sop.id}</span>
                        <span class="sop-arrow">▼</span>
                    </div>
                    
                    <!-- MIDDLE: Name -->
                    <div style="font-weight:700; color:#f1f5f9; font-size:0.9rem; margin-bottom:0.25rem">${sop.name}</div>
                    
                    <!-- BOTTOM: Trigger (Always Visible) -->
                    <div style="font-size:0.8rem; color:rgba(147,197,253,0.7); font-style:italic; margin-bottom:0.5rem">Trigger: ${sop.trigger}</div>
                    
                    <!-- EXPANDED: Cue & Rule -->
                    <div class="detail-panel">
                        <div class="detail-row"><div class="detail-label">Cue</div><div class="detail-text" style="color:#93c5fd">${sop.cue}</div></div>
                        <div class="detail-row"><div class="detail-label">Rule</div><div class="detail-text">${sop.rule}</div></div>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- 5 Battle Strategies (ADDED) -->
        <div class="power-combos" style="background:rgba(59, 130, 246, 0.1); border:1px solid rgba(59, 130, 246, 0.3)">
            <div class="combo-header" style="color:#93c5fd">⚔️ 5 Geometry Battle Strategies (Trigger → Tool)</div>
            <div class="grid-2">
                ${ANGLE_COMBOS.map(combo => `
                    <div class="glass-card" style="background:rgba(0,0,0,0.2)" onclick="this.classList.toggle('active')">
                        <div style="display:flex; justify-content:space-between; align-items:center">
                            <span style="font-weight:600; color:#e2e8f0; font-size:0.9rem">${combo.title}</span>
                            <span class="badge badge-blue">${combo.formula}</span>
                        </div>
                        <div class="detail-panel" style="margin-top:0.5rem; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.1)">
                            <p><strong style="color:#93c5fd">Logic:</strong> ${combo.detail}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
    `;
}

function renderProofEngine() {
    return `
    <div class="mb-12 animate-fade-in-up" style="animation-delay: 0.2s">
        <div style="border-left: 4px solid #818cf8; padding-left: 1rem; margin-bottom: 1.5rem;">
            <h2 class="text-gradient-indigo" style="font-size: 1.5rem; font-weight: 800;">📜 Proof Engine & Templates</h2>
            <span class="badge" style="background:rgba(99,102,241,0.2); color:#a5b4fc; border:1px solid rgba(99,102,241,0.3)">AO3 WRITING</span>
        </div>

        <div class="grid-3">
            <!-- 1. Similarity -->
            <div class="glass-card" style="cursor:default">
                <h3 style="font-weight:700; color:#fb923c; margin-bottom:1rem">🟠 Similarity Proof</h3>
                <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:0.5rem; margin-bottom:0.5rem; font-family:monospace; font-size:0.85rem; color:#cbd5e1; border-left:2px solid #fb923c">
                    <div style="opacity:0.5; font-size:0.7rem; margin-bottom:0.25rem">// Header</div>
                    In △ABC and △PQR:
                </div>
                <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:0.5rem; margin-bottom:0.5rem; font-family:monospace; font-size:0.85rem; color:#cbd5e1; border-left:2px solid #fb923c">
                    <div style="opacity:0.5; font-size:0.7rem; margin-bottom:0.25rem">// 1. Match Angles</div>
                    1. ∠ABC = ∠PQR (Reason)<br>
                    2. ∠ACB = ∠PRQ (Reason)
                </div>
                <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:0.5rem; font-family:monospace; font-size:0.85rem; color:#cbd5e1; border-left:2px solid #fb923c">
                    <div style="opacity:0.5; font-size:0.7rem; margin-bottom:0.25rem">// 2. Conclusion</div>
                    ∴ △ABC is similar to △PQR (AA)
                </div>
            </div>

            <!-- 2. Congruency -->
            <div class="glass-card" style="cursor:default">
                <h3 style="font-weight:700; color:#34d399; margin-bottom:1rem">🟢 Congruency Proof</h3>
                <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:0.5rem; margin-bottom:0.5rem; font-family:monospace; font-size:0.85rem; color:#cbd5e1; border-left:2px solid #34d399">
                    <div style="opacity:0.5; font-size:0.7rem; margin-bottom:0.25rem">// Header</div>
                    In △ABC and △XYZ:
                </div>
                <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:0.5rem; margin-bottom:0.5rem; font-family:monospace; font-size:0.85rem; color:#cbd5e1; border-left:2px solid #34d399">
                    <div style="opacity:0.5; font-size:0.7rem; margin-bottom:0.25rem">// 1. Three Facts</div>
                    1. AB = XY (Given/Calc)<br>
                    2. BC = YZ (Reason)<br>
                    3. ∠B = ∠Y (Reason)
                </div>
                <div style="background:rgba(0,0,0,0.2); padding:0.75rem; border-radius:0.5rem; font-family:monospace; font-size:0.85rem; color:#cbd5e1; border-left:2px solid #34d399">
                    <div style="opacity:0.5; font-size:0.7rem; margin-bottom:0.25rem">// 2. Conclusion</div>
                    ∴ △ABC ≡ △XYZ (SAS)
                </div>
            </div>

            <!-- 3. Sentence Bank -->
            <div class="glass-card" style="cursor:default">
                <h3 style="font-weight:700; color:#818cf8; margin-bottom:1rem">🧠 Canonical Reasons Bank</h3>
                <div style="max-height:300px; overflow-y:auto; display:flex; flex-direction:column; gap:0.5rem">
                    ${PROOF_SENTENCES.map(s => `
                        <div style="font-size:0.8rem; font-family:monospace; color:#cbd5e1; background:rgba(67, 56, 202, 0.2); padding:0.5rem; border-radius:0.25rem; border:1px solid rgba(67, 56, 202, 0.3)">
                            ${s}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
}

function renderDeepDiveSection() {
    return `
    <section class="geo-deep-dive-section">
        <div class="geo-header-row">
            <h2 class="geo-framework-title" style="background: linear-gradient(135deg, #fff 0%, #a855f7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Full Cognitive Geometry Engines</h2>
            <div style="color: rgba(255,255,255,0.5)">Deep Dive · Independent Blocks</div>
        </div>
        
        ${renderCircleEngine()}
        ${renderAngleEngine()}
        ${renderProofEngine()}
        
    </section>
    `;
}

// ==========================================
// 8. INITIALIZATION & CONTROLS
// ==========================================
function init() {
    console.log("App Starting...");
    try {
        injectStyles();
        processData();
        
        const mainBody = document.body;
        const footer = document.querySelector('footer');

        // 1. Render Main Evolution Map
        const mapContainer = document.getElementById('evolution-map-container');
        if(mapContainer) {
            mapContainer.innerHTML = allCategories.map(cat => `
                <div class="category-card" data-id="${cat.id}">
                    <div class="category-header" onclick="toggleCategory(this)">
                        <div class="category-title-group">
                            <span class="category-icon">${cat.icon}</span>
                            <div>
                                <h2 class="category-title">${cat.title}</h2>
                                <p class="category-subtitle">${cat.archetypes.length} Archetypes</p>
                            </div>
                        </div>
                        <div class="expand-indicator">${ICONS.plus}</div>
                    </div>
                    <div class="category-content">
                        <div class="category-body">
                            ${cat.archetypes.map(renderArchetypeCard).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // 2. Render Classic Framework (Eye/Hand/Brain)
        let frameworkSection = document.querySelector('.geo-framework-section');
        if (!frameworkSection) {
            frameworkSection = document.createElement('div');
            frameworkSection.innerHTML = renderOriginalFramework();
            if(footer) mainBody.insertBefore(frameworkSection, footer);
            else mainBody.appendChild(frameworkSection);
        } else {
            frameworkSection.innerHTML = renderOriginalFramework(); // Update existing
        }

        // 3. Render New Deep Dive Engines (Below Classic)
        let deepDiveSection = document.querySelector('.geo-deep-dive-section');
        if (!deepDiveSection) {
            deepDiveSection = document.createElement('div');
            deepDiveSection.innerHTML = renderDeepDiveSection();
            if (frameworkSection.nextSibling) {
                frameworkSection.parentNode.insertBefore(deepDiveSection, frameworkSection.nextSibling);
            } else if (footer) {
                mainBody.insertBefore(deepDiveSection, footer);
            } else {
                mainBody.appendChild(deepDiveSection);
            }
        } else {
            deepDiveSection.innerHTML = renderDeepDiveSection();
        }

        setupSearch();
        console.log("App Loaded Successfully.");
        
    } catch (e) {
        console.error("Critical Error during Init:", e);
        document.body.innerHTML += `<div style="color:red; padding:20px; text-align:center">Error loading app: ${e.message}</div>`;
    }
}

// --- INTERACTION HANDLERS ---

// 1. Categories (Main Map)
window.toggleCategory = (el) => {
    const card = el.closest('.category-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

// 2. Archetypes (Main Map)
window.toggleArchetype = (el) => {
    const card = el.closest('.archetype-card');
    const container = card.nextElementSibling;
    card.classList.toggle('expanded');
    if(container) container.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    el.querySelector('.archetype-expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

// 3. Framework Layers (Original Geo)
window.toggleGeoLayer = (el) => {
    const card = el.closest('.geo-layer-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

// 4. GLOBAL EXPAND/COLLAPSE ALL (Controls EVERYTHING)
window.toggleAllCards = (expand) => {
    // Categories
    document.querySelectorAll('.category-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
        const icon = c.querySelector('.expand-indicator');
        if(icon) icon.innerHTML = expand ? ICONS.minus : ICONS.plus;
    });
    // Archetypes
    document.querySelectorAll('.archetype-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
        const container = c.nextElementSibling;
        if(container) container.style.display = expand ? 'block' : 'none';
        const icon = c.querySelector('.archetype-expand-indicator');
        if(icon) icon.innerHTML = expand ? ICONS.minus : ICONS.plus;
    });
    // Framework Layers
    document.querySelectorAll('.geo-layer-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
        const icon = c.querySelector('.expand-indicator');
        if(icon) icon.innerHTML = expand ? ICONS.minus : ICONS.plus;
    });
    // Classic SOPs & New Engine Cards
    document.querySelectorAll('.mini-sop, .glass-card').forEach(c => {
        if(expand) c.classList.add('active'); else c.classList.remove('active');
    });
    // Power Combos details
    document.querySelectorAll('.power-combos details').forEach(d => {
        if(expand) d.setAttribute('open', ''); else d.removeAttribute('open');
    });
};

window.toggleLegend = () => {
    const legend = document.getElementById('legend');
    if(legend) legend.classList.toggle('visible');
};

function setupSearch() {
    const input = document.getElementById('filter-search');
    if(!input) return;
    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().replace(/\s+/g, '');
        
        // Filter Main Map
        document.querySelectorAll('.category-card').forEach(cat => {
            let hasMatch = false;
            cat.querySelectorAll('.archetype-card-wrapper').forEach(wrapper => {
                const card = wrapper.querySelector('.archetype-card');
                const match = card.dataset.id?.toLowerCase().includes(val) || card.innerText.toLowerCase().replace(/\s+/g,'').includes(val);
                wrapper.style.display = match ? 'block' : 'none';
                if(match) hasMatch = true;
            });
            cat.style.display = hasMatch ? 'block' : 'none';
        });
        
        // Filter Framework SOPs
        document.querySelectorAll('.mini-sop').forEach(card => {
            const text = card.innerText.toLowerCase().replace(/\s+/g,'');
            card.style.display = text.includes(val) ? 'flex' : 'none';
        });

        // Filter New Engine Cards
        document.querySelectorAll('.glass-card').forEach(card => {
            const text = card.innerText.toLowerCase().replace(/\s+/g,'');
            if(card.style.cursor === 'default') return; // Don't hide Proof templates
            card.style.display = text.includes(val) ? 'block' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
