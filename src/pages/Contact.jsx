import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/contact.css';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        workEmail: '',
        phoneNumber: '',
        companySize: '',
        industry: '',
        businessGoal: '',
        currentChallenges: '',
        timeframe: '',
        newsletter: false,
    });
    const [errors, setErrors] = useState({});
    const [submitState, setSubmitState] = useState('initial'); // initial, loading, success, error
    const firstInputRef = useRef(null);

    // Auto-focus the first input field on mount
    useEffect(() => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
        if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required.';
        if (!formData.workEmail.trim()) {
            newErrors.workEmail = 'Work Email is required.';
        } else if (!emailRegex.test(formData.workEmail)) {
            newErrors.workEmail = 'Please enter a valid email address.';
        }
        if (!formData.businessGoal.trim()) newErrors.businessGoal = 'Your primary business goal is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        // Clear error on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            return;
        }

        setSubmitState('loading');

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // In a real app, you would fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
            console.log('Form Submitted:', formData);

            setSubmitState('success');
            setTimeout(() => {
                navigate('/thank-you');
            }, 500);

        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitState('error');
            setTimeout(() => setSubmitState('initial'), 3000);
        }
    };

    const getButtonText = () => {
        switch (submitState) {
            case 'loading':
                return 'Sending...';
            case 'success':
                return 'Sent Successfully!';
            case 'error':
                return 'Error - Try Again';
            default:
                return 'Request My Strategy Session';
        }
    };

    const getButtonClass = () => {
        let baseClass = "form-submit btn btn--primary btn--large";
        if (submitState === 'success') return baseClass + ' btn--success';
        if (submitState === 'error') return baseClass + ' btn--error';
        return baseClass;
    };

    const getButtonIcon = () => {
        if (submitState === 'success') return <i className="fas fa-check submit-icon"></i>;
        if (submitState === 'error') return <i className="fas fa-exclamation-triangle submit-icon"></i>;
        return <i className="fas fa-arrow-right submit-icon"></i>;
    };

    return (
        <>
            {/* Contact Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero__content">
                        <h1 className="contact-hero__title">
                            Ready to Build a More 
                            <span className="contact-hero__title-accent">Efficient Future?</span>
                        </h1>
                        <p className="contact-hero__subtitle">
                            Book a complimentary strategy session with our automation experts. We'll analyze your current operations and identify opportunities for immediate improvements and long-term transformation.
                        </p>
                        
                        <div className="contact-hero__benefits">
                            <div className="benefit-item">
                                <i className="fas fa-clock"></i>
                                <span>60-minute deep-dive session</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-chart-line"></i>
                                <span>Custom automation roadmap</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-gift"></i>
                                <span>Completely complimentary</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-form-wrapper">
                            <div className="form-header">
                                <h2 className="form-title">Request Your Strategy Session</h2>
                                <p className="form-description">
                                    Tell us about your business goals, and we'll show you how automation can help you achieve them faster and more efficiently.
                                </p>
                            </div>
                            
                            <form className="contact-form" id="strategy-form" onSubmit={handleSubmit} noValidate>
                                {submitState === 'error' && (
                                    <div className="form-error-message">
                                        <p>Something went wrong. Please check your details and try again.</p>
                                    </div>
                                )}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="fullName" className="form-label">Full Name *</label>
                                        <input 
                                            type="text" 
                                            id="fullName" 
                                            name="fullName" 
                                            className={`form-input ${errors.fullName ? 'error' : ''}`} 
                                            required 
                                            placeholder="Enter your full name"
                                            autoComplete="name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            ref={firstInputRef}
                                        />
                                        {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="companyName" className="form-label">Company Name *</label>
                                        <input 
                                            type="text" 
                                            id="companyName" 
                                            name="companyName" 
                                            className={`form-input ${errors.companyName ? 'error' : ''}`} 
                                            required 
                                            placeholder="Enter your company name"
                                            autoComplete="organization"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                        />
                                        {errors.companyName && <span className="field-error">{errors.companyName}</span>}
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="workEmail" className="form-label">Work Email *</label>
                                        <input 
                                            type="email" 
                                            id="workEmail" 
                                            name="workEmail" 
                                            className={`form-input ${errors.workEmail ? 'error' : ''}`} 
                                            required 
                                            placeholder="you@yourcompany.com"
                                            autoComplete="email"
                                            value={formData.workEmail}
                                            onChange={handleChange}
                                        />
                                        {errors.workEmail && <span className="field-error">{errors.workEmail}</span>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            id="phoneNumber" 
                                            name="phoneNumber" 
                                            className="form-input" 
                                            placeholder="+1 (555) 123-4567"
                                            autoComplete="tel"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="companySize" className="form-label">Company Size</label>
                                        <select id="companySize" name="companySize" className="form-select" value={formData.companySize} onChange={handleChange}>
                                            <option value="">Select company size</option>
                                            <option value="1-10">1-10 employees</option>
                                            <option value="11-50">11-50 employees</option>
                                            <option value="51-200">51-200 employees</option>
                                            <option value="201-500">201-500 employees</option>
                                            <option value="500+">500+ employees</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">Industry</label>
                                        <select id="industry" name="industry" className="form-select" value={formData.industry} onChange={handleChange}>
                                            <option value="">Select your industry</option>
                                            <option value="technology">Technology</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="finance">Finance & Banking</option>
                                            <option value="retail">Retail & E-commerce</option>
                                            <option value="manufacturing">Manufacturing</option>
                                            <option value="professional-services">Professional Services</option>
                                            <option value="real-estate">Real Estate</option>
                                            <option value="education">Education</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="businessGoal" className="form-label">What is your primary business goal? *</label>
                                    <textarea 
                                        id="businessGoal" 
                                        name="businessGoal" 
                                        className={`form-textarea ${errors.businessGoal ? 'error' : ''}`} 
                                        rows="4" 
                                        required 
                                        placeholder="Describe your main business objective and current challenges. For example: 'We want to scale our customer onboarding process without hiring more staff' or 'Our sales team spends too much time on administrative tasks instead of selling.'"
                                        value={formData.businessGoal}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.businessGoal && <span className="field-error">{errors.businessGoal}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="currentChallenges" className="form-label">Current Process Challenges</label>
                                    <textarea 
                                        id="currentChallenges" 
                                        name="currentChallenges" 
                                        className="form-textarea" 
                                        rows="3" 
                                        placeholder="Optional: Tell us about specific processes that are slowing you down or causing bottlenecks."
                                        value={formData.currentChallenges}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="timeframe" className="form-label">Implementation Timeframe</label>
                                    <select id="timeframe" name="timeframe" className="form-select" value={formData.timeframe} onChange={handleChange}>
                                        <option value="">When would you like to start?</option>
                                        <option value="immediately">Immediately (within 2 weeks)</option>
                                        <option value="1-month">Within 1 month</option>
                                        <option value="1-3-months">1-3 months</option>
                                        <option value="3-6-months">3-6 months</option>
                                        <option value="exploring">Just exploring options</option>
                                    </select>
                                </div>
                                
                                <div className="form-checkbox-group">
                                    <label className="checkbox-label">
                                        <input 
                                            type="checkbox" 
                                            name="newsletter" 
                                            className="checkbox-input"
                                            checked={formData.newsletter}
                                            onChange={handleChange}
                                        />
                                        <span className="checkbox-custom"></span>
                                        <span className="checkbox-text">I'd like to receive occasional insights about business automation trends and best practices</span>
                                    </label>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className={getButtonClass()}
                                    disabled={submitState === 'loading' || submitState === 'success'}
                                >
                                    <span className="submit-text">{getButtonText()}</span>
                                    {getButtonIcon()}
                                </button>
                                
                                <p className="form-privacy">
                                    By submitting this form, you agree to our privacy policy. We'll never share your information and you can unsubscribe at any time.
                                </p>
                            </form>
                        </div>
                        
                        <div className="contact-info">
                            <div className="contact-card">
                                <h3 className="contact-card__title">What to Expect</h3>
                                <div className="expectation-item">
                                    <div className="expectation-step">1</div>
                                    <div className="expectation-content">
                                        <h4>Initial Assessment</h4>
                                        <p>We'll analyze your current processes and identify quick wins and long-term opportunities.</p>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <div className="expectation-step">2</div>
                                    <div className="expectation-content">
                                        <h4>Custom Recommendations</h4>
                                        <p>Receive a tailored automation roadmap with prioritized implementation steps.</p>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <div className="expectation-step">3</div>
                                    <div className="expectation-content">
                                        <h4>Next Steps Plan</h4>
                                        <p>Walk away with clear action items and a timeline for transformation.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-card">
                                <h3 className="contact-card__title">Alternative Contact</h3>
                                <div className="direct-contact">
                                    <div className="contact-method">
                                        <i className="fas fa-envelope"></i>
                                        <div>
                                            <h4>Email Us Directly</h4>
                                            <a href="mailto:strategy@o2mations.com" className="contact-link">strategy@o2mations.com</a>
                                            <p>For immediate questions or to schedule directly</p>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-method">
                                        <i className="fas fa-clock"></i>
                                        <div>
                                            <h4>Response Time</h4>
                                            <p>We typically respond within <strong>4 hours</strong> during business days</p>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-method">
                                        <i className="fas fa-shield-alt"></i>
                                        <div>
                                            <h4>Privacy Guaranteed</h4>
                                            <p>Your information is completely confidential and never shared with third parties</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-card testimonial-card">
                                <div className="testimonial-content">
                                    <blockquote>
                                        "The strategy session with O2mations was incredibly valuable. They identified automation opportunities we hadn't even considered and provided a clear roadmap for implementation."
                                    </blockquote>
                                    <cite>
                                        <strong>Sarah Chen</strong><br/>
                                        Operations Director, TechFlow Solutions
                                    </cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="contact-faq">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3 className="faq-question">How long is the strategy session?</h3>
                            <p className="faq-answer">Our strategy sessions typically last 60 minutes. This gives us enough time to understand your business, analyze your processes, and provide meaningful recommendations.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">Is there really no cost for the session?</h3>
                            <p className="faq-answer">Absolutely no cost. We believe in demonstrating value upfront. You'll receive actionable insights regardless of whether you decide to work with us.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">What if I'm not ready to implement right away?</h3>
                            <p className="faq-answer">That's perfectly fine. We'll provide you with a roadmap you can implement when you're ready, and there's no pressure to move forward immediately.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">Do you work with small businesses?</h3>
                            <p className="faq-answer">Yes, we work with businesses of all sizes. Our solutions are scalable and can be tailored to fit your current needs and budget.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">Can the session be conducted remotely?</h3>
                            <p className="faq-answer">Absolutely. Most of our strategy sessions are conducted via video conference for convenience and efficiency.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">What should I prepare for the session?</h3>
                            <p className="faq-answer">Just come with an open mind and be ready to discuss your current processes and challenges. We'll guide you through everything else.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;