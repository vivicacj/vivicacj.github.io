/**
 * evolution-map-app.js
 * v11.5 - English Mode & Visual Polish
 * * UPDATES:
 * 1. [Localization] All UI text translated to English.
 * 2. [UI] Enforced consistent height/width for Layer Headers and SOP Cards.
 * 3. [UX] Refined Instruction Banner and Wizard text.
 */

import { ARCHETYPES_DATA } from './archetypes-data.js';
import { SOPS_DATA } from './sops-data.js';

// ==========================================
// GEOMETRY LOGIC FRAMEWORK DATA (MASTER LIST)
// ==========================================
const GEO_LOGIC_MAP = {
    layer1: {
        title: "Layer 1 (Eye): Visual Triggers 👁️",
        desc: "Scan -> Match: Identify visual features, instantly recall theorems", // English
        color: "#06b6d4", // Cyan
        items: new Set([
            "SOP-ANG-M00", "SOP-ANG-M01", "SOP-ANG-M02", "SOP-ANG-M03", 
            "SOP-ANG-M04", "SOP-ANG-M05", "SOP-ANG-M06", "SOP-ANG-M07", 
            "SOP-ANG-M08", "SOP-ANG-M09", "SOP-ANG-M10", "SOP-ANG-M11",
            "SOP-GEO-CIRC-01", "SOP-GEO-CIRC-02", "SOP-GEO-CIRC-03", 
            "SOP-GEO-CIRC-04", "SOP-GEO-CIRC-05", "SOP-GEO-CIRC-06",
            "SOP-GEO-CIRC-07",
            "SOP-GEO-CONG-01"
        ])
    },
    layer2: {
        title: "Layer 2 (Hand): Calculation Tools 🛠️",
        desc: "Execute: Establish relationships, solve using formulas", // English
        color: "#f59e0b", // Amber
        items: new Set([
            "SOP-GEO-COORD-01", "SOP-GEO-COORD-02", "SOP-GEO-COORD-03", 
            "SOP-GEO-COORD-04", "SOP-GEO-COORD-05", "SOP-GEO-COORD-06",
            "SOP-GEO-COORD-07", "SOP-GEO-COORD-08", "SOP-GEO-COORD-09", "SOP-GEO-COORD-10",
            "SOP-TRIG-01", "SOP-TRIG-02", "SOP-TRIG-03", "SOP-TRIG-04", "SOP-L2-TRIG-01",
            "SOP-MEN-01", "SOP-MEN-02", "SOP-MEN-03", "SOP-MEN-04",
            "SOP-GEO-SIM-02", "SOP-GEO-SIM-03", "SOP-GEO-SIM-04",
            "SOP-GEO-CIRC-08",
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
        desc: "Format & Logic: Write rigorous proof steps", // English
        color: "#8b5cf6", // Purple
        items: new Set([
            "SOP-GEO-SIM-01", 
            "SOP-GEO-CONG-02"
        ])
    }
};

function getSopLayer(sopId) {
    if (GEO_LOGIC_MAP.layer1.items.has(sopId)) return 'layer1';
    if (GEO_LOGIC_MAP.layer2.items.has(sopId)) return 'layer2';
    if (GEO_LOGIC_MAP.layer3.items.has(sopId)) return 'layer3';
    return null; 
}

// ==========================================
// GLOBAL STATE & CONSTANTS
// ==========================================
let allCategories = [];
let archetypeMap = new Map();
let allSOPs = [];

const ICONS = {
    'D1': '🔢', 
    'D2': '📐', 
    'D3': '📊', 
    'L2L3': '🧩',
    'Topic': '📑',
    plus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5V19M5 12H19"/></svg>`,
    minus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19"/></svg>`,
    branch: `<svg class="icon-sm" style="color: var(--accent)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v18M6 11h13"/></svg>`,
    eye: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    tool: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    brain: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
    chevronDown: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`,
    info: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    help: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
};

// ==========================================
// STYLE INJECTION
// ==========================================
function injectStyles() {
    const styleId = 'geo-framework-styles';
    if (document.getElementById(styleId)) return;
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* Geo Logic Framework Layout */
        .geo-framework-section { padding: 4rem 2rem; max-width: 1600px; margin: 0 auto; position: relative; }
        .geo-header-row { display: flex; justify-content: center; align-items: center; position: relative; margin-bottom: 2rem; }
        .geo-framework-title { font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #fff 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
        
        /* I'm Stuck Button */
        .geo-stuck-btn {
            position: absolute; right: 0; top: 50%; transform: translateY(-50%);
            background: linear-gradient(135deg, #f59e0b, #d97706);
            color: white; border: none; padding: 0.6rem 1.2rem;
            border-radius: 2rem; font-weight: 700; cursor: pointer;
            display: flex; align-items: center; gap: 0.5rem;
            box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
            transition: all 0.3s ease;
            z-index: 10;
        }
        .geo-stuck-btn:hover { transform: translateY(-52%) scale(1.05); box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6); }
        
        /* Instruction Banner */
        .geo-instruction-banner {
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 1rem;
            padding: 1rem 1.5rem;
            margin-bottom: 2rem;
            display: flex;
            align-items: center; /* Center Vertically */
            gap: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .geo-instruction-banner:hover { background: rgba(99, 102, 241, 0.15); border-color: rgba(99, 102, 241, 0.5); }
        .geo-banner-icon { color: var(--primary); font-size: 1.5rem; flex-shrink: 0; }
        .geo-banner-content { flex: 1; }
        .geo-banner-title { color: var(--primary); font-weight: 700; margin-bottom: 0.25rem; display: block; font-size: 0.9em; text-transform: uppercase; letter-spacing: 1px; }
        .geo-banner-text { color: #e2e8f0; font-size: 1rem; line-height: 1.5; }
        .geo-banner-text strong { color: white; }

        /* Wizard Modal */
        .geo-wizard-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); backdrop-filter: blur(5px);
            z-index: 10000; display: none; align-items: center; justify-content: center;
            opacity: 0; transition: opacity 0.3s ease;
        }
        .geo-wizard-overlay.active { display: flex; opacity: 1; }
        .geo-wizard-modal {
            background: #1e293b; border: 1px solid rgba(255,255,255,0.1);
            border-radius: 1.5rem; padding: 2rem; max-width: 500px; width: 90%;
            text-align: center; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            transform: scale(0.9); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .geo-wizard-overlay.active .geo-wizard-modal { transform: scale(1); }
        .geo-wizard-title { font-size: 1.5rem; font-weight: 800; color: white; margin-bottom: 2rem; }
        .geo-wizard-options { display: flex; flex-direction: column; gap: 1rem; }
        .geo-wizard-option {
            background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
            padding: 1rem; border-radius: 1rem; color: #e2e8f0; font-weight: 600;
            cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: space-between;
        }
        .geo-wizard-option:hover { background: rgba(255,255,255,0.1); transform: translateX(5px); border-color: var(--accent); color: white; }
        .geo-wizard-close { margin-top: 1.5rem; background: transparent; border: none; color: #94a3b8; cursor: pointer; text-decoration: underline; }

        /* Highlight Animation */
        @keyframes pulse-highlight {
            0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.7); border-color: var(--accent); }
            70% { box-shadow: 0 0 0 20px rgba(6, 182, 212, 0); border-color: var(--accent); }
            100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
        }
        .highlight-pulse { animation: pulse-highlight 2s infinite; }

        /* Responsive */
        @media(max-width: 768px) {
            .geo-header-row { flex-direction: column; gap: 1rem; }
            .geo-stuck-btn { position: static; transform: none; width: 100%; justify-content: center; }
            .geo-stuck-btn:hover { transform: translateY(-2px); }
        }

        /* Existing Geo Framework Styles - Refined for Consistency */
        .geo-stack { display: flex; flex-direction: column; gap: 1.5rem; }
        
        .geo-layer-card { 
            background: rgba(255,255,255,0.03); 
            border-radius: 1rem; 
            border: 1px solid rgba(255,255,255,0.1); 
            overflow: hidden; 
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .geo-layer-card.expanded { 
            border-color: var(--layer-color, rgba(255,255,255,0.2)); 
            background: rgba(255,255,255,0.05); 
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); 
        }
        
        .geo-layer-header { 
            padding: 1.5rem 2rem; 
            cursor: pointer; 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            user-select: none; 
            background: linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 100%);
            min-height: 88px; /* Enforce consistent height */
        }
        
        .geo-layer-title-group { display: flex; align-items: center; gap: 1.5rem; }
        .geo-layer-icon { font-size: 2rem; color: var(--layer-color); width: 40px; text-align: center; }
        .geo-layer-info { display: flex; flex-direction: column; gap: 0.25rem; }
        .geo-layer-title { font-size: 1.25rem; font-weight: 700; color: #fff; }
        .geo-layer-desc { font-size: 0.95rem; opacity: 0.7; font-style: italic; color: var(--text-secondary); }
        .geo-layer-meta { display: flex; align-items: center; gap: 1.5rem; }
        
        .geo-count-badge { 
            background: rgba(0,0,0,0.3); 
            color: var(--layer-color); 
            padding: 0.25rem 0.75rem; 
            border-radius: 1rem; 
            font-size: 0.85rem; 
            font-weight: 600; 
            border: 1px solid var(--layer-color);
            min-width: 80px; /* Consistent badge width */
            text-align: center;
        }
        
        .geo-layer-body { max-height: 0; overflow: hidden; transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0; }
        .geo-layer-card.expanded .geo-layer-body { max-height: 8000px; opacity: 1; padding: 0 2rem 2rem 2rem; }
        
        /* Uniform Grid */
        .geo-sop-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1rem; margin-top: 1rem; }
        
        .layer-visual { --layer-color: #06b6d4; }
        .layer-calc { --layer-color: #f59e0b; }
        .layer-proof { --layer-color: #8b5cf6; }
        
        /* Mini SOP Card - Uniform Height */
        .mini-sop { 
            background: rgba(0,0,0,0.2); 
            border: 1px solid rgba(255,255,255,0.05); 
            border-radius: 0.75rem; 
            overflow: hidden; 
            transition: all 0.2s; 
            cursor: pointer; 
            display: flex; 
            flex-direction: column; 
            height: 100%; /* Force equal height in grid */
        }
        .mini-sop:hover { border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); }
        .mini-sop.active { border-color: var(--layer-color); background: rgba(255,255,255,0.05); }
        .mini-sop-header { padding: 1rem; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.02); flex-shrink: 0; }
        .mini-sop-id { font-size: 0.7em; font-family: monospace; opacity: 0.6; display: block; margin-bottom: 4px; }
        .mini-sop-name { font-weight: 600; font-size: 0.95em; color: #e2e8f0; }
        .mini-sop-arrow { transition: transform 0.3s; opacity: 0.5; }
        .mini-sop.active .mini-sop-arrow { transform: rotate(180deg); opacity: 1; color: var(--layer-color); }
        .mini-sop-detail { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out; background: rgba(0,0,0,0.3); flex: 1; }
        .mini-sop.active .mini-sop-detail { max-height: 2000px; border-top: 1px solid rgba(255,255,255,0.05); }
        .detail-pad { padding: 1.5rem; }
        .detail-desc { font-size: 0.9em; color: #94a3b8; margin-bottom: 1rem; font-style: italic; }
        .detail-label { font-size: 0.75em; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin-top: 1rem; margin-bottom: 0.5rem; font-weight: 700; }
        .detail-steps { list-style: decimal inside; color: #cbd5e1; font-size: 0.9em; padding-left: 0.5rem; }
        .detail-steps li { margin-bottom: 0.5rem; line-height: 1.5; }
        .detail-pitfall { background: rgba(239, 68, 68, 0.1); border-left: 3px solid #ef4444; padding: 0.75rem; margin-top: 0.5rem; font-size: 0.9em; color: #fca5a5; border-radius: 4px; }
        .detail-tip { background: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; padding: 0.75rem; margin-top: 0.5rem; font-size: 0.9em; color: #86efac; border-radius: 4px; }
        .detail-badge { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 0.7em; font-weight: bold; margin-right: 6px; }
        .bg-red { background: #ef4444; color: white; }
        .bg-green { background: #10b981; color: white; }
    `;
    document.head.appendChild(style);
}

// ==========================================
// DATA PROCESSING (STANDARD)
// ==========================================
function naturalSort(a, b) {
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
}

function processData() {
    allSOPs = SOPS_DATA || [];
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
// RENDER FUNCTIONS (STANDARD)
// ==========================================
function renderArchetypeCard(archetype) {
    const level = archetype.level || 'L?';
    const hasChildren = archetype.children && archetype.children.length > 0;
    return `
    <div class="archetype-card-wrapper">
        <div class="archetype-card level-${level.toLowerCase()}" 
             onclick="toggleArchetype(this)">
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
// GEOMETRY LOGIC FRAMEWORK
// ==========================================

function getSopsForLayer(layerType) {
    const layerConfig = GEO_LOGIC_MAP[layerType];
    if (!layerConfig) return [];
    
    // Strict Set-based match
    return allSOPs.filter(sop => layerConfig.items.has(sop.id));
}

function renderMiniSopCard(sop) {
    const steps = sop.steps || [];
    const pitfalls = sop.pitfalls || [];
    const tips = sop.pro_tips || sop.proTips || [];

    return `
    <div class="mini-sop" onclick="this.classList.toggle('active')">
        <div class="mini-sop-header">
            <div>
                <span class="mini-sop-id">${sop.id}</span>
                <div class="mini-sop-name">${sop.name.split('·')[1] || sop.name}</div>
            </div>
            <div class="mini-sop-arrow">${ICONS.chevronDown}</div>
        </div>
        <div class="mini-sop-detail">
            <div class="detail-pad">
                <div class="detail-desc">${sop.description}</div>
                ${steps.length > 0 ? `<div class="detail-label">Procedure</div><ol class="detail-steps">${steps.map(s => `<li>${s}</li>`).join('')}</ol>` : ''}
                ${pitfalls.length > 0 ? `<div class="detail-label">Pitfalls</div>${pitfalls.map(p => `<div class="detail-pitfall"><span class="detail-badge bg-red">${p.type || 'Error'}</span>${p.text || p}</div>`).join('')}` : ''}
                ${tips.length > 0 ? `<div class="detail-label">Pro Tips</div>${tips.map(t => `<div class="detail-tip"><span class="detail-badge bg-green">Tip</span>${t}</div>`).join('')}` : ''}
            </div>
        </div>
    </div>
    `;
}

function renderGeoFrameworkSection() {
    const visualSops = getSopsForLayer('layer1');
    const calcSops = getSopsForLayer('layer2');
    const proofSops = getSopsForLayer('layer3');

    return `
    <section class="geo-framework-section">
        <div class="geo-header-row">
            <h2 class="geo-framework-title">Geometry SOP Logic Framework</h2>
            <button class="geo-stuck-btn" onclick="openGeoWizard()">
                ${ICONS.help} 🤔 I'm Stuck
            </button>
        </div>

        <div class="geo-instruction-banner" onclick="this.classList.toggle('collapsed')">
            <div class="geo-banner-icon">${ICONS.info}</div>
            <div class="geo-banner-content">
                <span class="geo-banner-title">Strategy Guide: 3-Step Process</span>
                <div class="geo-banner-text">
                    Geometry Problem Solving Trinity: 1. <strong>Visual (Eye)</strong> Scan features -> 2. <strong>Tool (Hand)</strong> Select tools -> 3. <strong>Proof (Brain)</strong> Write logic.
                </div>
            </div>
        </div>
        
        <div class="geo-stack">
            <!-- Layer 1: Visual -->
            <div class="geo-layer-card layer-visual" id="geo-layer-1">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.eye}</div>
                        <div class="geo-layer-info">
                            <div class="geo-layer-title">Layer 1: Visual Triggers</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer1.desc}</div>
                        </div>
                    </div>
                    <div class="geo-layer-meta">
                        <span class="geo-count-badge">${visualSops.length} SOPs</span>
                        <div class="expand-indicator">${ICONS.plus}</div>
                    </div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">
                        ${visualSops.map(renderMiniSopCard).join('')}
                    </div>
                </div>
            </div>

            <!-- Layer 2: Calculation -->
            <div class="geo-layer-card layer-calc" id="geo-layer-2">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.tool}</div>
                        <div class="geo-layer-info">
                            <div class="geo-layer-title">Layer 2: Calculation Tools</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer2.desc}</div>
                        </div>
                    </div>
                    <div class="geo-layer-meta">
                        <span class="geo-count-badge">${calcSops.length} SOPs</span>
                        <div class="expand-indicator">${ICONS.plus}</div>
                    </div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">
                        ${calcSops.map(renderMiniSopCard).join('')}
                    </div>
                </div>
            </div>

            <!-- Layer 3: Proof -->
            <div class="geo-layer-card layer-proof" id="geo-layer-3">
                <div class="geo-layer-header" onclick="toggleGeoLayer(this)">
                    <div class="geo-layer-title-group">
                        <div class="geo-layer-icon">${ICONS.brain}</div>
                        <div class="geo-layer-info">
                            <div class="geo-layer-title">Layer 3: Reasoning & Proof</div>
                            <div class="geo-layer-desc">${GEO_LOGIC_MAP.layer3.desc}</div>
                        </div>
                    </div>
                    <div class="geo-layer-meta">
                        <span class="geo-count-badge">${proofSops.length} SOPs</span>
                        <div class="expand-indicator">${ICONS.plus}</div>
                    </div>
                </div>
                <div class="geo-layer-body">
                    <div class="geo-sop-grid">
                        ${proofSops.map(renderMiniSopCard).join('')}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Wizard Modal -->
    <div class="geo-wizard-overlay" id="geoWizardOverlay">
        <div class="geo-wizard-modal">
            <h3 class="geo-wizard-title">🤔 What is your problem?</h3>
            <div class="geo-wizard-options">
                <div class="geo-wizard-option" onclick="geoWizardAction('geo-layer-1')">
                    <span>Can't read the diagram</span>
                    <span>👁️ Layer 1</span>
                </div>
                <div class="geo-wizard-option" onclick="geoWizardAction('geo-layer-2')">
                    <span>Don't know the formula</span>
                    <span>🛠️ Layer 2</span>
                </div>
                <div class="geo-wizard-option" onclick="geoWizardAction('geo-layer-3')">
                    <span>Don't know how to write proof</span>
                    <span>🗣️ Layer 3</span>
                </div>
            </div>
            <button class="geo-wizard-close" onclick="closeGeoWizard()">Cancel</button>
        </div>
    </div>
    `;
}

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    injectStyles();
    processData();
    
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

    // 2. Append Geometry Logic Framework
    const mainBody = document.body;
    const geoSection = document.createElement('div');
    geoSection.innerHTML = renderGeoFrameworkSection();
    
    const footer = document.querySelector('footer');
    if(footer) {
        mainBody.insertBefore(geoSection, footer);
    } else {
        mainBody.appendChild(geoSection);
    }

    setupSearch();
}

// Helper: Toggle functions
window.toggleCategory = (el) => {
    const card = el.closest('.category-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

window.toggleGeoLayer = (el) => {
    const card = el.closest('.geo-layer-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

window.toggleArchetype = (el) => {
    const card = el.closest('.archetype-card');
    const container = card.nextElementSibling;
    card.classList.toggle('expanded');
    if(container) {
        container.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    }
    el.querySelector('.archetype-expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
};

window.toggleAllCards = (expand) => {
    document.querySelectorAll('.category-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
    });
};

// Wizard Functions
window.openGeoWizard = () => {
    document.getElementById('geoWizardOverlay').classList.add('active');
};

window.closeGeoWizard = () => {
    document.getElementById('geoWizardOverlay').classList.remove('active');
};

window.geoWizardAction = (layerId) => {
    closeGeoWizard();
    const layer = document.getElementById(layerId);
    if(layer) {
        layer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Expand if closed
        if(!layer.classList.contains('expanded')) {
            const header = layer.querySelector('.geo-layer-header');
            if(header) toggleGeoLayer(header);
        }
        // Add highlight effect
        layer.classList.add('highlight-pulse');
        setTimeout(() => layer.classList.remove('highlight-pulse'), 3000);
    }
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
                const match = card.dataset.id.includes(val) || card.dataset.name.replace(/\s+/g,'').includes(val);
                wrapper.style.display = match ? 'block' : 'none';
                if(match) hasMatch = true;
            });
            cat.style.display = hasMatch ? 'block' : 'none';
        });
        
        // Filter Geo Framework
        document.querySelectorAll('.mini-sop').forEach(card => {
            const text = card.innerText.toLowerCase().replace(/\s+/g,'');
            card.style.display = text.includes(val) ? 'flex' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
