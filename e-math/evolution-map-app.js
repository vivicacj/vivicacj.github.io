/**
 * evolution-map-app.js
 * v10.9 - Reordered Layout & Support SOPs
 * * UPDATES:
 * 1. Moved Micro-Skills section BELOW SOPs (Required & Support).
 * 2. Added rendering for Support SOPs.
 * 3. Maintained robust rendering fixes from v10.8.
 */

import { ARCHETYPES_DATA } from './archetypes-data.js';
import { SOPS_DATA } from './sops-data.js';

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
};

// ==========================================
// STYLE INJECTION (Global Fallback)
// ==========================================
function injectRequiredStyles() {
    const styleId = 'evolution-map-dynamic-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* Dynamic Styles for Pitfalls, Tips & Lists */
        .sop-section { 
            margin-top: 1rem; 
            padding: 1.5rem; 
            background: rgba(255,255,255,0.03); 
            border-radius: 8px; 
            border: 1px solid rgba(255,255,255,0.05);
        }
        .modal-sub-branch-title { 
            color: var(--accent, #06b6d4); 
            font-weight: 700; 
            margin-top: 1.5rem; 
            margin-bottom: 0.75rem; 
            text-transform: uppercase; 
            letter-spacing: 0.05em; 
            font-size: 0.9em; 
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 0.5rem;
        }
        .pitfall-item { 
            background: rgba(239, 68, 68, 0.15); 
            border-left: 3px solid #ef4444; 
            padding: 0.75rem; 
            margin-bottom: 0.5rem; 
            display: flex; 
            gap: 0.75rem; 
            border-radius: 4px;
            color: #fca5a5;
        }
        .pro-tip-item { 
            background: rgba(16, 185, 129, 0.15); 
            border-left: 3px solid #10b981; 
            padding: 0.75rem; 
            margin-bottom: 0.5rem; 
            display: flex; 
            gap: 0.75rem; 
            border-radius: 4px;
            color: #86efac;
        }
        .pitfall-badge { background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7em; font-weight: bold; white-space: nowrap; height: fit-content; }
        .pro-tip-badge { background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7em; font-weight: bold; white-space: nowrap; height: fit-content; }
    `;
    document.head.appendChild(style);
    console.log("✅ CSS Styles Injected");
}

// ==========================================
// DATA PROCESSING
// ==========================================
function naturalSort(a, b) {
    return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
}

function processData() {
    allSOPs = SOPS_DATA || [];
    
    if (!ARCHETYPES_DATA) {
        console.error("❌ ARCHETYPES_DATA is missing!");
        return;
    }

    // Deep copy
    const allArchetypes = JSON.parse(JSON.stringify(ARCHETYPES_DATA)).map(a => ({...a, children: [] }));
    
    archetypeMap.clear();
    allArchetypes.forEach(a => archetypeMap.set(a.id, a));

    let topLevelArchetypes = [];

    // Build Parent-Child Relationships
    allArchetypes.forEach(a => {
        if (a.parent) {
            const parent = archetypeMap.get(a.parent);
            if (parent) {
                parent.children.push(a);
            } else {
                topLevelArchetypes.push(a);
            }
        } else {
            topLevelArchetypes.push(a);
        }
    });

    // Sort children
    topLevelArchetypes.forEach(parent => parent.children.sort(naturalSort));

    // Create Categories
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
// RENDER FUNCTIONS (ROBUST & REORDERED)
// ==========================================

// Helper: Aggressively try to find array data
function getList(obj, ...keys) {
    if (!obj) return [];
    for (const key of keys) {
        if (obj[key] && Array.isArray(obj[key]) && obj[key].length > 0) {
            return obj[key];
        }
    }
    return [];
}

function getSopById(id) {
    return allSOPs.find(s => s.id === id) || { 
        id: id, name: id, description: "Details missing.", steps: [] 
    };
}

function renderArchetypeCard(archetype) {
    const level = archetype.level || 'L?';
    const levelClass = `level-${level.toLowerCase().replace('l', '')}`;
    const hasChildren = archetype.children && archetype.children.length > 0;
    const branchIcon = hasChildren ? ICONS.branch : '';
    const childCount = hasChildren ? `<span class="branch-count-badge">${archetype.children.length} sub-models</span>` : '';

    const inPlaceContentHtml = `
      <div class="archetype-details-container" style="display: none;">
        ${renderInPlaceContent(archetype, hasChildren)}
      </div>
    `;

    return `
    <div class="archetype-card-wrapper">
        <div class="archetype-card ${levelClass} ${hasChildren ? 'is-parent' : 'is-standalone'}" 
             id="arch-${archetype.id}" 
             onclick="toggleArchetype(this)"
             data-name="${(archetype.name||'').toLowerCase()}"
             data-id="${(archetype.id||'').toLowerCase()}"
        >
          <div class="archetype-title">
            <span class="level-badge">${level}</span>
            <span class="archetype-name">
              ${archetype.name} ${branchIcon}
            </span>
            <span class="archetype-id">${archetype.id}</span>
            ${childCount}
          </div>
          <div class="archetype-expand-indicator">${ICONS.plus}</div>
        </div>
        ${inPlaceContentHtml}
    </div>`;
}

// [UPDATED] Reordered Content Rendering
function renderInPlaceContent(archetype, hasChildren) {
    let html = `<div class="branches-overview"><p>${archetype.description || 'No description available.'}</p></div>`;
    
    // 1. SOPs First (Required AND Support)
    html += renderSopDetails(archetype);

    // 2. Archetype-Specific Details (Micro-Skills) Second
    html += renderArchetypeSpecifics(archetype);
    
    // 3. Render Children
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

function renderArchetypeSpecifics(archetype) {
    let html = '';

    // Expanded key checks for MicroSkills including PascalCase
    const microSkills = getList(archetype, 'microSkills', 'micro_skills', 'microskills', 'MicroSkills');
    const pitfalls = getList(archetype, 'pitfalls', 'Pitfalls');
    const tips = getList(archetype, 'proTips', 'pro_tips', 'ProTips');

    // Render Micro-Skills with FORCED inline styles for visibility
    if (microSkills.length > 0) {
        html += `<h4 class="modal-sub-branch-title">Micro-Skills & Competencies</h4>`;
        html += `<div class="sop-section" style="border-left: 3px solid var(--accent); margin-bottom: 1rem;">
            <ul style="list-style: disc; padding-left: 1.5rem; color: #e2e8f0; margin: 0;">
                ${renderSafeListItems(microSkills)}
            </ul>
        </div>`;
    }

    if (pitfalls.length > 0) {
        html += `<div style="margin-top: 1rem;">`;
        html += renderSafePitfalls(pitfalls);
        html += `</div>`;
    }

    if (tips.length > 0) {
        html += `<div style="margin-top: 0.5rem;">`;
        html += renderSafeProTips(tips);
        html += `</div>`;
    }

    return html;
}

// [UPDATED] Render BOTH Required and Support SOPs
function renderSopDetails(archetype) {
    let html = '';
    
    // Required SOPs
    if (archetype.requiredSOPs?.length > 0) {
        html += `<h4 class="modal-sub-branch-title">Required SOPs</h4>`;
        archetype.requiredSOPs.forEach(sopId => {
            html += renderSingleSopCard(sopId);
        });
    }

    // Support SOPs (Added)
    const supportSOPs = getList(archetype, 'supportSOPs', 'support_sops', 'SupportSOPs');
    if (supportSOPs.length > 0) {
        html += `<h4 class="modal-sub-branch-title">Support SOPs</h4>`;
        supportSOPs.forEach(sopId => {
            html += renderSingleSopCard(sopId);
        });
    }
    
    return html;
}

// [NEW] Helper for rendering a single SOP card
function renderSingleSopCard(sopId) {
    const sop = getSopById(sopId);
    const pitfalls = getList(sop, 'pitfalls', 'Pitfalls');
    const tips = getList(sop, 'proTips', 'pro_tips', 'ProTips', 'pro_Tips');

    return `
      <div class="sop-section">
        <p class="sop-goal"><strong>${sop.name}</strong><br>${sop.description || ''}</p>
        <ul style="list-style: disc; padding-left: 1.5rem; color: #e2e8f0; margin-bottom: 1rem;">
            ${renderSafeListItems(sop.steps)}
        </ul>
        ${pitfalls.length > 0 ? `<div style="margin-top:1rem;">${renderSafePitfalls(pitfalls)}</div>` : ''}
        ${tips.length > 0 ? `<div style="margin-top:0.5rem;">${renderSafeProTips(tips)}</div>` : ''}
      </div>`;
}

// ==========================================
// UNIVERSAL RENDER HELPERS
// ==========================================

function renderSafeListItems(list) {
    if (!list) return '';
    return list.map(item => {
        let text = '';
        if (typeof item === 'string') {
            text = item;
        } else if (typeof item === 'object' && item !== null) {
            text = item.text || item.description || item.content || JSON.stringify(item);
        }
        return `<li style="margin-bottom: 0.5rem; line-height: 1.5;">${text}</li>`;
    }).join('');
}

function renderSafePitfalls(list) {
    return list.map(item => {
        let type = 'Error';
        let text = '';
        if (typeof item === 'string') {
            text = item;
            type = 'Common Error';
        } else if (typeof item === 'object' && item !== null) {
            text = item.text || JSON.stringify(item);
            type = item.type || 'Error';
        }
        return `<div class="pitfall-item"><span class="pitfall-badge">${type}</span><span>${text}</span></div>`;
    }).join('');
}

function renderSafeProTips(list) {
    return list.map(item => {
        let text = '';
        if (typeof item === 'string') {
            text = item;
        } else if (typeof item === 'object' && item !== null) {
            text = item.text || JSON.stringify(item);
        }
        return `<div class="pro-tip-item"><span class="pro-tip-badge">Pro Tip</span><span>${text}</span></div>`;
    }).join('');
}

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    console.log("🚀 App Initialized v10.9 (Layout Reordered)");
    injectRequiredStyles();
    processData();
    
    const container = document.getElementById('evolution-map-container');
    if(!container) return;

    container.innerHTML = allCategories.map(cat => `
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

    setupSearch();
}

function toggleCategory(el) {
    const card = el.closest('.category-card');
    card.classList.toggle('expanded');
    el.querySelector('.expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
}

function toggleArchetype(el) {
    const card = el.closest('.archetype-card');
    const container = card.nextElementSibling;
    card.classList.toggle('expanded');
    if (container) {
        container.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    }
    el.querySelector('.archetype-expand-indicator').innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
}

function setupSearch() {
    const input = document.getElementById('filter-search');
    if(!input) return;
    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().replace(/\s+/g, '');
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
    });
}

window.showModalForArchetype = (id) => {
    const arch = archetypeMap.get(id);
    if(!arch) return;
    const modal = document.getElementById('branchModal');
    document.getElementById('branchModalTitle').textContent = arch.name;
    document.getElementById('branchModalBody').innerHTML = renderInPlaceContent(arch, false); 
    modal.classList.add('visible');
};

window.closeBranchModal = () => {
    document.getElementById('branchModal').classList.remove('visible');
};

window.toggleCategory = toggleCategory;
window.toggleArchetype = toggleArchetype;
window.toggleAllCards = (expand) => {
    document.querySelectorAll('.category-card').forEach(c => {
        if(expand) c.classList.add('expanded'); else c.classList.remove('expanded');
    });
};

document.addEventListener('DOMContentLoaded', init);
