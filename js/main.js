/**
 * O2mations - Main JavaScript File
 * Handles navigation, animations, form interactions, and page functionality
 */

// =================================================================
// Utility Functions
// =================================================================

/**
 * Debounce function to limit the rate of function calls
 */
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

/**
 * Throttle function to limit the rate of function calls
 */
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

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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
    
    this.init();
  }
  
  init() {
    this.handleScroll();
    this.handleMobileToggle();
    this.handleNavLinks();
    this.handleOutsideClick();
    
    // Add scroll event listener
    window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
  }
  
  handleScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
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
    
    if (this.isMenuOpen) {
      this.navMenu.classList.add('active');
      this.navToggle.innerHTML = '<i class="fas fa-times"></i>';
      document.body.style.overflow = 'hidden';
    } else {
      this.navMenu.classList.remove('active');
      this.navToggle.innerHTML = '<i class="fas fa-bars"></i>';
      document.body.style.overflow = '';
    }
  }
  
  closeMobileMenu() {
    if (this.isMenuOpen) {
      this.toggleMobileMenu();
    }
  }
  
  handleNavLinks() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Close mobile menu if open
        if (this.isMenuOpen) {
          this.closeMobileMenu();
        }
        
        // Handle smooth scrolling for anchor links
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }
  
  handleOutsideClick() {
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && 
          !this.navMenu.contains(e.target) && 
          !this.navToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }
  
  setActiveLink(currentPage) {
    this.navLinks.forEach(link => {
      link.classList.remove('nav__link--active');
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('nav__link--active');
      }
    });
  }
}

// =================================================================
// Animation Controller
// =================================================================

class AnimationController {
  constructor() {
    this.observedElements = new Set();
    this.init();
  }
  
  init() {
    this.setupIntersectionObserver();
    this.animateOnLoad();
  }
  
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateElement(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, options);
    
    // Observe elements that should animate on scroll
    const elementsToAnimate = document.querySelectorAll([
      '.problem-card',
      '.solution-card',
      '.founder-profile',
      '.stat',
      '.section-header'
    ].join(','));
    
    elementsToAnimate.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      this.observer.observe(el);
    });
  }
  
  animateElement(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }
  
  animateOnLoad() {
    // Add entrance animations for hero content
    const heroTitle = document.querySelector('.hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle');
    const heroActions = document.querySelector('.hero__actions');
    
    if (heroTitle) {
      heroTitle.style.animation = 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both';
    }
    
    if (heroSubtitle) {
      heroSubtitle.style.animation = 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both';
    }
    
    if (heroActions) {
      heroActions.style.animation = 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both';
    }
  }
}

// =================================================================
// Form Handler
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
    
    // Add input validation
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearValidationError(input));
    });
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Validate form
    if (!this.validateForm(form)) {
      return;
    }
    
    // Show loading state
    this.setSubmitState(submitBtn, 'loading');
    
    try {
      // Simulate form submission (replace with actual endpoint)
      await this.submitForm(formData);
      
      // Show success message
      this.setSubmitState(submitBtn, 'success');
      
      // Redirect to thank you page or show success message
      setTimeout(() => {
        if (window.location.pathname.includes('contact')) {
          window.location.href = 'thank-you.html';
        }
      }, 1000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      this.setSubmitState(submitBtn, 'error');
      this.showErrorMessage(form, 'Something went wrong. Please try again.');
    }
  }
  
  async submitForm(formData) {
    // Convert FormData to object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    
    // Log form data (replace with actual API call)
    console.log('Form submitted:', data);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, always succeed
    // In production, replace with actual API call:
    // return fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  }
  
  validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'This field is required.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
      }
    }
    
    // Show/hide error
    if (!isValid) {
      this.showFieldError(field, errorMessage);
    } else {
      this.clearValidationError(field);
    }
    
    return isValid;
  }
  
  showFieldError(field, message) {
    // Remove existing error
    this.clearValidationError(field);
    
    // Add error class
    field.classList.add('error');
    
    // Create error message element
    const errorEl = document.createElement('span');
    errorEl.className = 'field-error';
    errorEl.textContent = message;
    errorEl.style.color = '#DC2626';
    errorEl.style.fontSize = '0.875rem';
    errorEl.style.marginTop = '0.25rem';
    errorEl.style.display = 'block';
    
    // Insert after field
    field.parentNode.insertBefore(errorEl, field.nextSibling);
  }
  
  clearValidationError(field) {
    field.classList.remove('error');
    const errorEl = field.parentNode.querySelector('.field-error');
    if (errorEl) {
      errorEl.remove();
    }
  }
  
  setSubmitState(button, state) {
    const originalText = button.dataset.originalText || button.textContent;
    button.dataset.originalText = originalText;
    
    button.disabled = state !== 'initial';
    
    switch (state) {
      case 'loading':
        button.textContent = 'Sending...';
        button.style.opacity = '0.7';
        break;
      case 'success':
        button.textContent = 'Sent Successfully!';
        button.style.backgroundColor = '#10B981';
        break;
      case 'error':
        button.textContent = 'Error - Try Again';
        button.style.backgroundColor = '#DC2626';
        setTimeout(() => this.setSubmitState(button, 'initial'), 3000);
        break;
      default:
        button.textContent = originalText;
        button.style.opacity = '';
        button.style.backgroundColor = '';
        button.disabled = false;
    }
  }
  
  showErrorMessage(form, message) {
    // Remove existing error message
    const existingError = form.querySelector('.form-error');
    if (existingError) {
      existingError.remove();
    }
    
    // Create error message
    const errorEl = document.createElement('div');
    errorEl.className = 'form-error';
    errorEl.textContent = message;
    errorEl.style.cssText = `
      color: #DC2626;
      background-color: #FEF2F2;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-top: 1rem;
      border: 1px solid #FECACA;
    `;
    
    form.appendChild(errorEl);
    
    // Remove after 5 seconds
    setTimeout(() => errorEl.remove(), 5000);
  }
}

