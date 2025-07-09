// ===== MAIN JAVASCRIPT FUNCTIONALITY =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initializeMobileMenu();
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeServiceCards();
    initializeAchievementCards();
    initializeFlowchart();
    initializeExpertiseList();
    initializeMethodFeatures();
    initializeImpactMetrics();
    initializeStylePlayground();
    initializeParallaxEffects();
    initializeLoadingStates();
    
    // Add performance optimizations
    optimizePerformance();
}

// ===== MOBILE MENU FUNCTIONALITY =====
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Animate menu items
            const menuItems = mobileMenu.querySelectorAll('a');
            menuItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.classList.add('animate-fade-in-up');
            });
        });
        
        // Close menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add staggered animations for child elements
                const children = entry.target.querySelectorAll('.animate-stagger');
                children.forEach((child, index) => {
                    child.style.animationDelay = `${index * 0.1}s`;
                    child.classList.add('animate-fade-in-up');
                });
            }
        });
    }, observerOptions);
    
    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach(el => observer.observe(el));
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SERVICE CARDS =====
function initializeServiceCards() {
    const servicesGrid = document.getElementById('services-grid');
    
    if (servicesGrid && SERVICES_DATA) {
        servicesGrid.innerHTML = SERVICES_DATA.map((service, index) => `
            <div class="service-card animate-stagger" style="animation-delay: ${index * 0.1}s;">
                <span class="service-icon">${service.icon}</span>
                <h3 class="text-xl font-bold mb-4 text-white">${service.title}</h3>
                <p class="text-gray-400 leading-relaxed">${service.description}</p>
            </div>
        `).join('');
    }
}

// ===== ACHIEVEMENT CARDS =====
function initializeAchievementCards() {
    const achievementsGrid = document.getElementById('achievements-grid');
    
    if (achievementsGrid && ACHIEVEMENTS_DATA) {
        achievementsGrid.innerHTML = ACHIEVEMENTS_DATA.map((achievement, index) => `
            <div class="achievement-card animate-stagger" style="animation-delay: ${index * 0.1}s;">
                <h4 class="text-xl font-bold mb-3 text-white">${achievement.title}</h4>
                <p class="text-gray-400 mb-4 leading-relaxed">${achievement.description}</p>
                <div class="text-sm text-advxnce-accent font-medium">${achievement.tags}</div>
            </div>
        `).join('');
    }
}

// ===== FLOWCHART FUNCTIONALITY =====
function initializeFlowchart() {
    const flowchartContainer = document.getElementById('flowchart-container');
    const flowchartText = document.getElementById('flowchart-text');
    
    if (flowchartContainer && flowchartText && FLOWCHART_DATA) {
        const steps = [
            { id: 'flow-challenge', label: 'Challenge', icon: '🎯' },
            { id: 'flow-solution', label: 'Solution', icon: '💡' },
            { id: 'flow-results', label: 'Results', icon: '📈' }
        ];
        
        flowchartContainer.innerHTML = steps.map((step, index) => `
            <button class="flowchart-step flex flex-col items-center p-4 rounded-lg border-2 border-gray-700 hover:border-advxnce-accent transition-all duration-300 ${index === 0 ? 'border-advxnce-accent' : ''}" 
                    data-step="${step.id}">
                <span class="text-3xl mb-2">${step.icon}</span>
                <span class="text-sm font-medium text-white">${step.label}</span>
            </button>
        `).join('');
        
        // Set initial text
        flowchartText.innerHTML = FLOWCHART_DATA['flow-challenge'];
        
        // Add click handlers
        const flowchartSteps = flowchartContainer.querySelectorAll('.flowchart-step');
        flowchartSteps.forEach(step => {
            step.addEventListener('click', function() {
                const stepId = this.getAttribute('data-step');
                
                // Update active state
                flowchartSteps.forEach(s => s.classList.remove('border-advxnce-accent'));
                this.classList.add('border-advxnce-accent');
                
                // Update text with animation
                flowchartText.style.opacity = '0';
                setTimeout(() => {
                    flowchartText.innerHTML = FLOWCHART_DATA[stepId];
                    flowchartText.style.opacity = '1';
                }, 200);
            });
        });
    }
}

// ===== EXPERTISE LIST =====
function initializeExpertiseList() {
    const expertiseList = document.getElementById('expertise-list');
    
    if (expertiseList && EXPERTISE_DATA) {
        expertiseList.innerHTML = EXPERTISE_DATA.map((expertise, index) => `
            <li class="flex items-center animate-stagger" style="animation-delay: ${index * 0.1}s;">
                <span class="text-advxnce-accent mr-3 text-xl">✓</span>
                <span>${expertise}</span>
            </li>
        `).join('');
    }
}

