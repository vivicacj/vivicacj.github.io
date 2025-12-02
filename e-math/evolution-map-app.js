/**
 * evolution-map-app.js
 * v26.0 - MODULE A SOP DATA INTEGRATION FIX
 * * TARGETED FIX:
 * 1. MODULE A (Logic Framework): Now 'mini-sop' cards render FULL details from sops-data.js.
 * 2. VISUALS: Added Procedure, Pitfalls (Red), and Pro Tips (Green) to Layer 1/2/3 cards.
 * 3. SCOPE: Strictly limits changes to Module A renderer; preserves Module B and Archetypes.
 */

import { ARCHETYPES_DATA } from './archetypes-data.js';
import { SOPS_DATA } from './sops-data.js';
import { ENGINES_DATA } from './engines-data.js';

// ==========================================
// 1. GLOBAL HELPERS
// ==========================================
function getList(obj, ...keys) {
    if (!obj) return [];
    for (const key of keys) {
        if (obj[key] && Array.isArray(obj[key]) && obj[key].length > 0) return obj[key];
    }
    return [];
}

// ==========================================
// 2. CONFIG & ICONS
// ==========================================
const ICONS = {
    'D1': '🔢', 'D2': '📐', 'D3': '📊', 'L2L3': '🧩', 'Topic': '📑',
    plus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5V19M5 12H19"/></svg>`,
    minus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19"/></svg>`,
    branch: `<svg class="icon-sm" style="color: var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v18M6 11h13"/></svg>`,
    eye: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    tool: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    brain: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
    chevronDown: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
    Topic: '📑'
};

const GEO_LOGIC_MAP = {
    layer1: { title: "Layer 1 (Eye): Visual Triggers 👁️", desc: "Scan -> Match: Identify visual features, instantly recall theorems", color: "#06b6d4", items: new Set(["SOP-ANG-M00", "SOP-ANG-M01", "SOP-ANG-M02", "SOP-ANG-M03", "SOP-ANG-M04", "SOP-ANG-M05", "SOP-ANG-M06", "SOP-ANG-M07", "SOP-ANG-M08", "SOP-ANG-M09", "SOP-ANG-M10", "SOP-ANG-M11", "SOP-GEO-CIRC-01", "SOP-GEO-CIRC-02", "SOP-GEO-CIRC-03", "SOP-GEO-CIRC-04", "SOP-GEO-CIRC-05", "SOP-GEO-CIRC-06", "SOP-GEO-CIRC-07", "SOP-GEO-CONG-01"]) },
    layer2: { title: "Layer 2 (Hand): Calculation Tools 🛠️", desc: "Execute: Establish relationships, solve using formulas", color: "#f59e0b", items: new Set(["SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03", "SOP-GEO-COORD-04", "SOP-GEO-COORD-05", "SOP-GEO-COORD-06", "SOP-GEO-COORD-07", "SOP-GEO-COORD-08", "SOP-GEO-COORD-09", "SOP-GEO-COORD-10", "SOP-TRIG-01", "SOP-TRIG-02", "SOP-TRIG-03", "SOP-TRIG-04", "SOP-L2-TRIG-01", "SOP-MEN-01", "SOP-MEN-02", "SOP-MEN-03", "SOP-MEN-04", "SOP-GEO-SIM-02", "SOP-GEO-SIM-03", "SOP-GEO-SIM-04", "SOP-GEO-CIRC-08", "SOP-GEO-PYTH-01", "SOP-GEO-PYTH-02", "SOP-GEO-CONS-01", "SOP-GEO-CONS-02", "SOP-GEO-CONS-03", "SOP-GEO-CONS-04", "SOP-GEO-CONS-05", "SOP-GEO-CONS-06", "SOP-GEO-BEAR-01", "SOP-GEO-BEAR-02", "SOP-GEO-BEAR-03", "SOP-GEO-TRANS-01", "SOP-GEO-TRANS-02", "SOP-GEO-TRANS-03", "SOP-GEO-TRANS-04", "SOP-GEO-TRANS-05"]) },
    layer3: { title: "Layer 3 (Brain): Reasoning & Proof 🗣️", desc: "Format & Logic: Write rigorous proof steps", color: "#8b5cf6", items: new Set(["SOP-GEO-SIM-01", "SOP-GEO-CONG-02"]) }
};

const DOMAIN_TITLES = {
    'angle': 'ANGLE ENGINES',
    'circle': 'CIRCLE ENGINES',
    'coordinate': 'COORDINATE ENGINES',
    'mixed': 'MIXED / MENSURATION / TRIG / OTHERS'
};

// Global State
let allCategories = [];
let archetypeMap = new Map();
let engineSopMap = new Map(); 
let genericSopMap = new Map();