// =================================================================
// Page-Specific Functionality
// =================================================================

class PageManager {
  constructor() {
    this.currentPage = this.getCurrentPage();
    this.init();
  }
  
  getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('solutions')) return 'solutions.html';
    if (path.includes('approach')) return 'approach.html';
    if (path.includes('about')) return 'about.html';
    if (path.includes('contact')) return 'contact.html';
    if (path.includes('thank-you')) return 'thank-you.html';
    return 'index.html';
  }
  
  init() {
    // Set active navigation link
    const nav = new Navigation();
    nav.setActiveLink(this.currentPage);
    
    // Initialize page-specific functionality
    this.initPageSpecific();
  }
  
  initPageSpecific() {
    switch (this.currentPage) {
      case 'index.html':
        this.initHomepage();
        break;
      case 'contact.html':
        this.initContactPage();
        break;
      case 'approach.html':
        this.initApproachPage();
        break;
    }
  }
  
  initHomepage() {
    // Add any homepage-specific functionality
    const ctaButtons = document.querySelectorAll('.btn[href="contact.html"]');
    ctaButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Track CTA clicks (replace with actual analytics)
        console.log('CTA clicked:', btn.textContent);
      });
    });
  }
  
  initContactPage() {
    // Auto-focus first form field
    const firstInput = document.querySelector('form input, form textarea');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }
  
  initApproachPage() {
    // Add timeline animation triggers
    const timelineSteps = document.querySelectorAll('.timeline-step');
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
        }
      });
    });
    
    steps.forEach(step => {
      step.style.opacity = '0';
      step.style.transform = 'translateY(30px)';
      step.style.transition = 'all 0.6s ease';
      observer.observe(step);
    });
  }
}

// =================================================================
// Performance Optimization
// =================================================================

class PerformanceOptimizer {
  constructor() {
    this.init();
  }
  
  init() {
    this.lazyLoadImages();
    this.preloadCriticalPages();
  }
  
  lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for older browsers
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }
  
  preloadCriticalPages() {
    // Preload key pages on hover
    const importantLinks = document.querySelectorAll('a[href="contact.html"], a[href="solutions.html"]');
    
    importantLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[href="${href}"]`)) {
          const preloadLink = document.createElement('link');
          preloadLink.rel = 'prefetch';
          preloadLink.href = href;
          document.head.appendChild(preloadLink);
        }
      }, { once: true });
    });
  }
}

// =================================================================
// Accessibility Enhancements
// =================================================================

class AccessibilityEnhancer {
  constructor() {
    this.init();
  }
  
  init() {
    this.handleKeyboardNavigation();
    this.announcePageChanges();
    this.improveFormAccessibility();
  }
  
  handleKeyboardNavigation() {
    // Escape key to close mobile menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const nav = document.querySelector('.nav__menu.active');
        if (nav) {
          const navigation = new Navigation();
          navigation.closeMobileMenu();
        }
      }
    });
    
    // Skip to main content link
    this.addSkipLink();
  }
  
  addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -100px;
      left: 0;
      background: var(--color-accent);
      color: white;
      padding: 8px 16px;
      text-decoration: none;
      z-index: 10000;
      transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '0';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-100px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
  
  announcePageChanges() {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
  }
  
  improveFormAccessibility() {
    // Associate labels with form controls
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      if (!input.id) {
        input.id = `field_${Math.random().toString(36).substr(2, 9)}`;
      }
      
      // Find associated label
      let label = document.querySelector(`label[for="${input.id}"]`);
      if (!label) {
        label = input.closest('label');
      }
      
      if (label && !label.getAttribute('for')) {
        label.setAttribute('for', input.id);
      }
    });
  }
}

// =================================================================
// Add CSS Animations
// =================================================================

// Add keyframe animations to document
const animationStyles = document.createElement('style');
animationStyles.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .field-error {
    animation: slideDown 0.3s ease-out;
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  input.error, textarea.error {
    border-color: #DC2626 !important;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
  }
`;
document.head.appendChild(animationStyles);

// =================================================================
// Initialize Everything
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  new Navigation();
  new AnimationController();
  new FormHandler();
  new PageManager();
  new PerformanceOptimizer();
  new AccessibilityEnhancer();
  
  // Add loading complete class
  document.body.classList.add('loaded');
  
  console.log('O2mations website initialized successfully');
});

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Page is hidden - pause animations
    document.body.classList.add('page-hidden');
  } else {
    // Page is visible - resume animations
    document.body.classList.remove('page-hidden');
  }
});

// Export for module use if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Navigation,
    FormHandler,
    AnimationController,
    PageManager
  };
}