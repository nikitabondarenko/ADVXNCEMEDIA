// ===== MAIN APPLICATION INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initializeNavigation();
    initializeScrollspy();
    initializeSmoothScrolling();
    initializeFlowchart();
    initializeStylePlayground();
    
    // Load dynamic content
    loadServices();
    loadAchievements();
    loadExpertise();
    loadMethodFeatures();
    loadImpactMetrics();
    loadFlowchart();
    loadStyleToggles();
});

// ===== NAVIGATION INITIALIZATION =====
function initializeNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// ===== SCROLLSPY INITIALIZATION =====
function initializeScrollspy() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const targetId = link.getAttribute('href').substring(1);
                    if (targetId === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenu = document.getElementById('mobile-menu');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// ===== FLOWCHART INITIALIZATION =====
function initializeFlowchart() {
    const flowchartSteps = document.querySelectorAll('.flowchart-step');
    const flowchartText = document.getElementById('flowchart-text');

    if (flowchartSteps.length && flowchartText) {
        flowchartSteps.forEach(step => {
            step.addEventListener('click', () => {
                updateFlowchart(step.id);
            });
        });

        // Initialize with first step
        updateFlowchart('flow-challenge');
    }
}

// ===== STYLE PLAYGROUND INITIALIZATION =====
function initializeStylePlayground() {
    // This will be handled by components.js
    // Keeping it here for organization
}

// ===== UTILITY FUNCTIONS =====
function updateFlowchart(activeStepId) {
    const flowchartSteps = document.querySelectorAll('.flowchart-step');
    const flowchartText = document.getElementById('flowchart-text');
    
    const flowchartDetails = FLOWCHART_DATA;

    flowchartSteps.forEach(step => {
        step.classList.toggle('active', step.id === activeStepId);
    });
    
    if (flowchartText && flowchartDetails[activeStepId]) {
        flowchartText.innerHTML = flowchartDetails[activeStepId];
    }
} 