// ==========================================
// 3. DATA PROCESSING
// ==========================================
function processData() {
    // 1. Index Generic SOPs (From sops-data.js) - Content Source (Steps, Pitfalls)
    genericSopMap.clear();
    if(SOPS_DATA) {
        SOPS_DATA.forEach(sop => genericSopMap.set(sop.id, sop));
    }

    // 2. Index Engine SOPs (From engines-data.js) - Context Source (Trigger, Rule)
    engineSopMap.clear();
    if (ENGINES_DATA) {
        Object.values(ENGINES_DATA).forEach(domain => {
            if (domain.sops && Array.isArray(domain.sops)) {
                domain.sops.forEach(sop => engineSopMap.set(sop.id, sop));
            }
        });
    }

    // 3. Process Archetypes
    if (!ARCHETYPES_DATA) { console.error("Missing ARCHETYPES_DATA"); return; }
    const allArchetypes = JSON.parse(JSON.stringify(ARCHETYPES_DATA)).map(a => ({...a, children: [] }));
    archetypeMap.clear();
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
    
    allCategories = [
        { id: 'l1-d1', title: 'I. L1 - Number & Algebra', icon: ICONS['D1'], archetypes: topLevelArchetypes.filter(a => a.domain.includes('D1')) },
        { id: 'l1-d2', title: 'II. L1 - Geometry & Measurement', icon: ICONS['D2'], archetypes: topLevelArchetypes.filter(a => a.domain.includes('D2')) },
        { id: 'l1-d3', title: 'III. L1 - Statistics & Probability', icon: ICONS['D3'], archetypes: topLevelArchetypes.filter(a => a.domain.includes('D3')) },
        { id: 'l2-l3', title: 'IV. L2 & L3 - Integrated Models', icon: ICONS['L2L3'], archetypes: topLevelArchetypes.filter(a => a.level === 'L2' || a.level === 'L3') }
    ];
}

// === 4. HYBRID DATA ACCESSOR ===
function getMixedSopData(id) {
    if (!id) return null;
    const cleanId = id.trim();
    
    const engineData = engineSopMap.get(cleanId);
    const genericData = genericSopMap.get(cleanId);
    
    // Base object
    let result = {
        id: cleanId,
        name: genericData?.name || engineData?.name || cleanId,
        description: genericData?.description || engineData?.description || "-",
    };

    // 1. ENGINE FIELDS (Trigger, Rule, Chain, Exam Usage) - Prioritize Engine Data
    result.trigger = engineData?.trigger || genericData?.description || "-";
    result.rule = engineData?.rule || (genericData?.steps ? "See Procedure" : "-");
    
    // Chain / Steps Strategy
    if (engineData?.chain) {
        result.chain = engineData.chain;
    } else if (genericData?.steps && genericData.steps.length > 0) {
        result.chain = genericData.steps.join(" → ");
    } else {
        result.chain = "-";
    }

    result.exam_usage = engineData?.exam_usage || "-";
    result.micro_skills = engineData?.micro_skills || "-";

    // 2. CONTENT FIELDS (Steps, Pitfalls, Pro Tips) - From Generic Data (sops-data.js)
    result.steps = genericData?.steps || [];
    
    // Pitfalls: Combine both sources if available
    result.pitfalls_summary = engineData?.pitfalls || null;
    result.pitfalls_list = genericData?.pitfalls || []; // Detailed array from SOP

    // Pro Tips: Only in Generic
    result.pro_tips = genericData?.pro_tips || genericData?.proTips || [];

    return result;
}

