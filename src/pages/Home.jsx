import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__text">
                            <h1 className="hero__title">
                                {t('hero_title')}
                            </h1>
                            <p className="hero__subtitle">
                                {t('hero_subtitle')}
                            </p>
                            <div className="hero__actions">
                                <Link to="/contact" className="btn btn--primary btn--large">{t('book_strategy_session')}</Link>
                                <Link to="/solutions" className="btn btn--secondary btn--large">{t('explore_our_solutions')}</Link>
                            </div>
                        </div>
                        <div className="hero__visual">
                            <div className="hero__animation">
                                <div className="floating-elements">
                                    <div className="element element--1"></div>
                                    <div className="element element--2"></div>
                                    <div className="element element--3"></div>
                                    <div className="element element--4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem We Solve Section */}
            <section className="problems">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('problems_section_title')}</h2>
                        <p className="section-subtitle">
                            {t('problems_section_subtitle')}
                        </p>
                    </div>
                    
                    <div className="problems__grid">
                        <div className="problem-card">
                            <div className="problem-card__icon">
                                <i className="fas fa-sync-alt"></i>
                            </div>
                            <h3 className="problem-card__title">{t('problem_card1_title')}</h3>
                            <p className="problem-card__description">
                                {t('problem_card1_description')}
                            </p>
                        </div>
                        
                        <div className="problem-card">
                            <div className="problem-card__icon">
                                <i className="fas fa-puzzle-piece"></i>
                            </div>
                            <h3 className="problem-card__title">{t('problem_card2_title')}</h3>
                            <p className="problem-card__description">
                                {t('problem_card2_description')}
                            </p>
                        </div>
                        
                        <div className="problem-card">
                            <div className="problem-card__icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 className="problem-card__title">{t('problem_card3_title')}</h3>
                            <p className="problem-card__description">
                                {t('problem_card3_description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Philosophy Section */}
            <section className="philosophy">
                <div className="container">
                    <div className="philosophy__content">
                        <div className="philosophy__text">
                            <h2 className="philosophy__title">{t('philosophy_title')}</h2>
                            <p className="philosophy__description">
                                {t('philosophy_description')}
                            </p>
                            <div className="philosophy__quote">
                                <blockquote>
                                    {t('philosophy_quote')}
                                </blockquote>
                                <cite>— {t('philosophy_cite')}</cite>
                            </div>
                        </div>
                        <div className="philosophy__visual">
                            <div className="philosophy__graphic">
                                <div className="connection-lines">
                                    <div className="line line--1"></div>
                                    <div className="line line--2"></div>
                                    <div className="line line--3"></div>
                                </div>
                                <div className="nodes">
                                    <div className="node node--human"></div>
                                    <div className="node node--tech"></div>
                                    <div className="node node--growth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Overview Section */}
            <section className="solutions-preview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('solutions_preview_title')}</h2>
                        <p className="section-subtitle">
                            {t('solutions_preview_subtitle')}
                        </p>
                    </div>
                    
                    <div className="solutions__grid">
                        <div className="solution-card">
                            <div className="solution-card__header">
                                <div className="solution-card__icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <h3 className="solution-card__title">{t('solution_card1_title')}</h3>
                            </div>
                            <p className="solution-card__description">
                                {t('solution_card1_description')}
                            </p>
                            <ul className="solution-card__benefits">
                                <li>{t('solution_card1_benefit1')}</li>
                                <li>{t('solution_card1_benefit2')}</li>
                                <li>{t('solution_card1_benefit3')}</li>
                            </ul>
                        </div>
                        
                        <div className="solution-card">
                            <div className="solution-card__header">
                                <div className="solution-card__icon">
                                    <i className="fas fa-project-diagram"></i>
                                </div>
                                <h3 className="solution-card__title">{t('solution_card2_title')}</h3>
                            </div>
                            <p className="solution-card__description">
                                {t('solution_card2_description')}
                            </p>
                            <ul className="solution-card__benefits">
                                <li>{t('solution_card2_benefit1')}</li>
                                <li>{t('solution_card2_benefit2')}</li>
                                <li>{t('solution_card2_benefit3')}</li>
                            </ul>
                        </div>
                        
                        <div className="solution-card">
                            <div className="solution-card__header">
                                <div className="solution-card__icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3 className="solution-card__title">{t('solution_card3_title')}</h3>
                            </div>
                            <p className="solution-card__description">
                                {t('solution_card3_description')}
                            </p>
                            <ul className="solution-card__benefits">
                                <li>{t('solution_card3_benefit1')}</li>
                                <li>{t('solution_card3_benefit2')}</li>
                                <li>{t('solution_card3_benefit3')}</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="solutions-preview__cta">
                        <Link to="/solutions" className="btn btn--primary btn--large">{t('explore_all_solutions')}</Link>
                    </div>
                </div>
            </section>

            {/* Founders Intro Section */}
            <section className="founders-intro">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('founders_intro_title')}</h2>
                        <p className="section-subtitle">
                            {t('founders_intro_subtitle')}
                        </p>
                    </div>
                    
                    <div className="founders__content">
                        <div className="founders__text">
                            <h3 className="founders__title">{t('founders_intro_heading')}</h3>
                            <p className="founders__description">
                                {t('founders_intro_description')}
                            </p>
                            <div className="founders__stats">
                                <div className="stat">
                                    <span className="stat__number">100+</span>
                                    <span className="stat__label">{t('stat1_label')}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__number">50+</span>
                                    <span className="stat__label">{t('stat2_label')}</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__number">85%</span>
                                    <span className="stat__label">{t('stat3_label')}</span>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn--secondary">{t('learn_more_about_our_story')}</Link>
                        </div>
                        
                        <div className="founders__profiles">
                            <div className="founder-profile">
                                <div className="founder-profile__image">
                                    <div className="placeholder-avatar" data-initials="SU"></div>
                                </div>
                                <h4 className="founder-profile__name">{t('founder1_name')}</h4>
                                <p className="founder-profile__title">{t('founder1_title')}</p>
                            </div>
                            
                            <div className="founder-profile">
                                <div className="founder-profile__image">
                                    <div className="placeholder-avatar" data-initials="OG"></div>
                                </div>
                                <h4 className="founder-profile__name">{t('founder2_name')}</h4>
                                <p className="founder-profile__title">{t('founder2_title')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta__content">
                        <h2 className="cta__title">{t('cta_title')}</h2>
                        <p className="cta__description">
                            {t('cta_description')}
                        </p>
                        <Link to="/contact" className="btn btn--primary btn--large">{t('book_your_strategy_session')}</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;