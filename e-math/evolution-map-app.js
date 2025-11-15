/**
 * evolution-map-app.js
 * v8.0 - Removed Topic Grouping
 *
 * This file implements the classification standard from "ARCH_分类标准.pdf".
 * It removes the intermediate "Topic" card layer for a flatter,
 * more direct `Category -> Archetype` hierarchy.
 *
 * - Category I: L1 (D1)
 * - Category II: L1 (D2)
 * - Category III: L1 (D3)
 * - Category IV: L2 & L3 (All Domains)
 *
 * All previous fixes (sorting, interaction, data patches) are preserved.
 */

// ==========================================
// ES MODULE IMPORTS
// ==========================================
import { ARCHETYPES_DATA } from './archetypes-data.js';
import { SOPS_DATA } from './sops-data.js';

// ==========================================
// GLOBAL STATE & CONSTANTS
// ==========================================
let allCategories = []; // Will hold the 4 category lists
let archetypeMap = new Map(); // For fast lookup
let allSOPs = [];
let isAllExpanded = false;

// Icon definitions
const ICONS = {
    'D1': '🧮',
    'D2': '📐',
    'D3': '📊',
    'L2L3': '🏆', // Icon for the L2/L3 category
    'Topic': '↳', // Icon for a Topic (still used for branch icon)
    
    // UI Icons
    plus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    minus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    branch: `<svg class="icon-sm" style="color: var(--accent)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3V3C8.76142 3 11 5.23858 11 8V11M6 3V11M6 11H3M6 11H9M11 11V11C13.7614 11 16 13.2386 16 16V21M16 21H13M16 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    expand: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 14H21M3 10H21M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    collapse: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M9 6H15M9 18H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

// ==========================================
// NATURAL SORT HELPER
// ==========================================
function naturalSort(a, b) {
    const re = /(\d+)/g;
    const aId = a.id || '';
    const bId = b.id || '';
    
    const aParts = aId.split(re);
    const bParts = bId.split(re);
    
    for (let i = 0; i < Math.min(aParts.length, bParts.length); i++) {
        let partA = aParts[i];
        let partB = bParts[i];
        let numA = parseInt(partA, 10);
        let numB = parseInt(partB, 10);
        
        if (!isNaN(numA) && !isNaN(numB)) {
            if (numA !== numB) return numA - numB;
        } else {
            if (partA !== partB) return partA.localeCompare(partB);
        }
    }
    return aId.length - bId.length;
}

// ==========================================
// DATA PATCH FUNCTION
// ==========================================
function patchData(archetypes) {
    const patches = {
        "ARCH-L1-ALG-03": "Algebra: Forming Expressions",
        "ARCH-L1-ALG-05": "Algebra: Changing the Subject of a Formula",
        "ARCH-L1-ALG-06": "Equation: Simultaneous Equations",
        "ARCH-L1-ALG-07": "Equation: Inequalities",
        "ARCH-L1-ALG-08": "Equation: Inequalities",
        "ARCH-L1-ALG-10": "Equation: Quadratic Functions (Max/Min)",
        // Patches for L3 items with missing domain
        "ARCH-L3-MOD-01": "D3 — Statistics & Probability", // Example, PDF topic is Geometry
        "ARCH-L3-SYN-01": "D2 — Geometry & Measurement", // Example, PDF topic is Geometry
    };

    archetypes.forEach(a => {
        if (patches[a.id]) {
            if (!a.topic || a.topic.trim() === "" || a.topic === "无") {
                if (a.id.startsWith("ARCH-L1")) {
                     a.topic = patches[a.id];
                }
            }
            if (a.domain === "⚠️ No Topic Mapping") {
                 if (a.id.startsWith("ARCH-L3")) {
                    a.domain = patches[a.id];
                 }
            }
        }
    });
}


// ==========================================
// HIERARCHY-FIRST DATA PROCESSING (v8.0)
// ==========================================
function processData() {
    allSOPs = SOPS_DATA;
    const allArchetypes = ARCHETYPES_DATA.map(a => ({...a, children: [] }));
    
    patchData(allArchetypes);
    
    archetypeMap.clear();
    allArchetypes.forEach(a => archetypeMap.set(a.id, a));

    let topLevelArchetypes = [];

    allArchetypes.forEach(a => {
        if (a.parent) {
            const parent = archetypeMap.get(a.parent);
            if (parent) {
                parent.children.push(a);
                // Inherit topic from child if parent's is missing
                if ((!parent.topic || parent.topic === "无" || parent.topic.trim() === "") && (a.topic && a.topic !== "无" && a.topic.trim() !== "")) {
                    parent.topic = a.topic;
                }
            }
        } else {
            topLevelArchetypes.push(a);
        }
    });

    // Sort children
    topLevelArchetypes.forEach(parent => parent.children.sort(naturalSort));

    // Create the four categories based on the PDF
    const cat1 = topLevelArchetypes
        .filter(a => a.level === 'L1' && a.domain === 'D1 — Algebra & Number')
        .sort(naturalSort);
        
    const cat2 = topLevelArchetypes
        .filter(a => a.level === 'L1' && a.domain === 'D2 — Geometry & Measurement')
        .sort(naturalSort);
        
    const cat3 = topLevelArchetypes
        .filter(a => a.level === 'L1' && a.domain === 'D3 — Statistics & Probability')
        .sort(naturalSort);
        
    const cat4 = topLevelArchetypes
        .filter(a => a.level === 'L2' || a.level === 'L3')
        .sort((a,b) => a.level.localeCompare(b.level) || naturalSort(a,b)); // Sort L2 then L3

    allCategories = [
        { 
            id: 'l1-d1',
            title: 'I. Level L1 Archetypes (Domain D1: Algebra & Number)', 
            icon: ICONS['D1'],
            archetypes: cat1,
        },
        { 
            id: 'l1-d2',
            title: 'II. Level L1 Archetypes (Domain D2: Geometry & Measurement)', 
            icon: ICONS['D2'],
            archetypes: cat2,
        },
        { 
            id: 'l1-d3',
            title: 'III. Level L1 Archetypes (Domain D3: Statistics & Probability)', 
            icon: ICONS['D3'],
            archetypes: cat3,
        },
        { 
            id: 'l2-l3',
            title: 'IV. L2 and L3 Archetypes (Higher Order Models)', 
            icon: ICONS['L2L3'],
            archetypes: cat4,
        }
    ];
}


// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof ARCHETYPES_DATA === 'undefined' || typeof SOPS_DATA === 'undefined') {
        console.error("CRITICAL ERROR: archetypes-data.js or sops-data.js not loaded.");
        document.getElementById('evolution-map-container').innerHTML = 
            '<p style="color: var(--danger); text-align: center;">Error: Data files not loaded. Please check file paths and console for errors.</p>';
        return;
    }

    try {
        processData();
    } catch (e) {
        console.error("Error processing data:", e);
        document.getElementById('evolution-map-container').innerHTML = 
            '<p style="color: var(--danger); text-align: center;">Error processing data. Check console.</p>';
        return;
    }

    populateCategories();
    setupEventListeners();
    setupFilterListeners();
});

// ==========================================
// DATA PROCESSING & LOOKUP
// ==========================================
function getArchetypeById(id) {
    return archetypeMap.get(id);
}

function getSopById(id) {
    const sop = allSOPs.find(s => s.id === id);
    if (!sop) {
        return { 
            id: id, 
            name: `${id} (Not Found)`, 
            description: "SOP details are missing.", 
            steps: [], pitfalls: [], pro_tips: [], microSkills: []
        };
    }
    return sop;
}

// ==========================================
// HTML RENDERING FUNCTIONS
// ==========================================
function populateCategories() {
    const container = document.getElementById('evolution-map-container');
    if (!container) return;

    let html = '';

    allCategories.forEach(category => {
        const archetypeCount = category.archetypes.length;
        let categoryBodyHtml = '';

        if (category.id !== 'l2-l3') {
            // Category I, II, III: Just render the list
             categoryBodyHtml = category.archetypes
                .map(archetype => renderArchetypeCard(archetype))
                .join('');

        } else {
            // Category IV: Group by Domain
            const domains = ['D1 — Algebra & Number', 'D2 — Geometry & Measurement', 'D3 — Statistics & Probability', '⚠️ No Topic Mapping'];
            domains.forEach(domainName => {
                const archetypesInDomain = category.archetypes.filter(a => a.domain === domainName);
                if (archetypesInDomain.length > 0) {
                    categoryBodyHtml += `<h3 class="topic-title" style="font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem;">${ICONS[domainName.split(' ')[0]]} ${domainName}</h3>`;
                    
                    // Render archetypes directly
                    categoryBodyHtml += archetypesInDomain
                        .map(archetype => renderArchetypeCard(archetype))
                        .join('');
                }
            });
        }


        html += `
        <div class="category-card" data-category-id="${category.id}">
          <div class="category-header" onclick="toggleCategory(this)">
            <div class="category-title-group">
              <span class="category-icon">${category.icon}</span>
              <div>
                <h2 class="category-title">${category.title}</h2>
                <p class="category-subtitle">${archetypeCount} Archetypes</p>
              </div>
            </div>
            <div class="expand-indicator">
              ${ICONS.plus}
            </div>
          </div>
          <div class="category-content">
            <div class="category-body">
              ${categoryBodyHtml}
            </div>
          </div>
        </div>
        `;
    });

    container.innerHTML = html;
}


function renderArchetypeCard(archetype) {
    const level = archetype.level || 'L?';
    const levelClass = `level-${level.toLowerCase().replace('l', '')}`;
    
    const hasChildren = archetype.children && archetype.children.length > 0;
    const clickAction = `toggleArchetype(this)`; // All top-level cards expand in-place
    const branchIcon = hasChildren ? ICONS.branch : '';
    const childCount = hasChildren ? `<span class="branch-count-badge">${archetype.children.length} sub-models</span>` : '';

    const dataName = (archetype.name || '').toLowerCase();
    const dataId = (archetype.id || '').toLowerCase();
    const dataTopic = (archetype.topic || '').toLowerCase(); // Keep topic for search

    const inPlaceContentHtml = `
      <div class="archetype-details-container" style="display: none;">
        ${renderInPlaceContent(archetype, hasChildren)}
      </div>
    `;

    return `
    <div class="archetype-card-wrapper">
        <div class="archetype-card ${levelClass} ${hasChildren ? 'is-parent' : 'is-standalone'}" 
             id="arch-${archetype.id}" 
             onclick="${clickAction}"
             data-level="${level}"
             data-name="${dataName}"
             data-id="${dataId}"
             data-topic="${dataTopic}"
        >
          <div class="archetype-title">
            <span class="level-badge">${level}</span>
            <span class="archetype-name">
              ${archetype.name || 'Unnamed Archetype'} ${branchIcon}
            </span>
            <span class="archetype-id">${archetype.id || 'No ID'}</span>
            ${childCount}
          </div>
          <div class="archetype-expand-indicator">
            ${ICONS.plus}
          </div>
        </div>
        ${inPlaceContentHtml}
    </div>
    `;
}

function renderInPlaceContent(archetype, hasChildren) {
    let contentHtml = '';
    contentHtml += `
      <div class="branches-overview" style="margin-top: 1rem; margin-bottom: 1rem;">
        <p>${archetype.description}</p>
      </div>
    `;
    contentHtml += renderSopDetails(archetype);
    if (hasChildren) {
        contentHtml += `<h4 class="modal-sub-branch-title" style="padding-top: 1rem; margin-top: 1rem;">Sub-Models (${archetype.children.length})</h4>`;
        contentHtml += `<div class="archetype-child-list-container">`;
        contentHtml += archetype.children.map(child => renderChildArchetypeCard(child)).join('');
        contentHtml += `</div>`;
    }
    return contentHtml;
}

function renderChildArchetypeCard(archetype) {
    const level = archetype.level || 'L?';
    const levelClass = `level-${level.toLowerCase().replace('l', '')}`;
    const clickAction = `showModalForArchetype('${archetype.id}')`; // Children open modal

    const dataName = (archetype.name || '').toLowerCase();
    const dataId = (archetype.id || '').toLowerCase();
    const dataTopic = (archetype.topic || '').toLowerCase();

    return `
    <div class="archetype-child-card archetype-card ${levelClass}" 
         id="arch-${archetype.id}" 
         onclick="${clickAction}; event.stopPropagation();"
         data-level="${level}"
         data-name="${dataName}"
         data-id="${dataId}"
         data-topic="${dataTopic}"
    >
      <div class="archetype-title">
        <span class="branch-prefix" style="color: var(--accent); font-weight: bold;">${ICONS.Topic}</span>
        <span class="level-badge">${level}</span>
        <span class="archetype-name">${archetype.name || 'Unnamed Archetype'}</span>
        <span class="archetype-id">${archetype.id || 'No ID'}</span>
      </div>
      <div class="archetype-expand-indicator">
        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    </div>
    `;
}

function renderSopDetails(archetype) {
    let contentHtml = '';
    
    // 1. Render Required SOPs
    if (archetype.requiredSOPs && archetype.requiredSOPs.length > 0) {
        contentHtml += `<h4 class="modal-sub-branch-title">Required SOPs</h4>`;
        archetype.requiredSOPs.forEach(sopId => {
            const sop = getSopById(sopId);
            const steps = (sop.steps && sop.steps.length > 0)
                ? sop.steps.map(s => `<li>${s}</li>`).join('') 
                : '<li>SOP Steps not yet detailed.</li>';
            const pitfalls = (sop.pitfalls && sop.pitfalls.length > 0)
                ? sop.pitfalls.map(p => `<div class="pitfall-item"><span class="pitfall-badge">${p.type || 'Error'}</span><span>${p.text}</span></div>`).join('')
                : '';
            const proTips = (sop.pro_tips && sop.pro_tips.length > 0)
                ? sop.pro_tips.map(t => `<div class="pro-tip-item"><span class="pro-tip-badge">Pro Tip</span><span>${t}</span></div>`).join('')
                : '';
            contentHtml += `
              <div class="sop-section">
                <p class="sop-goal"><strong>${sop.name || sop.id}</strong>: ${sop.description || 'No description.'}</p>
                <h4>Steps</h4>
                <ul>${steps}</ul>
                ${pitfalls ? `<h4 style="margin-top: 1.5rem;">Pitfalls</h4>${pitfalls}` : ''}
                ${proTips ? `<h4 style="margin-top: 1.5rem;">Pro Tips</h4>${proTips}` : ''}
              </div>
            `;
        });
    }
    
    // 2. Render Micro-Skills
    if (archetype.microSkills && archetype.microSkills.length > 0) {
        const paddingTop = (archetype.requiredSOPs && archetype.requiredSOPs.length > 0) ? '1.5rem' : '0';
        contentHtml += `
            <h4 class="modal-sub-branch-title" style="margin-top: 0; padding-top: ${paddingTop};">Micro-Skills</h4>
            <div class="sop-section" style="margin-top: 0;">
                <ul>
                    ${archetype.microSkills.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // 3. Render Support SOPs
    if (archetype.supportSOPs && archetype.supportSOPs.length > 0) {
        contentHtml += `<h4 class="modal-sub-branch-title">Support SOPs</h4>`;
        contentHtml += `<div class="sop-section" style="margin-top: 0;"><ul>`;
        archetype.supportSOPs.forEach(sopId => {
            const sop = getSopById(sopId);
             contentHtml += `<li><strong>${sop.name || sop.id}</strong>: ${sop.description || 'No description.'}</li>`;
        });
        contentHtml += `</ul></div>`;
    }
    
    return contentHtml;
}

function renderModalContent(archetype) {
    let contentHtml = '';
    contentHtml += renderSopDetails(archetype); // SOPs, MicroSkills, Support
    if (archetype.children && archetype.children.length > 0) {
        contentHtml += `<h4 class="modal-sub-branch-title">Sub-Models (${archetype.children.length})</h4>`;
        contentHtml += `<div class="branches-tree">`;
        contentHtml += archetype.children.map(branch => `
          <div class="branch-tree-item clickable" data-archetype-id="${branch.id}">
            <span class="branch-prefix">${ICONS.Topic}</span>
            <span class="branch-name">
                <span class="level-badge">${branch.level}</span>
                <span class="archetype-id">${branch.id}</span>
                ${branch.name}
            </span>
          </div>
        `).join('');
        contentHtml += `</div>`;
    }
    if (contentHtml.trim() === '') {
        contentHtml = `<div class="sop-section"><p class="sop-goal">No detailed Micro-Skills or SOPs are listed for this Archetype.</p></div>`;
    }
    return contentHtml;
}

// ==========================================
// INTERACTIVITY & EVENT HANDLERS
// ==========================================
window.toggleCategory = toggleCategory;
// window.toggleTopic = toggleTopic; // Removed
window.toggleArchetype = toggleArchetype;
window.showModalForArchetype = showModalForArchetype;
window.closeBranchModal = closeBranchModal;
window.toggleAllCards = toggleAllCards;
window.scrollToSection = scrollToSection;
window.toggleLegend = toggleLegend;

function setupEventListeners() {
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    });

    const modal = document.getElementById('branchModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeBranchModal();
    });
}

