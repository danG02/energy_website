// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupEventListeners();
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Smooth Scrolling
class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Intersection Observer for Animations
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);

        // Observe elements with data-aos attribute
        const animatedElements = document.querySelectorAll('[data-aos]');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Header Scroll Effect
class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        this.setupScrollListener();
    }

    setupScrollListener() {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class for styling
            if (scrollTop > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Button Interactions
class ButtonInteractions {
    constructor() {
        this.init();
    }

    init() {
        this.setupDownloadButtons();
        this.setupComingSoonButtons();
    }

    setupDownloadButtons() {
        // No notification needed; buttons now link directly to the App Store.
    }

    setupComingSoonButtons() {
        const comingSoonButtons = document.querySelectorAll('#comingSoonBtn, #finalComingSoonBtn');
        comingSoonButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.showNotification('Energeia will be available soon!', 'success');
            });
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Setup close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }
}

// Progress Bar Animation
class ProgressBarAnimation {
    constructor() {
        this.init();
    }

    init() {
        this.animateProgressBars();
    }

    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.style.width;
                    
                    // Reset width to 0 for animation
                    progressBar.style.width = '0%';
                    
                    // Animate to target width
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 100);
                    
                    observer.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => observer.observe(bar));
    }
}

// Parallax Effect for Hero Section
class ParallaxEffect {
    constructor() {
        this.init();
    }

    init() {
        this.setupParallax();
    }

    setupParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            
            if (hero) {
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Mobile Menu (for future enhancement)
class MobileMenu {
    constructor() {
        this.init();
    }

    init() {
        // This can be expanded for mobile menu functionality
        this.checkMobileView();
    }

    checkMobileView() {
        const isMobile = window.innerWidth <= 768;
        const nav = document.querySelector('.nav-menu');
        
        if (isMobile && nav) {
            nav.classList.add('mobile');
        }
    }
}

// Performance Optimization
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.setupLazyLoading();
        this.optimizeScrollEvents();
    }

    setupLazyLoading() {
        // Add lazy loading for images if needed in the future
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    optimizeScrollEvents() {
        let ticking = false;
        
        function updateOnScroll() {
            // Handle scroll-based updates here
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateOnScroll);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
}

// Accent Color Picker Logic
const ACCENT_COLORS = {
    blue: {
        primary: '#2979FF',
        gradient: 'linear-gradient(135deg, #2979FF 0%, #00C6FF 100%)'
    },
    green: {
        primary: '#32D74B',
        gradient: 'linear-gradient(135deg, #32D74B 0%, #A3C9C7 100%)'
    },
    orange: {
        primary: '#FFA726',
        gradient: 'linear-gradient(135deg, #FFA726 0%, #FF7043 100%)'
    },
    red: {
        primary: '#FF5252',
        gradient: 'linear-gradient(135deg, #FF5252 0%, #FF1744 100%)'
    },
    puruple: {
        primary: '#A259FF',
        gradient: 'linear-gradient(135deg, #A259FF 0%, #6A82FB 100%)'
    },
    pink: {
        primary: '#FF5CA7',
        gradient: 'linear-gradient(135deg, #FF5CA7 0%, #FFB6B9 100%)'
    }
};

function setAccentColor(colorKey) {
    const color = ACCENT_COLORS[colorKey] || ACCENT_COLORS.green;
    document.documentElement.style.setProperty('--accent-primary', color.primary);
    document.documentElement.style.setProperty('--accent-gradient', color.gradient);
    localStorage.setItem('accentColor', colorKey);
    // Highlight selected
    document.querySelectorAll('.accent-option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.color === colorKey);
    });
    
    // Update screenshot images based on selected color
    updateScreenshotImages(colorKey);
}

function updateScreenshotImages(colorKey) {
    // Define the screenshot images and their corresponding elements
    const screenshots = [
        { filename: 'home_screen-portrait.png', selector: 'img[alt="Energeia Home Screen"]' },
        { filename: 'daily_limit_hit-portrait.png', selector: 'img[alt="Energeia Daily Limit Hit"]' },
        { filename: 'history_tracking-portrait.png', selector: 'img[alt="Energeia History Tracking"]' },
        { filename: 'stats_overview-portrait.png', selector: 'img[alt="Energeia Stats Overview"]' },
        { filename: 'custimization-portrait.png', selector: 'img[alt="Energeia Customization"]' }
    ];
    
    // Update each screenshot image
    screenshots.forEach(screenshot => {
        const imgElement = document.querySelector(screenshot.selector);
        if (imgElement) {
            const newSrc = `assests/portrait/${colorKey}/${screenshot.filename}`;
            imgElement.src = newSrc;
        }
    });
}

function getAccentColor() {
    return localStorage.getItem('accentColor') || 'green';
}

function openAccentModal() {
    const modal = document.getElementById('accentModal');
    modal.style.display = 'flex';
    modal.focus();
    // Highlight current
    setAccentColor(getAccentColor());
}

function closeAccentModal() {
    const modal = document.getElementById('accentModal');
    modal.style.display = 'none';
}

// Initialize all classes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    new ThemeManager();
    new SmoothScroller();
    new AnimationObserver();
    new HeaderScrollEffect();
    new ButtonInteractions();
    new ProgressBarAnimation();
    new ParallaxEffect();
    new MobileMenu();
    new PerformanceOptimizer();

    // Add some interactive elements
    addInteractiveElements();

    // Apply saved accent color
    setAccentColor(getAccentColor());

    // Accent toggle button
    const accentToggle = document.getElementById('accentToggle');
    if (accentToggle) {
        accentToggle.addEventListener('click', openAccentModal);
    }
    // Modal close button
    const accentModalClose = document.getElementById('accentModalClose');
    if (accentModalClose) {
        accentModalClose.addEventListener('click', closeAccentModal);
    }
    // Modal color options
    document.querySelectorAll('.accent-option').forEach(btn => {
        btn.addEventListener('click', () => {
            setAccentColor(btn.dataset.color);
            closeAccentModal();
        });
    });
    // Close modal on Escape
    document.getElementById('accentModal').addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAccentModal();
    });
    // Close modal on outside click
    document.getElementById('accentModal').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeAccentModal();
    });
});

// Additional interactive elements
function addInteractiveElements() {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Handle window resize
window.addEventListener('resize', () => {
    // Reinitialize mobile menu on resize
    const mobileMenu = new MobileMenu();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, pause any animations if needed
    } else {
        // Page is visible again, resume animations
    }
});

// Export classes for potential future use
window.EnergeiaApp = {
    ThemeManager,
    SmoothScroller,
    AnimationObserver,
    HeaderScrollEffect,
    ButtonInteractions,
    ProgressBarAnimation,
    ParallaxEffect,
    MobileMenu,
    PerformanceOptimizer
}; 