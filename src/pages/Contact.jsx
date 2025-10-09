import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/contact.css';

const Contact = () => {
    const { t } = useTranslation();
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
                return t('sending');
            case 'success':
                return t('sent_successfully');
            case 'error':
                return t('error_try_again');
            default:
                return t('request_strategy_session');
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
                            {t('contact_hero_title')}
                        </h1>
                        <p className="contact-hero__subtitle">
                            {t('contact_hero_subtitle')}
                        </p>
                        
                        <div className="contact-hero__benefits">
                            <div className="benefit-item">
                                <i className="fas fa-clock"></i>
                                <span>{t('contact_hero_benefit1')}</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-chart-line"></i>
                                <span>{t('contact_hero_benefit2')}</span>
                            </div>
                            <div className="benefit-item">
                                <i className="fas fa-gift"></i>
                                <span>{t('contact_hero_benefit3')}</span>
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
                                <h2 className="form-title">{t('form_title')}</h2>
                                <p className="form-description">
                                    {t('form_description')}
                                </p>
                            </div>
                            
                            <form className="contact-form" id="strategy-form" onSubmit={handleSubmit} noValidate>
                                {submitState === 'error' && (
                                    <div className="form-error-message">
                                        <p>{t('form_error_message')}</p>
                                    </div>
                                )}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="fullName" className="form-label">{t('full_name_label')}</label>
                                        <input 
                                            type="text" 
                                            id="fullName" 
                                            name="fullName" 
                                            className={`form-input ${errors.fullName ? 'error' : ''}`} 
                                            required 
                                            placeholder={t('full_name_placeholder')}
                                            autoComplete="name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            ref={firstInputRef}
                                        />
                                        {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="companyName" className="form-label">{t('company_name_label')}</label>
                                        <input 
                                            type="text" 
                                            id="companyName" 
                                            name="companyName" 
                                            className={`form-input ${errors.companyName ? 'error' : ''}`} 
                                            required 
                                            placeholder={t('company_name_placeholder')}
                                            autoComplete="organization"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                        />
                                        {errors.companyName && <span className="field-error">{errors.companyName}</span>}
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="workEmail" className="form-label">{t('work_email_label')}</label>
                                        <input 
                                            type="email" 
                                            id="workEmail" 
                                            name="workEmail" 
                                            className={`form-input ${errors.workEmail ? 'error' : ''}`} 
                                            required 
                                            placeholder={t('work_email_placeholder')}
                                            autoComplete="email"
                                            value={formData.workEmail}
                                            onChange={handleChange}
                                        />
                                        {errors.workEmail && <span className="field-error">{errors.workEmail}</span>}
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber" className="form-label">{t('phone_number_label')}</label>
                                        <input 
                                            type="tel" 
                                            id="phoneNumber" 
                                            name="phoneNumber" 
                                            className="form-input" 
                                            placeholder={t('phone_number_placeholder')}
                                            autoComplete="tel"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="companySize" className="form-label">{t('company_size_label')}</label>
                                        <select id="companySize" name="companySize" className="form-select" value={formData.companySize} onChange={handleChange}>
                                            <option value="">{t('company_size_placeholder')}</option>
                                            <option value="1-10">{t('company_size_option1')}</option>
                                            <option value="11-50">{t('company_size_option2')}</option>
                                            <option value="51-200">{t('company_size_option3')}</option>
                                            <option value="201-500">{t('company_size_option4')}</option>
                                            <option value="500+">{t('company_size_option5')}</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="industry" className="form-label">{t('industry_label')}</label>
                                        <select id="industry" name="industry" className="form-select" value={formData.industry} onChange={handleChange}>
                                            <option value="">{t('industry_placeholder')}</option>
                                            <option value="technology">{t('industry_option1')}</option>
                                            <option value="healthcare">{t('industry_option2')}</option>
                                            <option value="finance">{t('industry_option3')}</option>
                                            <option value="retail">{t('industry_option4')}</option>
                                            <option value="manufacturing">{t('industry_option5')}</option>
                                            <option value="professional-services">{t('industry_option6')}</option>
                                            <option value="real-estate">{t('industry_option7')}</option>
                                            <option value="education">{t('industry_option8')}</option>
                                            <option value="other">{t('industry_option9')}</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="businessGoal" className="form-label">{t('business_goal_label')}</label>
                                    <textarea 
                                        id="businessGoal" 
                                        name="businessGoal" 
                                        className={`form-textarea ${errors.businessGoal ? 'error' : ''}`} 
                                        rows="4" 
                                        required 
                                        placeholder={t('business_goal_placeholder')}
                                        value={formData.businessGoal}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.businessGoal && <span className="field-error">{errors.businessGoal}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="currentChallenges" className="form-label">{t('current_challenges_label')}</label>
                                    <textarea 
                                        id="currentChallenges" 
                                        name="currentChallenges" 
                                        className="form-textarea" 
                                        rows="3" 
                                        placeholder={t('current_challenges_placeholder')}
                                        value={formData.currentChallenges}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="timeframe" className="form-label">{t('timeframe_label')}</label>
                                    <select id="timeframe" name="timeframe" className="form-select" value={formData.timeframe} onChange={handleChange}>
                                        <option value="">{t('timeframe_placeholder')}</option>
                                        <option value="immediately">{t('timeframe_option1')}</option>
                                        <option value="1-month">{t('timeframe_option2')}</option>
                                        <option value="1-3-months">{t('timeframe_option3')}</option>
                                        <option value="3-6-months">{t('timeframe_option4')}</option>
                                        <option value="exploring">{t('timeframe_option5')}</option>
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
                                        <span className="checkbox-text">{t('newsletter_label')}</span>
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
                                    {t('form_privacy')}
                                </p>
                            </form>
                        </div>
                        
                        <div className="contact-info">
                            <div className="contact-card">
                                <h3 className="contact-card__title">{t('what_to_expect_title')}</h3>
                                <div className="expectation-item">
                                    <div className="expectation-step">1</div>
                                    <div className="expectation-content">
                                        <h4>{t('expectation1_title')}</h4>
                                        <p>{t('expectation1_description')}</p>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <div className="expectation-step">2</div>
                                    <div className="expectation-content">
                                        <h4>{t('expectation2_title')}</h4>
                                        <p>{t('expectation2_description')}</p>
                                    </div>
                                </div>
                                <div className="expectation-item">
                                    <div className="expectation-step">3</div>
                                    <div className="expectation-content">
                                        <h4>{t('expectation3_title')}</h4>
                                        <p>{t('expectation3_description')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="contact-card">
                                <h3 className="contact-card__title">{t('alternative_contact_title')}</h3>
                                <div className="direct-contact">
                                    <div className="contact-method">
                                        <i className="fas fa-envelope"></i>
                                        <div>
                                            <h4>{t('email_us_directly')}</h4>
                                            <a href="mailto:strategy@o2mations.com" className="contact-link">strategy@o2mations.com</a>
                                            <p>{t('email_us_description')}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="contact-method">
                                        <i className="fas fa-clock"></i>
                                        <div>
                                            <h4>{t('response_time_title')}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: t('response_time_description') }} />
                                        </div>
                                    </div>
                                    
                                    <div className="contact-method">
                                        <i className="fas fa-shield-alt"></i>
                                        <div>
                                            <h4>{t('privacy_guaranteed_title')}</h4>
                                            <p>{t('privacy_guaranteed_description')}</p>
                                        </div>
                                    </div>
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
                        <h2 className="section-title">{t('faq_title')}</h2>
                    </div>
                    
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3 className="faq-question">{t('faq1_question')}</h3>
                            <p className="faq-answer">{t('faq1_answer')}</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">{t('faq2_question')}</h3>
                            <p className="faq-answer">{t('faq2_answer')}</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">{t('faq3_question')}</h3>
                            <p className="faq-answer">{t('faq3_answer')}</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">{t('faq4_question')}</h3>
                            <p className="faq-answer">{t('faq4_answer')}</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">{t('faq5_question')}</h3>
                            <p className="faq-answer">{t('faq5_answer')}</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3 className="faq-question">{t('faq6_question')}</h3>
                            <p className="faq-answer">{t('faq6_answer')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;