function toggleArchetype(cardElement) {
    const detailsContainer = cardElement.nextElementSibling;
    const indicator = cardElement.querySelector('.archetype-expand-indicator');
    if (cardElement.classList.toggle('expanded')) {
        detailsContainer.style.display = 'block';
        indicator.innerHTML = ICONS.minus;
    } else {
        detailsContainer.style.display = 'none';
        indicator.innerHTML = ICONS.plus;
    }
}

function toggleCategory(headerElement) {
    const card = headerElement.closest('.category-card');
    const indicator = headerElement.querySelector('.expand-indicator');
    card.classList.toggle('expanded');
    indicator.innerHTML = card.classList.contains('expanded') ? ICONS.minus : ICONS.plus;
}

// function toggleTopic(headerElement) { // REMOVED
// }

function showModalForArchetype(archetypeId) {
    const archetype = getArchetypeById(archetypeId);
    if (!archetype) return;

    const modal = document.getElementById('branchModal');
    const title = document.getElementById('branchModalTitle');
    const body = document.getElementById('branchModalBody');
    
    title.textContent = archetype.name;
    let bodyHtml = '';

    if (archetype.parent) {
        const parent = getArchetypeById(archetype.parent);
        if (parent) {
            bodyHtml += `<button class="modal-back-btn" data-archetype-id="${parent.id}">← Back to ${parent.name}</button>`;
        }
    }

    bodyHtml += `
      <div class="branches-overview">
        <h4>${archetype.name} (<span class="archetype-id" style="font-size: 0.9em;">${archetype.id}</span>)</h4>
        <p>${archetype.description}</p>
      </div>
    `;
    bodyHtml += renderModalContent(archetype);

    body.innerHTML = bodyHtml;
    body.scrollTop = 0; 
    bindModalEvents(body);
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function bindModalEvents(modalBody) {
    modalBody.querySelectorAll('.branch-tree-item.clickable').forEach(item => {
        item.addEventListener('click', (e) => {
            const archetypeId = e.currentTarget.dataset.archetypeId;
            if (archetypeId) showModalForArchetype(archetypeId);
        });
    });

    const backButton = modalBody.querySelector('.modal-back-btn');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            const archetypeId = e.currentTarget.dataset.archetypeId;
            if (archetypeId) {
                const parentElement = document.getElementById(`arch-${archetypeId}`);
                if (parentElement) {
                    parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // const topic = parentElement.closest('.topic-card'); // Removed
                    // if (topic && !topic.classList.contains('expanded')) {
                    //     toggleTopic(topic.querySelector('.topic-header'));
                    // }
                    const category = parentElement.closest('.category-card');
                    if (category && !category.classList.contains('expanded')) {
                        toggleCategory(category.querySelector('.category-header'));
                    }
                    if (!parentElement.classList.contains('expanded')) {
                        toggleArchetype(parentElement);
                    }
                }
                closeBranchModal();
            }
        });
    }
}