// ==========================================
// 5. STYLE INJECTION
// ==========================================
function injectStyles() {
    const styleId = 'geo-framework-styles';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* --- GLOBAL UTILS --- */
        .sop-section { margin-top: 1rem; padding: 1.5rem; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); }
        .hidden { display: none !important; }
        .text-accent { color: var(--accent); }
        
        /* --- LIST STYLES --- */
        .sop-steps-list { list-style: decimal inside; color: #cbd5e1; font-size: 0.9em; padding-left: 0.5rem; }
        .sop-steps-list li { margin-bottom: 0.5rem; line-height: 1.5; }
        
        /* --- BADGES & ALERTS --- */
        .pitfall-item { background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; gap: 0.75rem; border-radius: 4px; color: #fca5a5; font-size: 0.85em; align-items: flex-start; }
        .pro-tip-item { background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; padding: 0.75rem; margin-bottom: 0.5rem; display: flex; gap: 0.75rem; border-radius: 4px; color: #86efac; font-size: 0.85em; align-items: flex-start; }
        .pitfall-badge { background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7em; font-weight: bold; white-space: nowrap; flex-shrink: 0; }
        .pro-tip-badge { background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7em; font-weight: bold; white-space: nowrap; flex-shrink: 0; }

        /* --- MODULE A: LOGIC FRAMEWORK --- */
        .geo-framework-section { padding: 4rem 2rem; max-width: 1600px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4rem; }
        .geo-header-row { display: flex; justify-content: center; align-items: center; position: relative; margin-bottom: 2rem; }
        .geo-framework-title { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #fff 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
        .geo-stack { display: flex; flex-direction: column; gap: 1.5rem; }
        .geo-layer-card { background: rgba(255,255,255,0.03); border-radius: 1rem; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; transition: all 0.3s ease; }
        .geo-layer-card.expanded { border-color: var(--layer-color); background: rgba(255,255,255,0.05); }
        .geo-layer-header { padding: 1.5rem 2rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between; }
        .geo-layer-title-group { display: flex; align-items: center; gap: 1.5rem; }
        .geo-layer-icon { font-size: 2rem; color: var(--layer-color); }
        .geo-layer-title { font-size: 1.25rem; font-weight: 700; color: #fff; }
        .geo-layer-desc { font-size: 0.95rem; opacity: 0.7; color: #cbd5e1; }
        .geo-count-badge { background: rgba(0,0,0,0.3); color: var(--layer-color); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.85rem; font-weight: 600; border: 1px solid var(--layer-color); }
        .geo-layer-body { max-height: 0; overflow: hidden; transition: max-height 0.5s ease; opacity: 0; }
        .geo-layer-card.expanded .geo-layer-body { max-height: 8000px; opacity: 1; padding: 0 2rem 2rem 2rem; }
        .geo-sop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; margin-top: 1rem; }
        .mini-sop { background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 0.75rem; padding: 1rem; cursor: pointer; transition: all 0.2s; }
        .mini-sop:hover { border-color: rgba(255,255,255,0.2); }
        .mini-sop.active { border-color: var(--layer-color); background: rgba(255,255,255,0.05); }
        .mini-sop-detail { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; font-size: 0.9rem; color: #94a3b8; padding-top: 0.5rem; }
        .mini-sop.active .mini-sop-detail { max-height: 500px; }
        .layer-visual { --layer-color: #06b6d4; } .layer-calc { --layer-color: #f59e0b; } .layer-proof { --layer-color: #8b5cf6; }

        /* --- MODULE B: ENGINES --- */
        .engines-section { padding: 0 2rem 6rem 2rem; max-width: 1600px; margin: 0 auto; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4rem; }
        .domain-block { margin-bottom: 2rem; background: rgba(255,255,255,0.02); border-radius: 1.5rem; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; transition: all 0.3s ease; }
        .domain-block.expanded { background: rgba(255,255,255,0.01); border-color: var(--accent); }
        .domain-header { display: flex; align-items: center; justify-content: space-between; padding: 2rem; cursor: pointer; background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 100%); }
        .domain-header:hover { background: rgba(255,255,255,0.04); }
        .domain-title-group { display: flex; align-items: center; gap: 1.5rem; }
        .domain-title { font-size: 1.75rem; font-weight: 800; color: #fff; text-transform: uppercase; letter-spacing: 1px; }
        .domain-pill { padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; border: 1px solid currentColor; color: var(--accent); }
        .domain-content { max-height: 0; overflow: hidden; transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0; }
        .domain-block.expanded .domain-content { max-height: 12000px; opacity: 1; padding: 0 2rem 2rem 2rem; }
        
        .grid-section-title { font-size: 1.1rem; font-weight: 700; color: var(--accent); margin: 3rem 0 1.5rem 0; display: flex; align-items: center; gap: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }
        .grid-section-title::before { content: ''; width: 24px; height: 4px; background: currentColor; border-radius: 2px; }
        
        .engines-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
        .engine-card { background: linear-gradient(145deg, rgba(30, 41, 59, 0.6), rgba(15, 23, 42, 0.8)); border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1.5rem; position: relative; transition: all 0.3s ease; display: flex; flex-direction: column; }
        .engine-card:hover { border-color: var(--accent); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5); transform: translateY(-2px); }
        .engine-card.expanded { grid-column: span 1; background: rgba(30, 41, 59, 1); border-color: var(--accent); z-index: 10; box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
        
        .engine-header { margin-bottom: 1rem; }
        .engine-id-badge { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; background: rgba(255,255,255,0.05); padding: 3px 8px; border-radius: 6px; color: var(--accent); border: 1px solid rgba(255,255,255,0.1); display: inline-block; margin-bottom: 0.5rem; }
        .engine-name { font-size: 1.25rem; font-weight: 800; color: #f1f5f9; margin-bottom: 0.5rem; line-height: 1.3; }
        .engine-desc { font-size: 0.95rem; color: #cbd5e1; line-height: 1.6; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 1rem; }
        
        .toggle-sops-btn { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 0.75rem; border-radius: 0.5rem; cursor: pointer; width: 100%; text-align: center; font-size: 0.85rem; font-weight: 600; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .toggle-sops-btn:hover { background: rgba(255,255,255,0.08); color: #fff; border-color: var(--accent); }
        .toggle-sops-btn.active { background: var(--accent); color: #000; border-color: var(--accent); }
        
        .nested-sops-container { display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed rgba(255,255,255,0.15); animation: slideDown 0.3s ease-out; }
        .nested-sops-container.visible { display: block; }
        
        .embedded-sop-card { background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-left: 3px solid var(--primary); border-radius: 0.5rem; margin-bottom: 1rem; padding: 1rem; }
        .embedded-sop-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.5rem; }
        .embedded-sop-id { font-family: monospace; color: var(--primary); font-size: 0.8rem; font-weight: 700; }
        .embedded-sop-name { color: #fff; font-weight: 600; font-size: 0.9rem; }
        
        .sop-fields-grid { display: grid; gap: 0.75rem; }
        .sop-field { display: flex; flex-direction: column; gap: 0.25rem; }
        .sop-field-label { font-size: 0.7rem; text-transform: uppercase; color: #64748b; font-weight: 700; }
        .sop-field-val { font-size: 0.85rem; color: #cbd5e1; line-height: 1.4; }
        .sop-field-val.code { font-family: monospace; color: #fca5a5; }
        
        .pc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap: 1.5rem; }
        .pc-card { background: linear-gradient(135deg, rgba(244, 63, 94, 0.05), rgba(15, 23, 42, 0.05)); border: 1px solid rgba(244, 63, 94, 0.2); border-radius: 1rem; padding: 1.5rem; position: relative; display: flex; flex-direction: column; gap: 1rem; }
        .pc-card::before { content: 'TACTIC'; position: absolute; top: 1rem; right: 1rem; font-size: 0.65rem; background: rgba(244, 63, 94, 0.1); color: #f43f5e; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(244, 63, 94, 0.2); font-weight: 700; }
        .pc-id { font-family: monospace; font-size: 0.75rem; color: #64748b; display: block; margin-bottom: 0.25rem; }
        .pc-title { font-size: 1.2rem; font-weight: 700; color: #fff; margin: 0; line-height: 1.3; padding-right: 80px; }
        .pc-section-box { background: rgba(0,0,0,0.2); border-radius: 0.5rem; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.05); }
        .pc-label { font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 700; margin-bottom: 0.4rem; display: block; }
        .pc-val { font-size: 0.9rem; color: #e2e8f0; line-height: 1.5; }
        .pc-chain { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; color: #fca5a5; font-family: monospace; font-size: 0.85rem; }
        .chain-arrow { color: #64748b; }
        .pc-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.85rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1rem; }
        .pc-detail-col { display: flex; flex-direction: column; gap: 0.75rem; }
        .pc-field strong { display: block; color: #64748b; font-size: 0.7rem; text-transform: uppercase; margin-bottom: 0.25rem; }
        .pc-field span { color: #cbd5e1; }
        .pc-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .pc-tag { font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); font-family: monospace; }
        .pc-tag.tool { background: rgba(245, 158, 11, 0.1); color: #f59e0b; border-color: rgba(245, 158, 11, 0.2); }
        .pc-tag.link { background: rgba(6, 182, 212, 0.1); color: #06b6d4; border-color: rgba(6, 182, 212, 0.2); }
        
        .expand-indicator { color: var(--accent); transition: transform 0.3s ease; }
        .domain-block.expanded .expand-indicator { transform: rotate(180deg); }

        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        @media(max-width: 768px) {
            .engines-grid, .pc-grid { grid-template-columns: 1fr; }
            .domain-header { flex-direction: column; align-items: flex-start; }
            .pc-details-grid { grid-template-columns: 1fr; }
        }
        
        /* Archetype Card Styles */
        .archetype-card-wrapper { }
        .archetype-card { background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)); border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1rem 1.5rem; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.3s ease; margin-top: 1rem; }
        .archetype-card:hover { background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04)); border-color: var(--primary); transform: translateX(5px); }
        .archetype-card.level-1 { border-left: 4px solid #10b981; }
        .archetype-card.level-2 { border-left: 4px solid #f59e0b; }
        .archetype-card.level-3 { border-left: 4px solid #ef4444; }
        .archetype-title { font-size: 1.125rem; font-weight: 600; color: #f1f5f9; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
        .archetype-name { display: flex; align-items: center; gap: 0.75rem; }
        .archetype-id { font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #94a3b8; background: #1e293b; padding: 0.1rem 0.5rem; border-radius: 0.375rem; border: 1px solid rgba(255,255,255,0.1); margin-left: 0.25rem; }
        .level-badge { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
        .archetype-expand-indicator { transition: transform 0.3s ease; color: var(--accent); flex-shrink: 0; }
        .archetype-details-container { padding: 1rem 1rem 1rem 2.5rem; display: none; background: #1e293b; border-top: 1px solid rgba(255,255,255,0.1); margin-top: -1rem; padding-top: 2rem; border-radius: 0 0 1rem 1rem; }
        .archetype-card.is-parent.expanded + .archetype-details-container, .archetype-card.is-standalone.expanded + .archetype-details-container { display: block; }
        .archetype-card.is-parent.expanded, .archetype-card.is-standalone.expanded { border-radius: 1rem 1rem 0 0; }
        .archetype-child-list-container { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
        .archetype-child-card { background: rgba(255, 255, 255, 0.02); border-left-width: 2px; margin-top: 0; }
        .branches-overview { margin-bottom: 24px; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 4px solid var(--accent); }
    `;
    document.head.appendChild(style);
}

// ==========================================
// 6. RENDERERS: FIGURE 1 (ARCHETYPES)
// ==========================================
function renderArchetypeCard(archetype) { 
    const level = archetype.level || 'L?';
    const levelClass = `level-${level.toLowerCase().replace('l', '')}`;
    const hasChildren = archetype.children && archetype.children.length > 0;
    return `<div class="archetype-card-wrapper"><div class="archetype-card ${levelClass} ${hasChildren?'is-parent':'is-standalone'}" id="arch-${archetype.id}" onclick="toggleArchetype(this)" data-name="${(archetype.name||'').toLowerCase()}" data-id="${(archetype.id||'').toLowerCase()}"><div class="archetype-title"><span class="level-badge">${level}</span><span class="archetype-name">${archetype.name} ${hasChildren?ICONS.branch:''}</span><span class="archetype-id">${archetype.id}</span>${hasChildren?`<span class="branch-count-badge">${archetype.children.length} sub-models</span>`:''}</div><div class="archetype-expand-indicator">${ICONS.plus}</div></div><div class="archetype-details-container" style="display:none;">${renderInPlaceContent(archetype, hasChildren)}</div></div>`;
}

function renderInPlaceContent(archetype, hasChildren) {
    let html = `<div class="branches-overview"><p>${archetype.description || 'No description available.'}</p></div>`;
    
    // 1. Linked SOPs (Required & Support)
    html += renderSopDetails(archetype);

    // 2. Specifics (MicroSkills, Pitfalls)
    html += renderArchetypeSpecifics(archetype);
    
    // 3. Children (Sub-models)
    if (hasChildren) {
        html += `<h4 class="modal-sub-branch-title">Sub-Models</h4>`;
        html += `<div class="archetype-child-list-container">`;
        html += archetype.children.map(child => `
            <div class="archetype-child-card archetype-card level-${child.level.toLowerCase().replace('l','')}"
                 onclick="showModalForArchetype('${child.id}'); event.stopPropagation();">
                <div class="archetype-title">
                    <span class="branch-prefix">${ICONS.Topic}</span>
                    <span class="level-badge">${child.level}</span>
                    <span class="archetype-name">${child.name}</span>
                    <span class="archetype-id">${child.id}</span>
                </div>
            </div>
        `).join('');
        html += `</div>`;
    }
    return html;
}

function renderSopDetails(archetype) {
    let html = '';
    const required = getList(archetype, 'requiredSOPs');
    if (required.length > 0) {
        html += `<h4 class="modal-sub-branch-title">Required SOPs</h4>`;
        required.forEach(sopId => html += renderSingleSopCard(sopId));
    }
    const support = getList(archetype, 'supportSOPs');
    if (support.length > 0) {
        html += `<h4 class="modal-sub-branch-title">Support SOPs</h4>`;
        support.forEach(sopId => html += renderSingleSopCard(sopId));
    }
    return html;
}

function renderSingleSopCard(sopId) {
    // Reuse the hybrid data accessor to get Pro Tips/Pitfalls even for Archetypes
    const sop = getMixedSopData(sopId); 
    
    // Render Steps
    let content = `<ul class="sop-steps-list">
        ${sop.steps && sop.steps.length > 0 ? sop.steps.map(s => `<li>${s}</li>`).join('') : '<li>Refer to Engine Module for specific chain.</li>'}
    </ul>`;

    // Add Pitfalls (Rich Array) - FIXED [object Object] by extracting text
    if (sop.pitfalls_list && sop.pitfalls_list.length > 0) {
        content += `<div style="margin-top:1rem;">${sop.pitfalls_list.map(p => {
            const text = typeof p === 'string' ? p : (p.text || JSON.stringify(p));
            const type = typeof p === 'object' && p.type ? p.type : 'Error';
            return `<div class="pitfall-item"><span class="pitfall-badge">${type}</span><span>${text}</span></div>`;
        }).join('')}</div>`;
    }

    // Add Pro Tips
    if (sop.pro_tips && sop.pro_tips.length > 0) {
        content += `<div style="margin-top:0.5rem;">${sop.pro_tips.map(t => {
            const text = typeof t === 'string' ? t : (t.text || JSON.stringify(t));
            return `<div class="pro-tip-item"><span class="pro-tip-badge">Pro Tip</span><span>${text}</span></div>`;
        }).join('')}</div>`;
    }

    return `
      <div class="sop-section">
        <p class="sop-goal"><strong>${sop.name}</strong><br>${sop.description || ''}</p>
        ${content}
      </div>`;
}

function renderArchetypeSpecifics(archetype) {
    let html = '';
    const microSkills = getList(archetype, 'microSkills');
    const pitfalls = getList(archetype, 'pitfalls');
    const tips = getList(archetype, 'proTips');

    if (microSkills.length > 0) {
        html += `<h4 class="modal-sub-branch-title">Micro-Skills & Competencies</h4>`;
        html += `<div class="sop-section" style="border-left: 3px solid var(--accent); margin-bottom: 1rem;">
            <ul style="list-style: disc; padding-left: 1.5rem; color: #e2e8f0; margin: 0;">
                ${microSkills.map(m => `<li style="margin-bottom:0.5rem;">${typeof m === 'string' ? m : m.text}</li>`).join('')}
            </ul>
        </div>`;
    }
    if (pitfalls.length > 0) {
        html += `<div style="margin-top: 1rem;">
            ${pitfalls.map(p => {
                const text = typeof p === 'string' ? p : (p.text || JSON.stringify(p));
                return `<div class="pitfall-item"><span class="pitfall-badge">Error</span><span>${text}</span></div>`;
            }).join('')}
        </div>`;
    }
    if (tips.length > 0) {
        html += `<div style="margin-top: 0.5rem;">
            ${tips.map(t => {
                const text = typeof t === 'string' ? t : (t.text || JSON.stringify(t));
                return `<div class="pro-tip-item"><span class="pro-tip-badge">Tip</span><span>${text}</span></div>`;
            }).join('')}
        </div>`;
    }
    return html;
}

// ==========================================
// 7. RENDERER: MODULE A - GEO LOGIC FRAMEWORK
// ==========================================
function getSopsForLayer(layerType) {
    const layerConfig = GEO_LOGIC_MAP[layerType];
    if (!layerConfig) return [];
    return SOPS_DATA.filter(sop => layerConfig.items.has(sop.id));
}

function renderMiniSopCard(sop) {
    // 1. Get detailed data (steps, pitfalls, pro_tips)
    // NOTE: This uses the direct SOPS_DATA structure, which matches Module A needs
    const steps = sop.steps || [];
    const pitfalls = sop.pitfalls || [];
    const proTips = sop.proTips || sop.pro_tips || [];

    // 2. Build the HTML content
    return `
    <div class="mini-sop" onclick="this.classList.toggle('active')">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <div style="font-weight:700; font-size:0.95rem; color:#e2e8f0;">${sop.id}</div>
            <div style="font-size:0.8rem;">▼</div>
        </div>
        <div style="font-size:0.85rem; color:#cbd5e1; margin-top:0.25rem;">${sop.name.split('·')[1] || sop.name}</div>
        <div class="mini-sop-detail">
            <div style="margin-bottom:0.5rem; font-style:italic;">${sop.description}</div>
            
            <!-- Procedure -->
            ${steps.length > 0 ? `
                <div style="margin-top:0.5rem; font-weight:700; font-size:0.75rem; color:#64748b; text-transform:uppercase;">Procedure</div>
                <ol style="list-style:decimal inside; padding-left:0.25rem; color:#cbd5e1; font-size:0.85rem;">
                    ${steps.map(s => `<li>${s}</li>`).join('')}
                </ol>
            ` : ''}

            <!-- Pitfalls (Red) -->
            ${pitfalls.length > 0 ? `
                <div style="margin-top:0.75rem;">
                    ${pitfalls.map(p => `
                        <div class="pitfall-item" style="padding:0.5rem; margin-bottom:0.25rem;">
                            <span class="pitfall-badge" style="font-size:0.6rem;">${p.type || 'Error'}</span>
                            <span style="font-size:0.8rem;">${p.text}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}

            <!-- Pro Tips (Green) -->
            ${proTips.length > 0 ? `
                <div style="margin-top:0.5rem;">
                    ${proTips.map(t => `
                        <div class="pro-tip-item" style="padding:0.5rem; margin-bottom:0.25rem;">
                            <span class="pro-tip-badge" style="font-size:0.6rem;">Tip</span>
                            <span style="font-size:0.8rem;">${typeof t === 'string' ? t : t.text}</span>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    </div>`;
}

function renderGeoFrameworkSection() {
    const visualSops = getSopsForLayer('layer1');
    const calcSops = getSopsForLayer('layer2');
    const proofSops = getSopsForLayer('layer3');

    return `
    <section class="geo-framework-section">
        <div class="geo-header-row">
            <h2 class="geo-framework-title">Module A: Geometry SOP Logic Framework</h2>
        </div>
        
        <div class="geo-stack">
            <!-- Layer 1 -->
            <div class="geo-layer-card layer-visual" id="geo-layer-1">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.eye}</div>
                        <div>
                            <div class="geo-layer-title">Layer 1: Visual Triggers</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer1.desc}</div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <span class="geo-count-badge">${visualSops.length} SOPs</span>
                        <div>${ICONS.plus}</div>
                    </div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">${visualSops.map(renderMiniSopCard).join('')}</div>
                </div>
            </div>

            <!-- Layer 2 -->
            <div class="geo-layer-card layer-calc" id="geo-layer-2">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.tool}</div>
                        <div>
                            <div class="geo-layer-title">Layer 2: Calculation Tools</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer2.desc}</div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <span class="geo-count-badge">${calcSops.length} SOPs</span>
                        <div>${ICONS.plus}</div>
                    </div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">${calcSops.map(renderMiniSopCard).join('')}</div>
                </div>
            </div>

            <!-- Layer 3 -->
            <div class="geo-layer-card layer-proof" id="geo-layer-3">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.brain}</div>
                        <div>
                            <div class="geo-layer-title">Layer 3: Reasoning & Proof</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer3.desc}</div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <span class="geo-count-badge">${proofSops.length} SOPs</span>
                        <div>${ICONS.plus}</div>
                    </div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">${proofSops.map(renderMiniSopCard).join('')}</div>
                </div>
            </div>
        </div>
    </section>
    `;
}

// ==========================================
// 8. RENDERER: MODULE B - COGNITIVE ENGINES (FIGURE 2)
// ==========================================

function renderEmbeddedSop(sopId) {
    const sop = getMixedSopData(sopId);
    
    // Pitfalls: Combine Engine Summary (String) + Generic Details (Array)
    let pitfallsContent = "";
    // Engine Summary
    if(sop.pitfalls_summary && sop.pitfalls_summary !== "-") {
        pitfallsContent += `<div style="margin-bottom:0.5rem; color:#fca5a5;">${sop.pitfalls_summary}</div>`;
    }
    // Generic Array - FIXED [object Object] by parsing .text
    if(sop.pitfalls_list && sop.pitfalls_list.length > 0) {
        pitfallsContent += sop.pitfalls_list.map(p => {
            const text = typeof p === 'string' ? p : (p.text || JSON.stringify(p));
            const type = typeof p === 'object' && p.type ? p.type : 'Error';
            return `<div class="pitfall-item" style="font-size:0.8rem; padding:0.5rem;"><span class="pitfall-badge" style="font-size:0.6rem;">${type}</span><span>${text}</span></div>`;
        }).join('');
    }
    if (!pitfallsContent) pitfallsContent = "-";

    // Pro Tips: From Generic SOP
    let proTipsContent = "-";
    if(sop.pro_tips && sop.pro_tips.length > 0) {
        proTipsContent = sop.pro_tips.map(t => {
            const text = typeof t === 'string' ? t : (t.text || JSON.stringify(t));
            return `<div class="pro-tip-item" style="font-size:0.8rem; padding:0.5rem;"><span class="pro-tip-badge" style="font-size:0.6rem;">Tip</span><span>${text}</span></div>`;
        }).join('');
    }

    // Procedure (Steps)
    let procedureContent = "-";
    if(sop.steps && sop.steps.length > 0) {
        procedureContent = `<ul class="sop-steps-list">${sop.steps.map(s => `<li>${s}</li>`).join('')}</ul>`;
    }

    return `
    <div class="embedded-sop-card">
        <div class="embedded-sop-header">
            <span class="embedded-sop-id">${sop.id}</span>
            <span class="embedded-sop-name">${sop.name}</span>
        </div>
        <div class="sop-fields-grid">
            <div class="sop-field"><span class="sop-field-label">Trigger</span><span class="sop-field-val" style="color:var(--accent);">${sop.trigger}</span></div>
            <div class="sop-field"><span class="sop-field-label">Rule</span><span class="sop-field-val">${sop.rule}</span></div>
            <div class="sop-field"><span class="sop-field-label">Chain</span><span class="sop-field-val code">${sop.chain}</span></div>
            <div class="sop-field"><span class="sop-field-label">Procedure (Detailed Steps)</span><span class="sop-field-val">${procedureContent}</span></div>
            <div class="sop-field"><span class="sop-field-label">Exam Usage</span><span class="sop-field-val">${sop.exam_usage}</span></div>
            <div class="sop-field"><span class="sop-field-label">Pitfalls</span><span class="sop-field-val">${pitfallsContent}</span></div>
            <div class="sop-field"><span class="sop-field-label">Pro Tips</span><span class="sop-field-val">${proTipsContent}</span></div>
            <div class="sop-field"><span class="sop-field-label">Micro-Skills</span><span class="sop-field-val">${sop.micro_skills}</span></div>
        </div>
    </div>`;
}

function renderEngineCard(engine, isRichDomain) {
    const sopsList = engine.sops || [];
    const hasSops = sopsList.length > 0;
    const showEmbeddedSops = isRichDomain && hasSops;

    return `
    <div class="engine-card">
        <div class="engine-header">
            <span class="engine-id-badge">${engine.engine_id}</span>
            <div class="engine-name">${engine.engine_name}</div>
            <span class="engine-layer-tag">${engine.layer || 'Cognitive Layer'}</span>
            <div class="engine-desc">${engine.description}</div>
        </div>
        
        ${showEmbeddedSops ? `
            <div class="engine-action-area" style="margin-top:auto;">
                <button class="toggle-sops-btn" onclick="toggleEngineSops(this)">
                    View SOP Specifications (${sopsList.length}) ${ICONS.chevronDown}
                </button>
                <div class="nested-sops-container">
                    ${sopsList.map(sid => renderEmbeddedSop(sid)).join('')}
                </div>
            </div>
        ` : ''}
    </div>`;
}

function renderPowerComboCard(pc) {
    return `
    <div class="pc-card">
        <div>
            <span class="pc-id">${pc.pc_id}</span>
            <div class="pc-title">${pc.title}</div>
        </div>
        <div class="pc-section-box">
            <span class="pc-label">Trigger</span>
            <div class="pc-val" style="color:var(--accent); font-weight:600;">${pc.trigger || '-'}</div>
        </div>
        <div class="pc-section-box" style="background:rgba(255,255,255,0.02);">
            <span class="pc-label">Rule / Theorem</span>
            <div class="pc-val">${pc.rule || '-'}</div>
        </div>
        <div class="pc-section-box">
            <span class="pc-label">Tactical Chain</span>
            <div class="pc-chain">
                ${pc.chain ? pc.chain.split('→').map(step => `<span>${step.trim()}</span>`).join('<span class="chain-arrow">→</span>') : '-'}
            </div>
        </div>
        <div class="pc-details-grid">
            <div class="pc-detail-col">
                <div class="pc-field"><strong>Exam Usage</strong><span>${pc.exam_usage || '-'}</span></div>
                <div class="pc-field"><strong>Pitfalls</strong><span style="color:#fca5a5;">${pc.pitfalls || '-'}</span></div>
            </div>
            <div class="pc-detail-col">
                <div class="pc-field"><strong>Micro-Skills</strong><span>${pc.micro_skills || '-'}</span></div>
                <div class="pc-field">
                    <strong>Tools</strong>
                    <div class="pc-tags">${pc.tools ? pc.tools.map(t => `<span class="pc-tag tool">${t}</span>`).join('') : '-'}</div>
                </div>
                <div class="pc-field">
                    <strong>Links</strong>
                    <div class="pc-tags">${pc.sop_links ? pc.sop_links.map(s => `<span class="pc-tag link">${s}</span>`).join('') : '-'}</div>
                </div>
            </div>
        </div>
    </div>`;
}

function renderDomainSection(key, domainData) {
    const isRichDomain = (key === 'angle' || key === 'circle');
    const colors = { angle: '#06b6d4', circle: '#8b5cf6', coordinate: '#10b981', mixed: '#f59e0b' };
    const accent = colors[key] || '#fff';
    const displayTitle = DOMAIN_TITLES[key] || domainData.title;

    return `
    <div class="domain-block" style="--accent: ${accent}">
        <div class="domain-header" onclick="toggleDomainSection(this)">
            <div class="domain-title-group">
                <h3 class="domain-title" style="color: ${accent}">${displayTitle}</h3>
                <div style="display: flex; gap: 0.5rem;">
                    <span class="domain-pill" style="color: ${accent}">${domainData.engines.length} Engines</span>
                    <span class="domain-pill" style="color: ${accent}">${domainData.combinations.length} Combos</span>
                </div>
            </div>
            <div class="expand-indicator">${ICONS.plus}</div>
        </div>
        
        <div class="domain-content">
            <div class="grid-section-title">ENGINE BLOCK (${domainData.engines.length})</div>
            <div class="engines-grid">${domainData.engines.map(e => renderEngineCard(e, isRichDomain)).join('')}</div>
            
            <div class="grid-section-title">POWER COMBINATIONS (${domainData.combinations.length})</div>
            <div class="pc-grid">${domainData.combinations.map(renderPowerComboCard).join('')}</div>
        </div>
    </div>`;
}

function renderEngineDashboard() {
    let html = `
    <section class="engines-section">
        <div class="geo-header-row" style="margin-bottom: 4rem;">
            <h2 class="geo-framework-title">Module B: Cognitive Engines & Exam Patterns</h2>
        </div>
    `;
    ['angle', 'circle', 'coordinate', 'mixed'].forEach(key => {
        if(ENGINES_DATA[key]) html += renderDomainSection(key, ENGINES_DATA[key]);
    });
    html += `</section>`;
    return html;
}

// ==========================================
// 9. INIT
// ==========================================
function init() {
    console.log("🚀 Evolution Map v25.0 - Module A Refined");
    injectStyles();
    processData();
    
    // 1. Render Archetypes
    const container = document.getElementById('evolution-map-container');
    if(container) {
        container.innerHTML = allCategories.map(cat => `
            <div class="category-card" data-id="${cat.id}">
                <div class="category-header" onclick="toggleCategory(this)">
                    <div class="category-title-group">
                        <span class="category-icon">${cat.icon}</span>
                        <div><h2 class="category-title">${cat.title}</h2><p class="category-subtitle">${cat.archetypes.length} Archetypes</p></div>
                    </div>
                    <div class="expand-indicator">${ICONS.plus}</div>
                </div>
                <div class="category-content"><div class="category-body">${cat.archetypes.map(renderArchetypeCard).join('')}</div></div>
            </div>
        `).join('');
    }

    // 2. Render Module A (Geo Logic Framework)
    const geoDiv = document.createElement('div');
    geoDiv.innerHTML = renderGeoFrameworkSection();

    // 3. Render Module B (Engines)
    const engineDiv = document.createElement('div');
    engineDiv.innerHTML = renderEngineDashboard();
    
    // Append to DOM
    const footer = document.querySelector('footer');
    if(footer) {
        document.body.insertBefore(geoDiv, footer);
        document.body.insertBefore(engineDiv, footer);
    } else {
        document.body.appendChild(geoDiv);
        document.body.appendChild(engineDiv);
    }
    
    setupSearch();
}

// Global Helpers
window.toggleCategory = (el) => {
    const card = el.closest('.category-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};
window.toggleArchetype = (el) => {
    const card = el.closest('.archetype-card');
    const container = card.nextElementSibling;
    card.classList.toggle('expanded');
    container.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    el.querySelector('.archetype-expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};
window.showModalForArchetype = (id) => {
    const arch = archetypeMap.get(id);
    if(!arch) return;
    const modal = document.getElementById('branchModal');
    document.getElementById('branchModalTitle').textContent = arch.name;
    document.getElementById('branchModalBody').innerHTML = renderInPlaceContent(arch, false); 
    modal.classList.add('visible');
};
window.closeBranchModal = () => document.getElementById('branchModal').classList.remove('visible');
window.toggleGeoLayer = (el) => {
    const card = el.closest('.geo-layer-card');
    card.classList.toggle('expanded');
};
window.toggleEngineSops = (btn) => {
    const container = btn.nextElementSibling;
    btn.classList.toggle('active');
    container.classList.toggle('visible');
    btn.closest('.engine-card').classList.toggle('expanded');
};
window.toggleDomainSection = (header) => {
    const block = header.closest('.domain-block');
    block.classList.toggle('expanded');
    const indicator = header.querySelector('.expand-indicator');
    if (indicator) indicator.innerHTML = block.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};
window.toggleAllCards = (expand) => {
    document.querySelectorAll('.category-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
    });
};

function setupSearch() {
    const input = document.getElementById('filter-search');
    if(!input) return;
    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().replace(/\s+/g, '');
        document.querySelectorAll('.engine-card, .pc-card, .mini-sop').forEach(card => {
            const text = card.innerText.toLowerCase().replace(/\s+/g, '');
            card.style.display = text.includes(val) ? 'flex' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
