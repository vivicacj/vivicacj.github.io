// evolution-map-app.js
// Main application logic for G3→G4 Evolution Map

// Global state
let allExpanded = false;

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('🚀 Initializing e-Math Archetype System...');
    
    // FIX: Add check for ARCHETYPES_DATA
    if (typeof ARCHETYPES_DATA === 'undefined') {
        console.error('ARCHETYPES_DATA not loaded!');
        document.body.innerHTML = '<h1 style="color: red; padding: 20px;">Error: archetypes-l123-data.js not loaded.</h1>';
        return;
    }
    
    console.log(`📊 Loaded ${ARCHETYPES_DATA.length} archetypes`);
    
    // Render all content
    renderStats();
    renderG3AndG4Topics();
    renderCatalog(document.getElementById('catalogContainer'));
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('✅ Application initialized successfully');
}

/**
 * Render statistics cards
 */
function renderStats() {
    const statsGrid = document.getElementById('statsGrid');
    const levels = { 'L1': 0, 'L2': 0, 'L3': 0 };
    const badges = { 'CORE': 0, 'SAT': 0 };
    
    ARCHETYPES_DATA.forEach(arch => {
        // Only count parent archetypes (not individual branches)
        if (!arch.parent_id) {
            if (levels[arch.level] !== undefined) levels[arch.level]++;
            if (badges[arch.badge]) badges[arch.badge]++;
        }
    });
    
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-value">${levels['L1'] + levels['L2'] + levels['L3']}</div>
            <div class="stat-label">Total Archetypes</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">🎯</div>
            <div class="stat-value">${levels['L1']}</div>
            <div class="stat-label">Level 1</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">🔗</div>
            <div class="stat-value">${levels['L2']}</div>
            <div class="stat-label">Level 2</div>
        </div>
        <div class="stat-card">
            <div class="stat-icon">⚡</div>
            <div class="stat-value">${levels['L3']}</div>
            <div class="stat-label">Level 3</div>
        </div>
    `;
}

/**
 * Render G3 and G4 topics separately
 */
function renderG3AndG4Topics() {
    const topics = ARCHETYPES_DATA.reduce((acc, arch) => {
        // Skip branch archetypes (only show parent archetypes)
        if (arch.parent_id) return acc;
        
        // Ensure topic key exists
        const topicKey = arch.topic || 'Uncategorized';
        
        if (!acc[topicKey]) {
            acc[topicKey] = { g3: [], g4: [] };
        }
        
        // G3 = Level 1 only
        if (arch.level === 'L1') {
            acc[topicKey].g3.push(arch);
        } 
        // G4 = Level 2 and Level 3
        else if (arch.level === 'L2' || arch.level === 'L3') {
            acc[topicKey].g4.push(arch);
        }
        return acc;
    }, {});
    
    const g3Container = document.getElementById('g3-topics-container');
    const g4Container = document.getElementById('g4-topics-container');
    
    let g3Html = '';
    let g4Html = '';
    
    const sortedTopicKeys = Object.keys(topics).sort();
    
    for (const topicKey of sortedTopicKeys) {
        const topicData = topics[topicKey];
        if (topicData.g3.length > 0) {
            g3Html += renderTopicCard(topicKey, topicData.g3, 'G3');
        }
        if (topicData.g4.length > 0) {
            g4Html += renderTopicCard(topicKey, topicData.g4, 'G4');
        }
    }
    
    g3Container.innerHTML = g3Html;
    g4Container.innerHTML = g4Html;
}

/**
 * Generate SOP chain summary
 */
function sopChainSummary(arch) {
    if (arch.level === 'L1') {
        if (arch.has_branches) {
            return `${arch.branches.length} methods available`;
        }
        return arch.sop?.steps ? `${arch.sop.steps.length} steps` : 'Basic procedure';
    } else if (arch.level === 'L2' && arch.constituent_l1_ids) {
        return `Calls: ${arch.constituent_l1_ids.join(', ')}`;
    } else if (arch.level === 'L3' && arch.source_l2_ids) {
        return `Synthesizes: ${arch.source_l2_ids.join(', ')}`;
    }
    return 'Multi-step process';
}

/**
 * Render a single topic card
 */
function renderTopicCard(topicKey, archetypes, gradeLevel) {
    const topicName = topicKey.charAt(0).toUpperCase() + topicKey.slice(1);
    
    // Determine badge types in this topic
    const badges = [...new Set(archetypes.map(a => a.badge))];
    const hasMixed = badges.length > 1;
    const pillType = hasMixed ? 'mixed' : (badges[0] ? badges[0].toLowerCase() : 'core'); // Fallback for undefined badge
    const pillText = hasMixed ? 'MIXED' : (badges[0] || 'CORE'); // Fallback for undefined badge
    
    const archetypesHtml = archetypes.sort((a,b) => a.id.localeCompare(b.id)).map(arch => { // Sort archetypes by ID
        let fullSopHtml = `<div class="sop-section">`;
        
        // ====== NEW: Show branches if available ======
        if (arch.has_branches && arch.branches && arch.branches.length > 0) {
            fullSopHtml += `
                <div class="branches-overview">
                    <h4>📂 Sub-Branches (${arch.branches.length})</h4>
                    <div class="branches-tree">
            `;
            
            arch.branches.forEach((branchId, index) => {
                const branch = ARCHETYPES_DATA.find(a => a.id === branchId);
                if (branch) {
                    const isLast = index === arch.branches.length - 1;
                    const prefix = isLast ? '└─' : '├─';
                    fullSopHtml += `
                        <div class="branch-tree-item" data-branch-id="${branchId}">
                            <span class="branch-prefix">${prefix}</span>
                            <span class="branch-name">${branch.name}</span>
                            <button class="branch-expand-btn" onclick="expandBranchDetails(event, '${branchId}')">
                                <svg class="icon-sm" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    `;
                }
            });
            
            fullSopHtml += `
                    </div>
                </div>
            `;
        }
        // ====== End branches section ======
        
        if (arch.sop) {
            // Goal
            if (arch.sop.goal) {
                fullSopHtml += `<h4>🎯 Goal</h4><p style="color: var(--text-secondary); line-height: 1.6;">${arch.sop.goal}</p>`;
            }
            
            // Triggers
            if (arch.sop.triggers && arch.sop.triggers.length > 0) {
                fullSopHtml += `<h4>🔔 Triggers</h4><ul>`;
                arch.sop.triggers.forEach(trigger => {
                    fullSopHtml += `<li>When you see: "${trigger}"</li>`;
                });
                fullSopHtml += `</ul>`;
            }
            
            // Steps
            if (arch.sop.steps && arch.sop.steps.length > 0) {
                fullSopHtml += `<h4>📋 Steps</h4><ul>`;
                arch.sop.steps.forEach(step => {
                    fullSopHtml += `<li>${step}</li>`;
                });
                fullSopHtml += `</ul>`;
            }
            
            // Pitfalls
            if (arch.sop.pitfalls && arch.sop.pitfalls.length > 0) {
                fullSopHtml += `<h4>⚠️ Pitfalls</h4>`;
                arch.sop.pitfalls.forEach(pitfall => {
                    fullSopHtml += `
                        <div class="pitfall-item">
                            <span class="pitfall-badge">${pitfall.type}</span>
                            <span>${pitfall.text}</span>
                        </div>
                    `;
                });
            }
            
            // Pro Tips
            if (arch.sop.pro_tips && arch.sop.pro_tips.length > 0) {
                fullSopHtml += `<h4>💡 Pro Tips</h4>`;
                arch.sop.pro_tips.forEach(tip => {
                    fullSopHtml += `
                        <div class="pro-tip-item">
                            <span class="pro-tip-badge">TIP</span>
                            <span>${tip}</span>
                        </div>
                    `;
                });
            }
        } else if (!arch.has_branches) { // Only show 'No SOP' if it's not a parent container
            fullSopHtml += '<p>No detailed SOP available.</p>';
        }
        fullSopHtml += '</div>';

        // ====== Add has-branches class if applicable ======
        const hasBranchesClass = arch.has_branches ? 'has-branches' : '';
        
        return `
            <div class="archetype-sop-group ${hasBranchesClass}" 
                 data-archetype-id="${arch.id}" 
                 data-archetype-name="${arch.name.toLowerCase()}" 
                 onclick="toggleArchetypeDetails(this)">
                <div class="archetype-card level-${arch.level.charAt(1)}">
                    <div class="archetype-title">
                        <span class="level-badge">${arch.level}</span>
                        ${arch.name}
                        ${arch.has_branches ? '<span class="branch-indicator">📂</span>' : ''}
                    </div>
                    <span class="archetype-expand-indicator">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6V18M6 12H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </div>
                <div class="sop-connector">
                    <div class="sop-chain">${sopChainSummary(arch)}</div>
                </div>
                <div class="archetype-details">
                    ${fullSopHtml}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="topic-card" data-keywords="${topicKey} ${archetypes.map(a => `${a.name} ${a.description}`).join(' ')}" onclick="toggleCard(this, event)">
            <div class="topic-header">
                <div class="topic-title-group">
                    <span class="topic-icon">🧩</span>
                    <div>
                        <div class="topic-title">${topicName}</div>
                        <div class="topic-subtitle">${archetypes.length} Archetype${archetypes.length > 1 ? 's' : ''}</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="pill ${pillType}">${pillText}</span>
                    <span class="expand-indicator"><svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
                </div>
            </div>
            <div class="topic-content">
                <div class="topic-body">
                    <div class="archetype-sop-container">${archetypesHtml}</div>
                </div>
            </div>
        </div>
    `;
}


/**
 * Expand branch details in a modal
 */
function expandBranchDetails(event, branchId) {
    event.stopPropagation();
    
    const branch = ARCHETYPES_DATA.find(a => a.id === branchId);
    if (!branch) {
        console.error('Branch not found:', branchId);
        return;
    }
    
    // Remove any existing modals first
    const existingModal = document.querySelector('.branch-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // --- FIX: Add logic for Back Button ---
    const parent = branch.parent_id ? ARCHETYPES_DATA.find(a => a.id === branch.parent_id) : null;
    let backButtonHtml = '';
    if (parent) {
        backButtonHtml = `
            <button onclick="event.stopPropagation(); expandBranchDetails(event, '${parent.id}')" 
                    style="background: var(--glass); border: 1px solid var(--glass-border); color: var(--text-secondary); padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8em; margin-bottom: 16px;">
                &larr; Back to ${parent.name}
            </button>
        `;
    }
    // --- END FIX ---

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'branch-modal';
    modal.innerHTML = `
        <div class="branch-modal-content">
            <div class="branch-modal-header">
                <div>
                    <h3>${branch.name}</h3>
                    <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 0.9em;">
                        ${branch.has_branches ? '📂 Parent Archetype' : branch.parent_id ? '↳ Branch of ' + branch.parent_id : 'L1 Archetype'}
                    </p>
                </div>
                <button class="branch-modal-close" onclick="this.closest('.branch-modal').remove(); document.body.style.overflow = '';">
                    <svg class="icon" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="branch-modal-body">
                ${backButtonHtml} <!-- FIX: Insert Back Button Here -->
                ${renderBranchSopDetails(branch)}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = '';
        }
    });
    
    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            modal.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}
/**
 * Render detailed SOP for a branch (or parent with branches)
 */
function renderBranchSopDetails(branch) {
    let html = '<div class="sop-section">';
    
    // ====== NEW: If this is a parent with branches, show branches first ======
    if (branch.has_branches && branch.branches && branch.branches.length > 0) {
        html += `
            <div class="branches-overview">
                <h4>📂 Sub-Branches (${branch.branches.length})</h4>
                <p style="margin-bottom: 16px;">
                    This is a parent archetype with multiple solution methods. Click on any branch below to view its detailed SOP.
                </p>
                <div class="branches-tree">
        `;
        
        branch.branches.forEach((branchId, index) => {
            const childBranch = ARCHETYPES_DATA.find(a => a.id === branchId);
            if (childBranch) {
                const isLast = index === branch.branches.length - 1;
                const prefix = isLast ? '└─' : '├─';
                html += `
                    <div class="branch-tree-item clickable" onclick="event.stopPropagation(); expandBranchDetails(event, '${branchId}')">
                        <span class="branch-prefix">${prefix}</span>
                        <span class="branch-name">${childBranch.name}</span>
                        <button class="branch-expand-btn">
                            <svg class="icon-sm" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                `;
            }
        });
        
        html += `
                </div>
            </div>
        `;
    }
    // ====== End branches section ======
    
    if (branch.sop) {
        // Goal
        if (branch.sop.goal) {
            html += `<h4>🎯 Goal</h4><p style="color: var(--text-secondary); line-height: 1.6;">${branch.sop.goal}</p>`;
        }
        
        // Triggers
        if (branch.sop.triggers && branch.sop.triggers.length > 0) {
            html += `<h4>🔔 Triggers</h4><ul>`;
            branch.sop.triggers.forEach(trigger => {
                html += `<li>When you see: "${trigger}"</li>`;
            });
            html += `</ul>`;
        }
        
        // Steps
        if (branch.sop.steps && branch.sop.steps.length > 0) {
            html += `<h4>📋 Steps</h4><ul>`;
            branch.sop.steps.forEach(step => {
                html += `<li>${step}</li>`;
            });
            html += `</ul>`;
        }
        
        // Pitfalls
        if (branch.sop.pitfalls && branch.sop.pitfalls.length > 0) {
            html += `<h4>⚠️ Pitfalls</h4>`;
            branch.sop.pitfalls.forEach(pitfall => {
                html += `
                    <div class="pitfall-item">
                        <span class="pitfall-badge">${pitfall.type}</span>
                        <span>${pitfall.text}</span>
                    </div>
                `;
            });
        }
        
        // Pro Tips
        if (branch.sop.pro_tips && branch.sop.pro_tips.length > 0) {
            html += `<h4>💡 Pro Tips</h4>`;
            branch.sop.pro_tips.forEach(tip => {
                html += `
                    <div class="pro-tip-item">
                        <span class="pro-tip-badge">TIP</span>
                        <span>${tip}</span>
                    </div>
                `;
            });
        }
    } else if (!branch.has_branches) { // Only show if not a parent
        html += '<p style="color: var(--text-secondary);">No detailed SOP available for this archetype.</p>';
    }
    
    html += '</div>';
    return html;
}


/**
 * Render catalog organized by levels
 */
function renderCatalog(container) {
    const levels = { 'L1': [], 'L2': [], 'L3': [] };
    ARCHETYPES_DATA.forEach(arch => {
        // Only show parent archetypes in catalog, not individual branches
        if (levels[arch.level] && !arch.parent_id) {
            levels[arch.level].push(arch);
        }
    });

    container.innerHTML = `
        <div class="catalog-card level-1 collapsible" onclick="toggleCatalogLevel(this)">
            <div class="catalog-header">
                <h3 class="catalog-title">Level 1 Archetypes (${levels['L1'].length})</h3>
                <span class="catalog-expand-indicator">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div class="catalog-content">
                <ul class="archetype-list">
                    ${levels['L1'].sort((a,b) => a.id.localeCompare(b.id)).map(a => {
                        let item = `<li><span class="level-badge">L1</span> ${a.name} (${a.topic})`;
                        if (a.has_branches) {
                            item += ` <span class="branch-count-badge">📂 ${a.branches.length} branches</span>`;
                        }
                        item += `</li>`;
                        return item;
                    }).join('')}
                </ul>
            </div>
        </div>
        <div class="catalog-card level-2 collapsible" onclick="toggleCatalogLevel(this)">
            <div class="catalog-header">
                <h3 class="catalog-title">Level 2 Archetypes (${levels['L2'].length})</h3>
                <span class="catalog-expand-indicator">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div class="catalog-content">
                <ul class="archetype-list">
                    ${levels['L2'].sort((a,b) => a.id.localeCompare(b.id)).map(a => `<li><span class="level-badge">L2</span> ${a.name} (${a.topic})</li>`).join('')}
                </ul>
            </div>
        </div>
        <div class="catalog-card level-3 collapsible" onclick="toggleCatalogLevel(this)">
            <div class="catalog-header">
                <h3 class="catalog-title">Level 3 Archetypes (${levels['L3'].length})</h3>
                <span class="catalog-expand-indicator">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9L12 16L5 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>
            <div class="catalog-content">
                <ul class="archetype-list">
                    ${levels['L3'].sort((a,b) => a.id.localeCompare(b.id)).map(a => `<li><span class="level-badge">L3</span> ${a.name} (${a.topic})</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Mouse move effect for cards
    document.body.addEventListener('mousemove', (e) => {
        const card = e.target.closest('.topic-card');
        if (card) {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        }
    });

    // Scroll to top button visibility
    window.addEventListener('scroll', () => {
        const scrollTopBtn = document.getElementById('scrollTop');
        if (window.pageYOffset > 300) { 
            scrollTopBtn.classList.add('visible'); 
        } else { 
            scrollTopBtn.classList.remove('visible'); 
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { 
            // Clear archetype finder
            document.getElementById('archetypeInput').value = '';
            document.getElementById('searchResultHint').classList.remove('show');
            document.getElementById('archetypeInput').blur();
        }
    });
}

/**
 * Toggle topic card expansion
 */
function toggleCard(card, event) {
    if (event.target.closest('.archetype-sop-group') || event.target.closest('.branch-tree-item')) {
        return; 
    }
    card.classList.toggle('expanded');
}

/**
 * Toggle archetype details expansion
 */
function toggleArchetypeDetails(group) {
    group.classList.toggle('details-expanded');
}

/**
 * Toggle all cards expansion
 */
function toggleAllCards() {
    const cards = document.querySelectorAll('.topic-card');
    const expandIcon = document.getElementById('expand-icon-svg');
    allExpanded = !allExpanded;
    
    cards.forEach(card => {
        if (allExpanded) {
            card.classList.add('expanded');
        } else {
            card.classList.remove('expanded');
        }
    });
    
    if (expandIcon) {
        if (allExpanded) {
            expandIcon.innerHTML = `<path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />`;
        } else {
            expandIcon.innerHTML = `<path d="M3 14H21M3 10H21M3 6H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
        }
    }
}

/**
 * Scroll to a specific section
 */
function scrollToSection(id) { 
    const element = document.getElementById(id);
    if(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
}

/**
 * Toggle legend visibility
 */
function toggleLegend() {
    document.getElementById('legend').classList.toggle('visible');
}

/**
 * Find and highlight an archetype
 */
function findArchetype() {
    const input = document.getElementById('archetypeInput').value.trim();
    const hint = document.getElementById('searchResultHint');
    
    if (!input) {
        showHint('⚠️ Please enter an Archetype ID or name', 'error');
        return;
    }

    // Clear previous highlights
    document.querySelectorAll('.archetype-sop-group.highlighted').forEach(el => {
        el.classList.remove('highlighted');
    });

    // Search for matching Archetype using data attributes
    const inputLower = input.toLowerCase();
    const matchedElement = Array.from(document.querySelectorAll('.archetype-sop-group')).find(el => {
        const id = el.getAttribute('data-archetype-id')?.toLowerCase();
        const name = el.getAttribute('data-archetype-name')?.toLowerCase();
        return id === inputLower || id?.includes(inputLower) || name?.includes(inputLower);
    });

    if (matchedElement) {
        // Found a match
        const topicCard = matchedElement.closest('.topic-card');
        
        // Expand Topic card if not already expanded
        if (topicCard && !topicCard.classList.contains('expanded')) {
            topicCard.classList.add('expanded');
        }
        
        // Expand Archetype details if not already expanded
        if (!matchedElement.classList.contains('details-expanded')) {
            matchedElement.classList.add('details-expanded');
        }
        
        // Add highlight effect
        matchedElement.classList.add('highlighted');
        
        // Scroll to the element
        setTimeout(() => {
            matchedElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 300);
        
        // Show success message
        const archetypeId = matchedElement.getAttribute('data-archetype-id');
        const archetypeName = matchedElement.querySelector('.archetype-title')?.textContent.trim().replace(/^L\d+\s*/, '').replace('📂', '').trim() || 'Archetype';
        
        showHint(`✓ Found: ${archetypeId} - ${archetypeName}`, 'success');
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
            matchedElement.classList.remove('highlighted');
        }, 3000);
    } else {
        // No match found
        showHint(`✗ No Archetype found matching "${input}". Try ID like "ARCH-L1-ALG-04" or name like "Quadratic"`, 'error');
    }
}

/**
 * Show hint message
 */
function showHint(message, type) {
    const hint = document.getElementById('searchResultHint');
    hint.textContent = message;
    hint.className = `search-result-hint show ${type}`;
    
    setTimeout(() => {
        hint.classList.remove('show');
    }, 4000);
}

/**
 * Toggle catalog level expansion
 */
function toggleCatalogLevel(card) {
    card.classList.toggle('expanded');
}

// Initialize the application once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);