function closeBranchModal() {
    const modal = document.getElementById('branchModal');
    modal.classList.add('exiting');
    document.body.style.overflow = '';
    setTimeout(() => modal.classList.remove('visible', 'exiting'), 300);
}

function toggleAllCards(shouldExpand) {
    isAllExpanded = shouldExpand;
    const cards = document.querySelectorAll('.category-card, .archetype-card.is-parent, .archetype-card.is-standalone');
    
    cards.forEach(card => {
        const indicator = card.querySelector('.category-header .expand-indicator, .archetype-expand-indicator');
        
        if (shouldExpand) {
            card.classList.add('expanded');
            if(indicator) indicator.innerHTML = ICONS.minus;
            if (card.classList.contains('is-parent') || card.classList.contains('is-standalone')) {
                const detailsContainer = card.nextElementSibling;
                if (detailsContainer) detailsContainer.style.display = 'block';
            }
        } else {
            card.classList.remove('expanded');
            if(indicator) indicator.innerHTML = ICONS.plus;
            if (card.classList.contains('is-parent') || card.classList.contains('is-standalone')) {
                const detailsContainer = card.nextElementSibling;
                if (detailsContainer) detailsContainer.style.display = 'none';
            }
        }
    });
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleLegend() {
    document.getElementById('legend').classList.toggle('visible');
}

// ==========================================
// FILTERING LOGIC (Search Only)
// ==========================================
function setupFilterListeners() {
    document.getElementById('filter-search').addEventListener('input', applySearchFilter);
}

function applySearchFilter() {
    const rawSearchText = document.getElementById('filter-search').value.toLowerCase();
    const searchText = rawSearchText.replace(/\s+/g, '').replace(/[—–]/g, '-');

    document.querySelectorAll('.category-card').forEach(categoryCard => {
        let categoryHasVisibleChildren = false;
        
        categoryCard.querySelectorAll('.archetype-card-wrapper').forEach(wrapper => {
            const archetypeCard = wrapper.querySelector('.archetype-card');
            if (!archetypeCard) return;

            const name = archetypeCard.dataset.name;
            const id = archetypeCard.dataset.id;
            const topic = archetypeCard.dataset.topic;

            let isMatch = id.includes(searchText) || name.includes(searchText) || topic.includes(searchText);
            
            // If parent doesn't match, check children
            if (!isMatch && (archetypeCard.classList.contains('is-parent'))) {
                const detailsContainer = archetypeCard.nextElementSibling;
                detailsContainer.querySelectorAll('.archetype-child-card').forEach(childCard => {
                    if (childCard.dataset.id.includes(searchText) || childCard.dataset.name.includes(searchText) || childCard.dataset.topic.includes(searchText)) {
                        isMatch = true;
                    }
                });
            }
            
            if (isMatch) {
                wrapper.style.display = 'block';
                categoryHasVisibleChildren = true;
            } else {
                wrapper.style.display = 'none';
            }
        });
        
        if (categoryHasVisibleChildren) {
            categoryCard.style.display = 'block';
        } else {
            categoryCard.style.display = 'none';
        }
    });
}
