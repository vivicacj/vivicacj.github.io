/**
 * evolution-map-app.js
 * * This file contains all the application logic for the
 * G3-G4 Evolution Map. It reads from 'archetypes-l123-data.js'
 * and dynamically builds the HTML content.
 * * v2.1 - Fixed modal recursive navigation and back button.
 */

// ==========================================
// GLOBAL STATE & CONSTANTS
// ==========================================
let allTopics = [];
let l1Archetypes = [];
let l2Archetypes = [];
let l3Archetypes = [];
let allArchetypes = [];
let isAllExpanded = false;

// Icon definitions
const ICONS = {
    Algebra: '🧮',
    Geometry: '📐',
    Trigonometry: '🧭',
    Mensuration: '📏',
    'Statistics & Probability': '📊',
    Numbers: '🔢',
    Meta: '🧠',
    plus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    minus: `<svg class="icon-sm" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    branch: `<svg class="icon-sm" style="color: var(--accent)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 3V3C8.76142 3 11 5.23858 11 8V11M6 3V11M6 11H3M6 11H9M11 11V11C13.7614 11 16 13.2386 16 16V21M16 21H13M16 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    expand: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 14H21M3 10H21M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    collapse: `<svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M9 6H15M9 18H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    stat_l1: '📚',
    stat_l2: '📈',
    stat_l3: '🏆',
    stat_topics: '🧩'
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if data is loaded
    if (typeof ARCHETYPES_DATA === 'undefined') {
        console.error("CRITICAL ERROR: archetypes-l123-data.js not loaded.");
        document.getElementById('g3-topics-container').innerHTML = 
            '<p style="color: var(--danger);">Error: archetypes-l123-data.js not loaded. Please check file paths and console for syntax errors.</p>';
        return;
    }

    // 2. Process data
    try {
        allArchetypes = ARCHETYPES_DATA;
        allTopics = [...new Set(allArchetypes.map(a => a.topic))];
        l1Archetypes = allArchetypes.filter(a => a.level === 'L1' && !a.parent_id);
        l2Archetypes = allArchetypes.filter(a => a.level === 'L2' && !a.parent_id);
        l3Archetypes = allArchetypes.filter(a => a.level === 'L3' && !a.parent_id);
    } catch (e) {
        console.error("Error processing Archetype data:", e);
        return;
    }

    // 3. Populate sections
    populateStats();
    populateTopics('G3', 'g3-topics-container');
    populateTopics('G4', 'g4-topics-container');
    populateCatalog();
    
    // 4. Setup global listeners
    setupEventListeners();
});

// ==========================================
// DATA PROCESSING
// ==========================================
function getArchetypesByGrade(grade) {
    if (grade === 'G3') {
        return l1Archetypes;
    } else if (grade === 'G4') {
        return [...l2Archetypes, ...l3Archetypes].sort((a,b) => a.level.localeCompare(b.level) || a.id.localeCompare(b.id));
    }
    return [];
}

function getGroupedByTopic(archetypes) {
    return allTopics
        .map(topic => ({
            topic,
            archetypes: archetypes.filter(a => a.topic === topic).sort((a,b) => a.id.localeCompare(b.id))
        }))
        .filter(g => g.archetypes.length > 0)
        .sort((a, b) => a.topic.localeCompare(b.topic));
}

function getArchetypeById(id) {
    return allArchetypes.find(a => a.id === id);
}

// ==========================================
// HTML RENDERING FUNCTIONS
// ==========================================

/**
 * Populates the hero statistics
 */
