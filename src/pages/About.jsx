import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/about.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* About Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero__content">
                        <h1 className="about-hero__title">
                            {t('about_hero_title')}
                        </h1>
                        <p className="about-hero__subtitle">
                            {t('about_hero_subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="vision-section">
                <div className="container">
                    <div className="vision-content">
                        <div className="vision-text">
                            <h2 className="vision-title">{t('vision_title')}</h2>
                            <p className="vision-description">
                                {t('vision_description1')}
                            </p>
                            <p className="vision-description">
                                {t('vision_description2')}
                            </p>
                            
                            <div className="vision-principles">
                                <h3 className="principles-title">{t('core_principles_title')}</h3>
                                <div className="principles-grid">
                                    <div className="principle-item">
                                        <i className="fas fa-heart"></i>
                                        <h4>{t('principle1_title')}</h4>
                                        <p>{t('principle1_description')}</p>
                                    </div>
                                    
                                    <div className="principle-item">
                                        <i className="fas fa-chart-line"></i>
                                        <h4>{t('principle2_title')}</h4>
                                        <p>{t('principle2_description')}</p>
                                    </div>
                                    
                                    <div className="principle-item">
                                        <i className="fas fa-seedling"></i>
                                        <h4>{t('principle3_title')}</h4>
                                        <p>{t('principle3_description')}</p>
                                    </div>
                                    
                                    <div className="principle-item">
                                        <i className="fas fa-handshake"></i>
                                        <h4>{t('principle4_title')}</h4>
                                        <p>{t('principle4_description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="vision-visual">
                            <div className="vision-graphic">
                                <div className="orbit-container">
                                    <div className="central-concept">
                                        <i className="fas fa-lightbulb"></i>
                                        <span>{t('innovation')}</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="1">
                                        <i className="fas fa-users"></i>
                                        <span>{t('people')}</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="2">
                                        <i className="fas fa-cogs"></i>
                                        <span>{t('process')}</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="3">
                                        <i className="fas fa-rocket"></i>
                                        <span>{t('growth')}</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="4">
                                        <i className="fas fa-shield-alt"></i>
                                        <span>{t('trust')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="founders-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('meet_the_founders_title')}</h2>
                        <p className="section-subtitle">
                            {t('meet_the_founders_subtitle')}
                        </p>
                    </div>
                    
                    <div className="founders-grid">
                        <div className="founder-card">
                            <div className="founder-image">
                                <div className="placeholder-avatar large" data-initials="SU"></div>
                            </div>
                            <div className="founder-info">
                                <h3 className="founder-name">{t('founder1_name')}</h3>
                                <p className="founder-title">{t('founder1_title')}</p>
                                <p className="founder-bio">
                                    {t('founder1_bio1')}
                                </p>
                                <p className="founder-bio">
                                    {t('founder1_bio2')}
                                </p>
                                
                                <div className="founder-expertise">
                                    <h4>{t('key_expertise')}</h4>
                                    <ul className="expertise-list">
                                        <li>{t('founder1_expertise1')}</li>
                                        <li>{t('founder1_expertise2')}</li>
                                        <li>{t('founder1_expertise3')}</li>
                                        <li>{t('founder1_expertise4')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="founder-card">
                            <div className="founder-image">
                                <div className="placeholder-avatar large" data-initials="OG"></div>
                            </div>
                            <div className="founder-info">
                                <h3 className="founder-name">{t('founder2_name')}</h3>
                                <p className="founder-title">{t('founder2_title')}</p>
                                <p className="founder-bio">
                                    {t('founder2_bio1')}
                                </p>
                                <p className="founder-bio">
                                    {t('founder2_bio2')}
                                </p>
                                
                                <div className="founder-expertise">
                                    <h4>{t('key_expertise')}</h4>
                                    <ul className="expertise-list">
                                        <li>{t('founder2_expertise1')}</li>
                                        <li>{t('founder2_expertise2')}</li>
                                        <li>{t('founder2_expertise3')}</li>
                                        <li>{t('founder2_expertise4')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="founders-story">
                        <div className="story-content">
                            <h3 className="story-title">{t('o2mations_story_title')}</h3>
                            <p className="story-text">
                                {t('o2mations_story_p1')}
                            </p>
                            <p className="story-text">
                                {t('o2mations_story_p2')}
                            </p>
                            <p className="story-text">
                                {t('o2mations_story_p3')}
                            </p>
                            <p className="story-text">
                                {t('o2mations_story_p4')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('what_drives_us_title')}</h2>
                        <p className="section-subtitle">
                            {t('what_drives_us_subtitle')}
                        </p>
                    </div>
                    
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-compass"></i>
                            </div>
                            <h3 className="value-title">{t('value1_title')}</h3>
                            <p className="value-description">
                                {t('value1_description')}
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="value-title">{t('value2_title')}</h3>
                            <p className="value-description">
                                {t('value2_description')}
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="value-title">{t('value3_title')}</h3>
                            <p className="value-description">
                                {t('value3_description')}
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <h3 className="value-title">{t('value4_title')}</h3>
                            <p className="value-description">
                                {t('value4_description')}
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <h3 className="value-title">{t('value5_title')}</h3>
                            <p className="value-description">
                                {t('value5_description')}
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <h3 className="value-title">{t('value6_title')}</h3>
                            <p className="value-description">
                                {t('value6_description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="container">
                    <div className="why-choose-content">
                        <div className="why-choose-text">
                            <h2 className="why-choose-title">{t('why_choose_us_title')}</h2>
                            <p className="why-choose-description">
                                {t('why_choose_us_description')}
                            </p>
                            
                            <div className="differentiators">
                                <div className="differentiator-item">
                                    <div className="diff-number">01</div>
                                    <div className="diff-content">
                                        <h3>{t('differentiator1_title')}</h3>
                                        <p>{t('differentiator1_description')}</p>
                                    </div>
                                </div>
                                
                                <div className="differentiator-item">
                                    <div className="diff-number">02</div>
                                    <div className="diff-content">
                                        <h3>{t('differentiator2_title')}</h3>
                                        <p>{t('differentiator2_description')}</p>
                                    </div>
                                </div>
                                
                                <div className="differentiator-item">
                                    <div className="diff-number">03</div>
                                    <div className="diff-content">
                                        <h3>{t('differentiator3_title')}</h3>
                                        <p>{t('differentiator3_description')}</p>
                                    </div>
                                </div>
                                
                                <div className="differentiator-item">
                                    <div className="diff-number">04</div>
                                    <div className="diff-content">
                                        <h3>{t('differentiator4_title')}</h3>
                                        <p>{t('differentiator4_description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="why-choose-stats">
                            <h3 className="stats-title">{t('our_impact_title')}</h3>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <span className="stat-number">100+</span>
                                    <span className="stat-label">{t('impact_stat1_label')}</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">{t('impact_stat2_label')}</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">85%</span>
                                    <span className="stat-label">{t('impact_stat3_label')}</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">3x</span>
                                    <span className="stat-label">{t('impact_stat4_label')}</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">95%</span>
                                    <span className="stat-label">{t('impact_stat5_label')}</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">{t('impact_stat6_label')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta">
                <div className="container">
                    <div className="about-cta__content">
                        <h2 className="about-cta__title">{t('about_cta_title')}</h2>
                        <p className="about-cta__description">
                            {t('about_cta_description')}
                        </p>
                        <div className="about-cta__actions">
                            <Link to="/contact" className="btn btn--primary btn--large">{t('book_your_strategy_session2')}</Link>
                            <Link to="/solutions" className="btn btn--secondary btn--large">{t('explore_our_solutions2')}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;