import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/thank-you.css';

const ThankYou = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Thank You Hero Section */}
            <section className="thank-you-hero">
                <div className="container">
                    <div className="thank-you-content">
                        <div className="success-animation">
                            <div className="success-icon">
                                <i className="fas fa-check"></i>
                            </div>
                            <div className="success-ripples">
                                <div className="ripple ripple-1"></div>
                                <div className="ripple ripple-2"></div>
                                <div className="ripple ripple-3"></div>
                            </div>
                        </div>
                        
                        <h1 className="thank-you-title">
                            {t('thankyou_title')}
                        </h1>
                        
                        <p className="thank-you-subtitle" dangerouslySetInnerHTML={{ __html: t('thankyou_subtitle') }} />
                        
                        <div className="next-steps">
                            <h2 className="next-steps__title">{t('thankyou_next_steps_title')}</h2>
                            <div className="steps-timeline">
                                <div className="step-item">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h3>{t('thankyou_step1_title')}</h3>
                                        <p>{t('thankyou_step1_description')}</p>
                                        <span className="step-time">{t('thankyou_step1_time')}</span>
                                    </div>
                                </div>
                                
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h3>{t('thankyou_step2_title')}</h3>
                                        <p>{t('thankyou_step2_description')}</p>
                                        <span className="step-time">{t('thankyou_step2_time')}</span>
                                    </div>
                                </div>
                                
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h3>{t('thankyou_step3_title')}</h3>
                                        <p>{t('thankyou_step3_description')}</p>
                                        <span className="step-time">{t('thankyou_step3_time')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="session-details">
                            <h2 className="session-details__title">{t('thankyou_session_details_title')}</h2>
                            <div className="details-grid">
                                <div className="detail-card">
                                    <i className="fas fa-search"></i>
                                    <h3>{t('thankyou_detail1_title')}</h3>
                                    <p>{t('thankyou_detail1_description')}</p>
                                </div>
                                
                                <div className="detail-card">
                                    <i className="fas fa-route"></i>
                                    <h3>{t('thankyou_detail2_title')}</h3>
                                    <p>{t('thankyou_detail2_description')}</p>
                                </div>
                                
                                <div className="detail-card">
                                    <i className="fas fa-lightbulb"></i>
                                    <h3>{t('thankyou_detail3_title')}</h3>
                                    <p>{t('thankyou_detail3_description')}</p>
                                </div>
                                
                                <div className="detail-card">
                                    <i className="fas fa-chart-line"></i>
                                    <h3>{t('thankyou_detail4_title')}</h3>
                                    <p>{t('thankyou_detail4_description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preparation Section */}
            <section className="preparation-section">
                <div className="container">
                    <div className="preparation-content">
                        <h2 className="preparation-title">{t('preparation_title')}</h2>
                        <p className="preparation-subtitle">
                            {t('preparation_subtitle')}
                        </p>
                        
                        <div className="preparation-grid">
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-clipboard-list"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>{t('prep_item1_title')}</h3>
                                    <p>{t('prep_item1_description')}</p>
                                </div>
                            </div>
                            
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-puzzle-piece"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>{t('prep_item2_title')}</h3>
                                    <p>{t('prep_item2_description')}</p>
                                </div>
                            </div>
                            
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-target"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>{t('prep_item3_title')}</h3>
                                    <p>{t('prep_item3_description')}</p>
                                </div>
                            </div>
                            
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-stopwatch"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>{t('prep_item4_title')}</h3>
                                    <p>{t('prep_item4_description')}</p>
                                </div
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meanwhile Section */}
            <section className="meanwhile-section">
                <div className="container">
                    <div className="meanwhile-content">
                        <h2 className="meanwhile-title">{t('meanwhile_title')}</h2>
                        <p className="meanwhile-subtitle">
                            {t('meanwhile_subtitle')}
                        </p>
                        
                        <div className="resource-cards">
                            <div className="resource-card">
                                <div className="resource-header">
                                    <i className="fas fa-book-open"></i>
                                    <h3>{t('resource1_title')}</h3>
                                </div>
                                <p>{t('resource1_description')}</p>
                                <Link to="/solutions" className="resource-link">
                                    {t('resource1_link')} <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                            
                            <div className="resource-card">
                                <div className="resource-header">
                                    <i className="fas fa-map-signs"></i>
                                    <h3>{t('resource2_title')}</h3>
                                </div>
                                <p>{t('resource2_description')}</p>
                                <Link to="/approach" className="resource-link">
                                    {t('resource2_link')} <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                            
                            <div className="resource-card">
                                <div className="resource-header">
                                    <i className="fas fa-users"></i>
                                    <h3>{t('resource3_title')}</h3>
                                </div>
                                <p>{t('resource3_description')}</p>
                                <Link to="/about" className="resource-link">
                                    {t('resource3_link')} <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-content">
                        <div className="contact-info-text">
                            <h2>{t('contact_info_title')}</h2>
                            <p>{t('contact_info_description')}</p>
                        </div>
                        
                        <div className="contact-methods">
                            <div className="contact-method">
                                <i className="fas fa-envelope"></i>
                                <div className="method-content">
                                    <h3>{t('email_us_title')}</h3>
                                    <a href="mailto:strategy@o2mations.com">strategy@o2mations.com</a>
                                    <p>{t('email_us_response_time')}</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <i className="fas fa-calendar-alt"></i>
                                <div className="method-content">
                                    <h3>{t('reschedule_title')}</h3>
                                    <p>{t('reschedule_description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThankYou;