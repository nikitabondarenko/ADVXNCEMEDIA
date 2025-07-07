// ===== DYNAMIC CONTENT LOADING =====

// Load Services
function loadServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = SERVICES_DATA.map(service => `
        <div class="content-card p-8 text-center flex flex-col items-center">
            <div class="text-5xl text-advxnce-accent mb-6">${service.icon}</div>
            <h3 class="text-2xl font-bold mb-3 text-white">${service.title}</h3>
            <p class="text-gray-400 leading-relaxed">${service.description}</p>
        </div>
    `).join('');
}

// Load Achievements
function loadAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    if (!achievementsGrid) return;

    achievementsGrid.innerHTML = ACHIEVEMENTS_DATA.map(achievement => `
        <div class="content-card p-6 flex flex-col justify-between items-start text-left">
            <h4 class="text-xl font-bold text-white mb-2">${achievement.title}</h4>
            <p class="text-gray-400 mb-4 flex-grow">${achievement.description}</p>
            <span class="text-sm font-semibold text-advxnce-accent">${achievement.tags}</span>
        </div>
    `).join('');
}

// Load Expertise List
function loadExpertise() {
    const expertiseList = document.getElementById('expertise-list');
    if (!expertiseList) return;

    expertiseList.innerHTML = EXPERTISE_DATA.map(item => `
        <li class="flex items-center">
            <svg class="w-6 h-6 text-advxnce-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ${item}
        </li>
    `).join('');
}

// Load Method Features
function loadMethodFeatures() {
    const methodFeatures = document.getElementById('method-features');
    if (!methodFeatures) return;

    methodFeatures.innerHTML = METHOD_FEATURES_DATA.map(feature => `
        <div class="content-card p-6 flex items-start space-x-4">
            <div class="text-4xl mt-1 text-advxnce-accent">${feature.icon}</div>
            <div>
                <h4 class="font-bold text-xl text-white">${feature.title}</h4>
                <p class="text-gray-400 leading-relaxed">${feature.description}</p>
            </div>
        </div>
    `).join('');
}

// Load Impact Metrics
function loadImpactMetrics() {
    const impactMetrics = document.getElementById('impact-metrics');
    if (!impactMetrics) return;

    impactMetrics.innerHTML = IMPACT_METRICS_DATA.map(metric => `
        <div class="content-card p-6">
            <div class="flex items-center justify-between mb-4">
                <h4 class="font-bold text-lg text-white">${metric.title}</h4>
                <span class="text-advxnce-accent font-bold text-2xl">${metric.value}</span>
            </div>
            <p class="text-gray-400 text-sm">${metric.description}</p>
        </div>
    `).join('');
}

// Load Flowchart
function loadFlowchart() {
    const flowchartContainer = document.getElementById('flowchart-container');
    if (!flowchartContainer) return;

    flowchartContainer.innerHTML = `
        <div id="flow-challenge" class="flowchart-step active text-center p-6 bg-gray-900 shadow-md w-full md:w-64">
            <p class="font-bold text-white">1. The Client's Challenge</p>
        </div>
        <div class="text-3xl flowchart-arrow font-mono hidden md:block">&rarr;</div>
        <div class="text-3xl flowchart-arrow font-mono md:hidden">&darr;</div>
        <div id="flow-solution" class="flowchart-step text-center p-6 bg-gray-900 shadow-md w-full md:w-64">
            <p class="font-bold text-white">2. Our Strategic Solution</p>
        </div>
        <div class="text-3xl flowchart-arrow font-mono hidden md:block">&rarr;</div>
        <div class="text-3xl flowchart-arrow font-mono md:hidden">&darr;</div>
        <div id="flow-results" class="flowchart-step text-center p-6 bg-gray-900 shadow-md w-full md:w-64">
            <p class="font-bold text-white">3. Measurable Impact</p>
        </div>
    `;
}

// Load Style Toggles
function loadStyleToggles() {
    const paletteToggles = document.getElementById('palette-toggles');
    const fontToggles = document.getElementById('font-toggles');
    
    if (paletteToggles) {
        paletteToggles.innerHTML = `
            <button data-palette="dark" class="style-toggle-button active px-4 py-2 border rounded-xl text-white">Dark Mode</button>
            <button data-palette="light" class="style-toggle-button px-4 py-2 border rounded-xl text-white">Light Mode</button>
        `;
    }
    
    if (fontToggles) {
        fontToggles.innerHTML = `
            <button data-font="futuristic" class="style-toggle-button active px-4 py-2 border rounded-xl text-white">Tech-Modern</button>
            <button data-font="classic" class="style-toggle-button px-4 py-2 border rounded-xl text-white">Professional Classic</button>
        `;
    }

    // Initialize style playground
    initializeStylePlayground();
}

// ===== STYLE PLAYGROUND FUNCTIONALITY =====
function initializeStylePlayground() {
    const paletteToggles = document.querySelectorAll('[data-palette]');
    const fontToggles = document.querySelectorAll('[data-font]');
    const previewCard = document.getElementById('style-preview-card');
    const previewHeading = document.getElementById('preview-heading');
    const previewText = document.getElementById('preview-text');
    const previewButton = document.getElementById('preview-button');

    if (!previewCard || !previewHeading || !previewText || !previewButton) return;

    const styles = STYLE_CONFIG_DATA;
    
    let currentPalette = 'dark';
    let currentFont = 'futuristic';

    function applyStyles() {
        const p = styles.palettes[currentPalette];
        const f = styles.fonts[currentFont];
        
        previewCard.className = `p-8 rounded-xl transition-all duration-300 w-full max-w-sm ${p.card}`;
        
        previewHeading.classList.remove('font-orbitron', 'font-inter', 'font-extrabold');
        if (f.heading.includes('font-orbitron')) {
            previewHeading.classList.add('font-orbitron');
        } else if (f.heading.includes('font-inter')) {
            previewHeading.classList.add('font-inter');
        }
        if (f.heading.includes('font-extrabold')) {
             previewHeading.classList.add('font-extrabold');
        }
        previewHeading.classList.add(p.heading);

        previewText.classList.remove('font-orbitron', 'font-inter');
        if (f.text.includes('font-orbitron')) {
            previewText.classList.add('font-orbitron');
        } else if (f.text.includes('font-inter')) {
            previewText.classList.add('font-inter');
        }
        previewText.classList.add(p.text);

        previewButton.className = `px-7 py-3 rounded-xl font-bold transition-all duration-300 text-base ${p.buttonBg} ${p.buttonText}`;
    }
    
    paletteToggles.forEach(button => {
        button.addEventListener('click', () => {
            currentPalette = button.dataset.palette;
            paletteToggles.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyStyles();
        });
    });

    fontToggles.forEach(button => {
        button.addEventListener('click', () => {
            currentFont = button.dataset.font;
            fontToggles.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            applyStyles();
        });
    });
    
    applyStyles();
} 