function populateStats() {
    const statsGrid = document.getElementById('statsGrid');
    const stats = [
        { id: 'l1', label: 'L1 Archetypes', value: l1Archetypes.length, icon: ICONS.stat_l1 },
        { id: 'l2', label: 'L2 Archetypes', value: l2Archetypes.length, icon: ICONS.stat_l2 },
        { id: 'l3', label: 'L3 Archetypes', value: l3Archetypes.length, icon: ICONS.stat_l3 },
        { id: 'total', label: 'Total Topics', value: allTopics.length, icon: ICONS.stat_topics }
    ];
    
    statsGrid.innerHTML = stats.map(stat => `
      <div class="stat-card">
        <span class="stat-icon">${stat.icon}</span>
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
}

/**
 * Populates the G3 or G4 topic containers
 */
function populateTopics(grade, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const archetypes = getArchetypesByGrade(grade);
    const groupedData = getGroupedByTopic(archetypes);

    container.innerHTML = groupedData.map(group => {
        const archetypeCount = group.archetypes.length;
        // Determine pill
        const levels = new Set(group.archetypes.map(a => a.level));
        let pill = 'core';
        if (levels.size > 1) pill = 'mixed';
        else if (group.archetypes.every(a => a.badge === 'SAT')) pill = 'sat';

        return `
        <div class="topic-card" id="topic-card-${group.topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}" data-topic="${group.topic}">
          <div class="topic-header" onclick="toggleTopic(this)">
            <div class="topic-title-group">
              <span class="topic-icon">${ICONS[group.topic] || '🧩'}</span>
              <div>
                <h3 class="topic-title">${group.topic}</h3>
                <p class="topic-subtitle">${archetypeCount} Archetype${archetypeCount > 1 ? 's' : ''}</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
              <span class="pill ${pill}">${pill}</span>
              <div class="expand-indicator">
                ${ICONS.plus}
              </div>
            </div>
          </div>
          <div class="topic-content">
            <div class="topic-body">
              <div class="archetype-sop-container">
                ${group.archetypes.map(archetype => renderArchetype(archetype)).join('')}
              </div>
            </div>
          </div>
        </div>
        `;
    }).join('');
}

/**
 * Renders a single Archetype card
 */
function renderArchetype(archetype) {
    const levelClass = `level-${archetype.level.toLowerCase().replace('l', '')}`;
    
    // Check for branches
    const hasBranches = archetype.branches && archetype.branches.length > 0;

    // *** MODIFICATION ***
    // ALL items in the main list will now use toggleSop
    const clickAction = `toggleSop(this, '${archetype.id}')`; 
        
    const branchIcon = hasBranches ? ICONS.branch : '';
    const branchCount = hasBranches ? `<span class="branch-count-badge">${archetype.branches.length} sub-models</span>` : '';
    
    // *** MODIFICATION ***
    // Pass the *entire* archetype object to renderSopDetails
    const sopHtml = renderSopDetails(archetype);

    return `
    <div class="archetype-sop-group" id="arch-${archetype.id}">
      <div class="archetype-card ${levelClass}" onclick="${clickAction}">
        <div class="archetype-title">
          <span class="level-badge">${archetype.level}</span>
          <span class="archetype-name">
            ${archetype.name} ${branchIcon}
          </span>
          <span class="archetype-id">${archetype.id}</span>
          ${branchCount}
        </div>
        <div class="archetype-expand-indicator">
          ${ICONS.plus}
        </div>
      </div>
      ${sopHtml}
    </div>
    `;
}

/**
 * [MODIFIED] Renders the hidden SOP details section
 * Now accepts the full archetype object.
 * Renders BOTH the SOP and the sub-branch list if they exist.
 */
function renderSopDetails(archetype) { // <-- Signature changed
    const sop = archetype.sop;
    const level = archetype.level;
    
    let sopDisplayHtml = '';
    
    // 1. Render the SOP, if it exists
    if (sop && sop.goal) {
        const steps = sop.steps.map(s => `<li>${s}</li>`).join('');
        const pitfalls = sop.pitfalls.map(p => `
            <div class="pitfall-item">
              <span class="pitfall-badge">${p.type || 'Error'}</span>
              <span>${p.text}</span>
            </div>
        `).join('');
        const proTips = sop.pro_tips.map(t => `
            <div class="pro-tip-item">
              <span class="pro-tip-badge">Pro Tip</span>
              <span>${t}</span>
            </div>
        `).join('');

        sopDisplayHtml = `
          <div class="sop-section">
            <p class="sop-goal">${sop.goal}</p>
            
            <h4>Steps</h4>
            <ul>${steps}</ul>
            
            ${pitfalls ? `<h4 style="margin-top: 1.5rem;">Pitfalls</h4>${pitfalls}` : ''}
            ${proTips ? `<h4 style="margin-top: 1.5rem;">Pro Tips</h4>${proTips}` : ''}
          </div>
        `;
    } else if (level === 'L1' && !archetype.has_branches) {
        // Only show "No SOP" for simple L1s that truly have no SOP
        sopDisplayHtml = `<div class="sop-section"><p class="sop-goal">No detailed SOP available.</p></div>`;
    }

    // 2. Render the Sub-Model list, if it exists
    let branchDisplayHtml = '';
    if (archetype.branches && archetype.branches.length > 0) {
        const branchArchetypes = archetype.branches
            .map(id => getArchetypeById(id))
            .filter(Boolean);
            
        branchDisplayHtml = `
          <h4 class="modal-sub-branch-title" style="margin-top: ${sopDisplayHtml ? '1.5rem' : '0'};">Sub-Models (${branchArchetypes.length})</h4>
          <div class="branches-tree">
            ${branchArchetypes.map(branch => `
              <div class="branch-tree-item clickable" onclick="showModalForArchetype('${branch.id}')">
                <span class="branch-prefix">↳</span>
                <span class="branch-name">
                    <span class="level-badge">${branch.level}</span>
                    <span class="archetype-id">${branch.id}</span>
                    ${branch.name}
                </span>
              </div>
            `).join('')}
          </div>
        `;
    }

    // 3. Combine and wrap
    // Only render the container if there is *something* to show
    if (!sopDisplayHtml && !branchDisplayHtml) {
         if (level === 'L1') return `<div class="archetype-details"></div>`; // Empty div for L1 parents w/o SOPs
         return ''; // Nothing for L2/L3
    }
    
    return `
    <div class="archetype-details">
      ${sopDisplayHtml}
      ${branchDisplayHtml}
    </div>
    `;
}

/**
 * Populates the complete catalog section
 */
function populateCatalog() {
    const container = document.getElementById('catalogContainer');
    if (!container) return;
    
    const levels = [
        { level: 'L1', title: 'L1: Fundamental Skills', archetypes: l1Archetypes, class: 'level-1' },
        { level: 'L2', title: 'L2: Integration', archetypes: l2Archetypes, class: 'level-2' },
        { level: 'L3', title: 'L3: Synthesis', archetypes: l3Archetypes, class: 'level-3' },
    ];

    container.innerHTML = levels.map(levelGroup => {
        const groupedByTopic = getGroupedByTopic(levelGroup.archetypes);
        
        return `
        <div class="catalog-card collapsible ${levelGroup.class}" onclick="this.classList.toggle('expanded')">
          <div class="catalog-header">
            <h3 class="catalog-title">${levelGroup.title} (${levelGroup.archetypes.length})</h3>
            <div class="catalog-expand-indicator">${ICONS.plus}</div>
          </div>
          <div class="catalog-content">
            ${groupedByTopic.map(topicGroup => `
              <h4 style="color: var(--text-primary); margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.1rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem;">
                ${ICONS[topicGroup.topic] || '🧩'} ${topicGroup.topic}
              </h4>
              <ul class="archetype-list">
                ${topicGroup.archetypes.map(a => `
                  <li onclick="event.stopPropagation(); findArchetype('${a.id}');">
                    <span class="level-badge">${a.level}</span>
                    <span class="archetype-id">${a.id}</span>
                    <span>${a.name}</span>
                  </li>
                `).join('')}
              </ul>
            `).join('')}
          </div>
        </div>
        `;
    }).join('');
}

// ==========================================
// INTERACTIVITY & EVENT HANDLERS
// ==========================================

/**
 * Sets up global event listeners
 */
function setupEventListeners() {
    // Scroll-to-top button visibility
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Topic card hover effect
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
    
    // Close modal on overlay click
    const modal = document.getElementById('branchModal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBranchModal();
        }
    });

    // Add CSS rules for new modal elements
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .modal-back-btn {
            background: var(--glass);
            border: 1px solid var(--glass-border);
            color: var(--text-secondary);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
            transition: all 0.2s ease;
        }
        .modal-back-btn:hover {
            background: var(--bg-tertiary);
            border-color: var(--primary);
        }
        .modal-sub-branch-title {
            color: var(--accent);
            font-size: 1rem;
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-top: 1px solid var(--glass-border);
            padding-top: 1.5rem;
        }
    `;
    document.head.appendChild(styleSheet);
}

/**
 * Toggles a topic card (expand/collapse)
 */
function toggleTopic(headerElement) {
    const card = headerElement.closest('.topic-card');
    const indicator = headerElement.querySelector('.expand-indicator');
    card.classList.toggle('expanded');
    
    if (card.classList.contains('expanded')) {
        indicator.innerHTML = ICONS.minus;
    } else {
        indicator.innerHTML = ICONS.plus;
    }
}

/**
 * Toggles an archetype's SOP details
 */
function toggleSop(cardElement, archetypeId) {
    const group = cardElement.closest('.archetype-sop-group');
    const indicator = cardElement.querySelector('.archetype-expand-indicator');
    const isExpanded = group.classList.toggle('details-expanded');
    
    indicator.style.transform = isExpanded ? 'rotate(45deg)' : 'rotate(0deg)';
}

/**
 * Renders the SOP section for the modal
 */
function renderModalSopSection(sop) {
    if (!sop || !sop.goal) return '';

    const steps = sop.steps.map(s => `<li>${s}</li>`).join('');
    const pitfalls = sop.pitfalls.map(p => `
        <div class="pitfall-item">
          <span class="pitfall-badge">${p.type || 'Error'}</span>
          <span>${p.text}</span>
        </div>
    `).join('');
    const proTips = sop.pro_tips.map(t => `
        <div class="pro-tip-item">
          <span class="pro-tip-badge">Pro Tip</span>
          <span>${t}</span>
        </div>
    `).join('');

    return `
      <div class="sop-section" style="margin-top: 0;">
        <p class="sop-goal">${sop.goal}</p>
        
        <h4>Steps</h4>
        <ul>${steps}</ul>
        
        ${pitfalls ? `<h4 style="margin-top: 1.5rem;">Pitfalls</h4>${pitfalls}` : ''}
        ${proTips ? `<h4 style="margin-top: 1.5rem;">Pro Tips</h4>${proTips}` : ''}
      </div>
    `;
}

/**
 * [FIXED]
 * Opens the modal and renders content for a specific Archetype ID
 * This function now handles both parents and children recursively.
 * It now uses addEventListener for more robust sub-item clicks.
 */
function showModalForArchetype(archetypeId) {
    const archetype = getArchetypeById(archetypeId);
    if (!archetype) return;

    const modal = document.getElementById('branchModal');
    const title = document.getElementById('branchModalTitle');
    const body = document.getElementById('branchModalBody');
    
    // Set Modal Title
    title.textContent = archetype.name;
    
    let bodyHtml = '';

    // 1. Add "Back" button if it's a child (has a parent_id)
    if (archetype.parent_id) {
        const parent = getArchetypeById(archetype.parent_id);
        if (parent) {
            // *** FIX: Corrected HTML syntax for the button ***
            bodyHtml += `<button class="modal-back-btn" data-archetype-id="${parent.id}">← Back to ${parent.name}</button>`;
        }
    }

    // 2. Add description overview
    bodyHtml += `
      <div class="branches-overview">
        <h4>${archetype.name} (<span class="archetype-id" style="font-size: 0.9em;">${archetype.id}</span>)</h4>
        <p>${archetype.description}</p>
      </div>
    `;

    // 3. Add SOP details for the *current* archetype
    bodyHtml += renderModalSopSection(archetype.sop);

    // 4. Add sub-branch list if they exist
    if (archetype.branches && archetype.branches.length > 0) {
        const branchArchetypes = archetype.branches
            .map(id => getArchetypeById(id))
            .filter(Boolean);
            
        bodyHtml += `<h4 class="modal-sub-branch-title">Sub-Models (${branchArchetypes.length})</h4>`;
        bodyHtml += `<div class="branches-tree">`;
        bodyHtml += branchArchetypes.map(branch => `
          <!-- *** FIX: Removed inline onclick, will use event listener *** -->
          <div class="branch-tree-item clickable" data-archetype-id="${branch.id}">
            <span class="branch-prefix">↳</span>
            <span class="branch-name">
                <span class="level-badge">${branch.level}</span>
                <span class="archetype-id">${branch.id}</span>
                ${branch.name}
            </span>
          </div>
        `).join('');
        bodyHtml += `</div>`;
    }

    // Render to DOM
    body.innerHTML = bodyHtml;
    // Scroll modal body to top
    body.scrollTop = 0; 
    
    // *** FIX: Bind events *after* rendering HTML ***
    bindModalEvents(body);
    
    // Show modal
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

/**
 * [FIXED] Binds click events within the modal body
 */
function bindModalEvents(modalBody) {
    // Bind clicks for sub-items
    modalBody.querySelectorAll('.branch-tree-item.clickable').forEach(item => {
        item.addEventListener('click', (e) => {
            const archetypeId = e.currentTarget.dataset.archetypeId;
            if (archetypeId) {
                showModalForArchetype(archetypeId);
            }
        });
    });

    // Bind clicks for back button
    // *** FIX: Corrected selector from '._modal-back-btn' to '.modal-back-btn' ***
    const backButton = modalBody.querySelector('.modal-back-btn');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            const archetypeId = e.currentTarget.dataset.archetypeId;
            if (archetypeId) {
                showModalForArchetype(archetypeId);
            }
        });
    }
}


/**
 * Closes the branch modal
 */
function closeBranchModal() {
    const modal = document.getElementById('branchModal');
    modal.classList.add('exiting');
    document.body.style.overflow = ''; // Restore background scroll
    
    setTimeout(() => {
        modal.classList.remove('visible', 'exiting');
    }, 300); // Match animation duration
}

/**
 * Expands or collapses all topic cards
 */
function toggleAllCards() {
    isAllExpanded = !isAllExpanded;
    const cards = document.querySelectorAll('.topic-card');
    const btn = document.getElementById('expandAllBtn');
    
    cards.forEach(card => {
        const indicator = card.querySelector('.topic-header .expand-indicator');
        if (isAllExpanded) {
            card.classList.add('expanded');
            indicator.innerHTML = ICONS.minus;
        } else {
            card.classList.remove('expanded');
            indicator.innerHTML = ICONS.plus;
        }
    });
    
    btn.innerHTML = isAllExpanded ? `${ICONS.collapse} Collapse All` : `${ICONS.expand} Expand All`;
}

/**
 * Scrolls to a specific section
 */
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Toggles the legend visibility
 */
function toggleLegend() {
    document.getElementById('legend').classList.toggle('visible');
}

/**
 * Finds an archetype by ID or name and highlights it
 */
function findArchetype(idToFind = null) {
    const input = document.getElementById('archetypeInput');
    const hint = document.getElementById('searchResultHint');
    const query = (idToFind || input.value).trim().toLowerCase();
    
    if (!query) return;
    
    // Clear previous highlights
    document.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
    
    let foundArchetype = allArchetypes.find(a => 
        a.id.toLowerCase() === query || 
        a.name.toLowerCase().includes(query)
    );
    
    if (foundArchetype) {
        // If a branch was found, find its *main* list item (which is the parent)
        let displayId = foundArchetype.parent_id ? foundArchetype.parent_id : foundArchetype.id;
        const element = document.getElementById(`arch-${displayId}`);
        
        if (element) {
            // 1. Scroll to the element
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // 2. Expand its parent topic card
            const topicCard = element.closest('.topic-card');
            if (topicCard && !topicCard.classList.contains('expanded')) {
                toggleTopic(topicCard.querySelector('.topic-header'));
            }
            
            // 3. Highlight the element
            element.classList.add('highlighted');
            
            // 4. Show success hint
            showHint(`✅ Found: ${foundArchetype.name}`, 'success');
            input.value = '';
            
            // 5. Open the modal and navigate to the specific item
            // This will open the parent modal first, then navigate to the child if needed
            setTimeout(() => {
               showModalForArchetype(foundArchetype.id);
            }, 700); // Wait for scroll to finish

        } else {
            showHint(`❌ Archetype found but not visible in current view.`, 'error');
        }
    } else {
        showHint(`❌ No archetype found for "${query}".`, 'error');
    }
}

/**
 * Displays a temporary hint message
 */
function showHint(message, type = 'success') {
    const hint = document.getElementById('searchResultHint');
    hint.textContent = message;
    hint.className = `search-result-hint ${type} show`;
    
    setTimeout(() => {
        hint.classList.remove('show');
    }, 3000);
}
