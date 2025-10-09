import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/approach.css';

const Approach = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Approach Hero Section */}
            <section className="approach-hero">
                <div className="container">
                    <div className="approach-hero__content">
                        <h1 className="approach-hero__title">
                            {t('approach_hero_title')}
                        </h1>
                        <p className="approach-hero__subtitle">
                            {t('approach_hero_subtitle')}
                        </p>
                        <div className="approach-hero__highlight">
                            <i className="fas fa-shield-alt"></i>
                            <span>{t('approach_hero_highlight')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Overview Section */}
            <section className="process-overview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('process_overview_title')}</h2>
                        <p className="section-subtitle">
                            {t('process_overview_subtitle')}
                        </p>
                    </div>
                    
                    <div className="process-timeline">
                        <div className="timeline-step" data-step="1">
                            <div className="step-visual">
                                <div className="step-number">1</div>
                                <div className="step-icon">
                                    <i className="fas fa-search-plus"></i>
                                </div>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{t('timeline_step1_title')}</h3>
                                <p className="step-duration">{t('timeline_step1_duration')}</p>
                                <p className="step-description">
                                    {t('timeline_step1_description')}
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline-connector"></div>
                        
                        <div className="timeline-step" data-step="2">
                            <div className="step-visual">
                                <div className="step-number">2</div>
                                <div className="step-icon">
                                    <i className="fas fa-drafting-compass"></i>
                                </div>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{t('timeline_step2_title')}</h3>
                                <p className="step-duration">{t('timeline_step2_duration')}</p>
                                <p className="step-description">
                                    {t('timeline_step2_description')}
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline-connector"></div>
                        
                        <div className="timeline-step" data-step="3">
                            <div className="step-visual">
                                <div className="step-number">3</div>
                                <div className="step-icon">
                                    <i className="fas fa-code"></i>
                                </div>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{t('timeline_step3_title')}</h3>
                                <p className="step-duration">{t('timeline_step3_duration')}</p>
                                <p className="step-description">
                                    {t('timeline_step3_description')}
                                </p>
                            </div>
                        </div>
                        
                        <div className="timeline-connector"></div>
                        
                        <div className="timeline-step" data-step="4">
                            <div className="step-visual">
                                <div className="step-number">4</div>
                                <div className="step-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{t('timeline_step4_title')}</h3>
                                <p className="step-duration">{t('timeline_step4_duration')}</p>
                                <p className="step-description">
                                    {t('timeline_step4_description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 1: Discovery */}
            <section className="step-detail" id="step-discovery">
                <div className="container">
                    <div className="step-detail__content">
                        <div className="step-detail__header">
                            <div className="step-badge">
                                <span className="badge-number">Step 1</span>
                                <span className="badge-text">{t('timeline_step1_title')}</span>
                            </div>
                            <h2 className="step-detail__title">{t('step1_title')}</h2>
                            <p className="step-detail__subtitle">
                                {t('step1_subtitle')}
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">{t('what_we_do')}</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-users"></i>
                                        <h4>{t('activity1_title')}</h4>
                                        <p>{t('activity1_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-sitemap"></i>
                                        <h4>{t('activity2_title')}</h4>
                                        <p>{t('activity2_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-tools"></i>
                                        <h4>{t('activity3_title')}</h4>
                                        <p>{t('activity3_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-bullseye"></i>
                                        <h4>{t('activity4_title')}</h4>
                                        <p>{t('activity4_description')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">{t('your_deliverables')}</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-file-alt"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable1') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-exclamation-triangle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable2') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-lightbulb"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable3') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-compass"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable4') }} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2: Strategic Design */}
            <section className="step-detail step-detail--alternate" id="step-design">
                <div className="container">
                    <div className="step-detail__content">
                        <div className="step-detail__header">
                            <div className="step-badge">
                                <span className="badge-number">Step 2</span>
                                <span className="badge-text">{t('timeline_step2_title')}</span>
                            </div>
                            <h2 className="step-detail__title">{t('step2_title')}</h2>
                            <p className="step-detail__subtitle">
                                {t('step2_subtitle')}
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">{t('what_we_do')}</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-route"></i>
                                        <h4>{t('activity5_title')}</h4>
                                        <p>{t('activity5_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-calendar-alt"></i>
                                        <h4>{t('activity6_title')}</h4>
                                        <p>{t('activity6_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-shield-alt"></i>
                                        <h4>{t('activity7_title')}</h4>
                                        <p>{t('activity7_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-chart-pie"></i>
                                        <h4>{t('activity8_title')}</h4>
                                        <p>{t('activity8_description')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">{t('your_deliverables')}</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-project-diagram"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable5') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-road"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable6') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-calculator"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable7') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-clipboard-check"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable8') }} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 3: Implementation */}
            <section className="step-detail" id="step-implementation">
                <div className="container">
                    <div className="step-detail__content">
                        <div className="step-detail__header">
                            <div className="step-badge">
                                <span className="badge-number">Step 3</span>
                                <span className="badge-text">{t('timeline_step3_title')}</span>
                            </div>
                            <h2 className="step-detail__title">{t('step3_title')}</h2>
                            <p className="step-detail__subtitle">
                                {t('step3_subtitle')}
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">{t('what_we_do')}</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-cogs"></i>
                                        <h4>{t('activity9_title')}</h4>
                                        <p>{t('activity9_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-vial"></i>
                                        <h4>{t('activity10_title')}</h4>
                                        <p>{t('activity10_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-graduation-cap"></i>
                                        <h4>{t('activity11_title')}</h4>
                                        <p>{t('activity11_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-rocket"></i>
                                        <h4>{t('activity12_title')}</h4>
                                        <p>{t('activity12_description')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">{t('your_deliverables')}</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-play-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable9') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-book"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable10') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-user-graduate"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable11') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-life-ring"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable12') }} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 4: Partnership */}
            <section className="step-detail step-detail--alternate" id="step-partnership">
                <div className="container">
                    <div className="step-detail__content">
                        <div className="step-detail__header">
                            <div className="step-badge">
                                <span className="badge-number">Step 4</span>
                                <span className="badge-text">{t('timeline_step4_title')}</span>
                            </div>
                            <h2 className="step-detail__title">{t('step4_title')}</h2>
                            <p className="step-detail__subtitle">
                                {t('step4_subtitle')}
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">{t('what_we_do')}</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-chart-line"></i>
                                        <h4>{t('activity13_title')}</h4>
                                        <p>{t('activity13_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-sync-alt"></i>
                                        <h4>{t('activity14_title')}</h4>
                                        <p>{t('activity14_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-expand-arrows-alt"></i>
                                        <h4>{t('activity15_title')}</h4>
                                        <p>{t('activity15_description')}</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-headset"></i>
                                        <h4>{t('activity16_title')}</h4>
                                        <p>{t('activity16_description')}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">{t('your_deliverables')}</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-tachometer-alt"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable13') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-wrench"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable14') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-map"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable15') }} />
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-handshake"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('deliverable16') }} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="success-stories">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('success_stories_title')}</h2>
                        <p className="section-subtitle">
                            {t('success_stories_subtitle')}
                        </p>
                    </div>
                    
                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-metrics">
                                <div className="metric">
                                    <span className="metric-number">75%</span>
                                    <span className="metric-label">{t('story1_metric1_label')}</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">90%</span>
                                    <span className="metric-label">{t('story1_metric2_label')}</span>
                                </div>
                            </div>
                            <div className="story-content">
                                <h3 className="story-title">{t('story1_title')}</h3>
                                <p className="story-description">
                                    {t('story1_description')}
                                </p>
                                <div className="story-quote">
                                    {t('story1_quote')}
                                </div>
                            </div>
                        </div>
                        
                        <div className="story-card">
                            <div className="story-metrics">
                                <div className="metric">
                                    <span className="metric-number">3x</span>
                                    <span className="metric-label">{t('story2_metric1_label')}</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">60%</span>
                                    <span className="metric-label">{t('story2_metric2_label')}</span>
                                </div>
                            </div>
                            <div className="story-content">
                                <h3 className="story-title">{t('story2_title')}</h3>
                                <p className="story-description">
                                    {t('story2_description')}
                                </p>
                                <div className="story-quote">
                                    {t('story2_quote')}
                                </div>
                            </div>
                        </div>
                        
                        <div className="story-card">
                            <div className="story-metrics">
                                <div className="metric">
                                    <span className="metric-number">85%</span>
                                    <span className="metric-label">{t('story3_metric1_label')}</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">50%</span>
                                    <span className="metric-label">{t('story3_metric2_label')}</span>
                                </div>
                            </div>
                            <div className="story-content">
                                <h3 className="story-title">{t('story3_title')}</h3>
                                <p className="story-description">
                                    {t('story3_description')}
                                </p>
                                <div className="story-quote">
                                    {t('story3_quote')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="approach-cta">
                <div className="container">
                    <div className="approach-cta__content">
                        <h2 className="approach-cta__title">{t('approach_cta_title')}</h2>
                        <p className="approach-cta__description">
                            {t('approach_cta_description')}
                        </p>
                        <div className="approach-cta__actions">
                            <Link to="/contact" className="btn btn--primary btn--large">{t('book_your_strategy_session3')}</Link>
                            <Link to="/solutions" className="btn btn--secondary btn--large">{t('explore_our_solutions3')}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Approach;