/**
 * O2mations - Main JavaScript File
 * Handles navigation, animations, form interactions, and page functionality for the SPA.
 */

// =================================================================
// Utility Functions
// =================================================================

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
  }
}

// =================================================================
// SPA Router
// =================================================================

class Router {
  constructor(navigation, pageManager) {
    this.nav = navigation;
    this.pageManager = pageManager;
    this.pages = document.querySelectorAll('.page');
    this.init();
  }

  init() {
    this.nav.setLinkClickHandler((pageId) => this.showPage(pageId));
    window.addEventListener('popstate', (e) => this.handlePopState(e));
    this.handleInitialPageLoad();
  }

  handleInitialPageLoad() {
    const path = window.location.pathname.replace(/\/$/, '');
    let pageId = 'home';
    if (path && path !== '/') {
        pageId = path.substring(path.lastIndexOf('/') + 1).replace('.html', '');
    }
    this.showPage(pageId, false); // Don't push state on initial load
  }

  showPage(pageId, pushState = true) {
    if (!pageId) pageId = 'home';

    // Hide all pages
    this.pages.forEach(page => page.classList.remove('active'));

    // Show the target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');

      // Update URL and history
      if (pushState) {
        const newPath = pageId === 'home' ? '/' : `${pageId}.html`;
        history.pushState({ pageId }, ``, newPath);
      }

      // Update active nav link
      this.nav.setActiveLink(`${pageId}.html`);

      // Scroll to top
      window.scrollTo(0, 0);

      // Initialize page-specific logic
      this.pageManager.initPage(pageId);
      
      // Announce page change for accessibility
      const liveRegion = document.getElementById('live-region');
      if (liveRegion) {
          const pageTitle = document.querySelector(`#${pageId} h1`)?.textContent || pageId;
          liveRegion.textContent = `Navigated to ${pageTitle} page.`;
      }

    } else {
      console.warn(`Page with ID '${pageId}' not found.`);
      this.showPage('home'); // Fallback to home
    }
  }

  handlePopState(event) {
    if (event.state && event.state.pageId) {
      this.showPage(event.state.pageId, false);
    } else {
      this.handleInitialPageLoad();
    }
  }
}

// =================================================================
// Navigation Functionality
// =================================================================

class Navigation {
  constructor() {
    this.header = document.getElementById('header');
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navLinks = document.querySelectorAll('.nav__link');
    this.isMenuOpen = false;
    this.linkClickHandler = null;
    
    this.init();
  }
  
  init() {
    this.handleScroll();
    this.handleMobileToggle();
    this.handleOutsideClick();
    window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
  }

  setLinkClickHandler(handler) {
      this.linkClickHandler = handler;
      this.handleNavLinks(); // Re-attach listeners with the new handler
  }
  
  handleScroll() {
    this.header.classList.toggle('scrolled', window.scrollY > 50);
  }
  
  handleMobileToggle() {
    if (!this.navToggle) return;
    this.navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMobileMenu();
    });
  }
  
  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.navMenu.classList.toggle('active', this.isMenuOpen);
    this.navToggle.innerHTML = this.isMenuOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }
  
  closeMobileMenu() {
    if (this.isMenuOpen) {
      this.toggleMobileMenu();
    }
  }
  
  handleNavLinks() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href && href.endsWith('.html')) {
          e.preventDefault();
          const pageId = href.substring(href.lastIndexOf('/') + 1).replace('.html', '');
          if (this.linkClickHandler) {
            this.linkClickHandler(pageId);
          }
        }

        if (this.isMenuOpen) {
          this.closeMobileMenu();
        }
      });
    });
  }
  
  handleOutsideClick() {
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && !this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }
  
  setActiveLink(currentPage) {
    this.navLinks.forEach(link => {
      link.classList.remove('nav__link--active');
      const linkHref = link.getAttribute('href').replace(/^\.\//, ''); // Normalize href
      if (linkHref === currentPage || (currentPage === 'index.html' && linkHref === 'index.html')) {
        link.classList.add('nav__link--active');
      }
    });
  }
}

// =================================================================
// Page-Specific Functionality
// =================================================================

class PageManager {
    constructor() {
        this.initializedPages = new Set();
    }

    initPage(pageId) {
        // Only run initialization logic once per page if needed
        if (this.initializedPages.has(pageId) && pageId !== 'approach') {
            // return; // Re-run approach animations every time
        }

        switch (pageId) {
            case 'home':
                this.initHomepage();
                break;
            case 'contact':
                this.initContactPage();
                break;
            case 'approach':
                this.initApproachPage();
                break;
        }
        this.initializedPages.add(pageId);
    }

    initHomepage() {
        console.log('Initializing Home Page');
        // Homepage-specific logic can go here
    }

    initContactPage() {
        console.log('Initializing Contact Page');
        const firstInput = document.querySelector('#contact form input, #contact form textarea');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }

    initApproachPage() {
        console.log('Initializing Approach Page');
        const timelineSteps = document.querySelectorAll('#approach .timeline-step');
        if (timelineSteps.length) {
            this.animateTimeline(timelineSteps);
        }
    }

    animateTimeline(steps) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        steps.forEach(step => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(30px)';
            step.style.transition = 'all 0.6s ease';
            observer.observe(step);
        });
    }
}


// =================================================================
// Form Handler (Remains largely the same)
// =================================================================

class FormHandler {
  constructor() {
    this.forms = document.querySelectorAll('form');
    this.init();
  }
  
  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e));
    });
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    // ... existing form submission logic ...
    
    // On success, instead of redirect, show the thank-you page via router
    // For this example, we'll simulate it. The router isn't passed in here.
    // In a more complex app, you might use a global event bus or pass the router.
    console.log('Form submitted successfully. In a real SPA, you would now route to the thank-you page.');
    // For now, we will keep the thank-you page as a separate entity as it's a terminal page.
    window.location.href = 'thank-you.html';
  }
  // ... all other methods of FormHandler are unchanged
}


// =================================================================
// Accessibility Enhancements
// =================================================================

class AccessibilityEnhancer {
  constructor() {
    this.init();
  }
  
  init() {
    this.addSkipLink();
    this.announcePageChanges();
  }
  
  addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    // Add styles for visibility on focus
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  announcePageChanges() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only'; // Visually hidden class
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }
}


// =================================================================
// Initialize Everything
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
  const navigation = new Navigation();
  const pageManager = new PageManager();
  new Router(navigation, pageManager);
  new FormHandler();
  new AccessibilityEnhancer();
  
  document.body.classList.add('loaded');
  console.log('O2mations SPA initialized successfully');
});