// ===== METHOD FEATURES =====
function initializeMethodFeatures() {
    const methodFeatures = document.getElementById('method-features');
    
    if (methodFeatures && METHOD_FEATURES_DATA) {
        methodFeatures.innerHTML = METHOD_FEATURES_DATA.map((feature, index) => `
            <div class="content-card animate-stagger" style="animation-delay: ${index * 0.1}s;">
                <div class="flex items-start">
                    <span class="text-3xl mr-4">${feature.icon}</span>
                    <div>
                        <h4 class="text-xl font-bold mb-3 text-white">${feature.title}</h4>
                        <p class="text-gray-400 leading-relaxed">${feature.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ===== IMPACT METRICS =====
function initializeImpactMetrics() {
    const impactMetrics = document.getElementById('impact-metrics');
    
    if (impactMetrics && IMPACT_METRICS_DATA) {
        impactMetrics.innerHTML = IMPACT_METRICS_DATA.map((metric, index) => `
            <div class="metric-card animate-stagger" style="animation-delay: ${index * 0.1}s;">
                <div class="metric-value">${metric.value}</div>
                <h4 class="text-lg font-bold mb-2 text-white">${metric.title}</h4>
                <p class="text-gray-400 text-sm">${metric.description}</p>
            </div>
        `).join('');
    }
}

// ===== STYLE PLAYGROUND =====
function initializeStylePlayground() {
    const paletteToggles = document.getElementById('palette-toggles');
    const fontToggles = document.getElementById('font-toggles');
    const previewCard = document.getElementById('style-preview-card');
    const previewHeading = document.getElementById('preview-heading');
    const previewText = document.getElementById('preview-text');
    const previewButton = document.getElementById('preview-button');
    
    if (paletteToggles && fontToggles && STYLE_CONFIG_DATA) {
        // Create palette toggles
        paletteToggles.innerHTML = Object.keys(STYLE_CONFIG_DATA.palettes).map((palette, index) => `
            <button class="palette-toggle px-4 py-2 rounded-lg border-2 transition-all duration-300 ${index === 0 ? 'border-advxnce-accent bg-advxnce-accent/10' : 'border-gray-600 hover:border-gray-500'}" 
                    data-palette="${palette}">
                ${palette.charAt(0).toUpperCase() + palette.slice(1)}
            </button>
        `).join('');
        
        // Create font toggles
        fontToggles.innerHTML = Object.keys(STYLE_CONFIG_DATA.fonts).map((font, index) => `
            <button class="font-toggle px-4 py-2 rounded-lg border-2 transition-all duration-300 ${index === 0 ? 'border-advxnce-accent bg-advxnce-accent/10' : 'border-gray-600 hover:border-gray-500'}" 
                    data-font="${font}">
                ${font.charAt(0).toUpperCase() + font.slice(1)}
            </button>
        `).join('');
        
        // Add event listeners
        const paletteButtons = paletteToggles.querySelectorAll('.palette-toggle');
        const fontButtons = fontToggles.querySelectorAll('.font-toggle');
        
        paletteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const palette = this.getAttribute('data-palette');
                updatePreviewStyle(palette, getCurrentFont());
                
                // Update active state
                paletteButtons.forEach(b => b.classList.remove('border-advxnce-accent', 'bg-advxnce-accent/10'));
                this.classList.add('border-advxnce-accent', 'bg-advxnce-accent/10');
            });
        });
        
        fontButtons.forEach(button => {
            button.addEventListener('click', function() {
                const font = this.getAttribute('data-font');
                updatePreviewStyle(getCurrentPalette(), font);
                
                // Update active state
                fontButtons.forEach(b => b.classList.remove('border-advxnce-accent', 'bg-advxnce-accent/10'));
                this.classList.add('border-advxnce-accent', 'bg-advxnce-accent/10');
            });
        });
        
        // Initialize with default style
        updatePreviewStyle('dark', 'futuristic');
    }
}

function getCurrentPalette() {
    const activePalette = document.querySelector('.palette-toggle.border-advxnce-accent');
    return activePalette ? activePalette.getAttribute('data-palette') : 'dark';
}

function getCurrentFont() {
    const activeFont = document.querySelector('.font-toggle.border-advxnce-accent');
    return activeFont ? activeFont.getAttribute('data-font') : 'futuristic';
}

function updatePreviewStyle(palette, font) {
    const previewCard = document.getElementById('style-preview-card');
    const previewHeading = document.getElementById('preview-heading');
    const previewText = document.getElementById('preview-text');
    const previewButton = document.getElementById('preview-button');
    
    if (previewCard && STYLE_CONFIG_DATA) {
        const paletteConfig = STYLE_CONFIG_DATA.palettes[palette];
        const fontConfig = STYLE_CONFIG_DATA.fonts[font];
        
        // Update card styles
        previewCard.className = `p-8 rounded-xl shadow-lg transition-all duration-300 w-full max-w-sm ${paletteConfig.card}`;
        
        // Update heading styles
        previewHeading.className = `text-3xl mb-3 ${paletteConfig.heading} ${fontConfig.heading}`;
        
        // Update text styles
        previewText.className = `mb-6 text-lg ${paletteConfig.text} ${fontConfig.text}`;
        
        // Update button styles
        previewButton.className = `px-7 py-3 rounded-xl font-bold transition-all duration-300 text-base ${paletteConfig.buttonBg} ${paletteConfig.buttonText}`;
    }
}

// ===== PARALLAX EFFECTS =====
function initializeParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== LOADING STATES =====
function initializeLoadingStates() {
    // Add loading state to buttons
    const buttons = document.querySelectorAll('button, a[href^="#"]');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);
            }
        });
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            // Handle scroll-based animations
        }, 16);
    });
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for use in other modules
window.AdvxnceMedia = {
    initializeApp,
    debounce,
    throttle
}; 