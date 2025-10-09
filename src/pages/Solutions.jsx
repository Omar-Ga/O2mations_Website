import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../css/solutions.css';

const Solutions = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero__content">
                        <h1 className="page-hero__title">
                            {t('solutions_hero_title')}
                        </h1>
                        <p className="page-hero__subtitle">
                            {t('solutions_hero_subtitle')}
                        </p>
                        <div className="page-hero__stats">
                            <div className="hero-stat">
                                <span className="hero-stat__number">85%</span>
                                <span className="hero-stat__label">{t('solutions_hero_stat1_label')}</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat__number">70%</span>
                                <span className="hero-stat__label">{t('solutions_hero_stat2_label')}</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat__number">3x</span>
                                <span className="hero-stat__label">{t('solutions_hero_stat3_label')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Overview */}
            <section className="solutions-overview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">{t('solutions_overview_title')}</h2>
                        <p className="section-subtitle">
                            {t('solutions_overview_subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Solution 1: Workflow & Process Automation */}
            <section className="solution-detail">
                <div className="container">
                    <div className="solution-detail__content">
                        <div className="solution-detail__text">
                            <div className="solution-detail__header">
                                <div className="solution-detail__icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <div className="solution-detail__title-wrapper">
                                    <h2 className="solution-detail__title">{t('solution1_title')}</h2>
                                    <p className="solution-detail__tagline">{t('solution1_tagline')}</p>
                                </div>
                            </div>
                            
                            <p className="solution-detail__description">
                                {t('solution1_description')}
                            </p>
                            
                            <div className="solution-benefits">
                                <h3 className="solution-benefits__title">{t('solution1_benefits_title')}</h3>
                                <ul className="solution-benefits__list">
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution1_benefit1') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution1_benefit2') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution1_benefit3') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution1_benefit4') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution1_benefit5') }} />
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="solution-examples">
                                <h3 className="solution-examples__title">{t('solution1_examples_title')}</h3>
                                <div className="solution-examples__grid">
                                    <div className="example-card">
                                        <h4>{t('solution1_example1_title')}</h4>
                                        <p>{t('solution1_example1_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution1_example2_title')}</h4>
                                        <p>{t('solution1_example2_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution1_example3_title')}</h4>
                                        <p>{t('solution1_example3_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution1_example4_title')}</h4>
                                        <p>{t('solution1_example4_description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="solution-detail__visual">
                            <div className="workflow-diagram">
                                <div className="workflow-step" data-step="1">
                                    <div className="step-icon"><i className="fas fa-play"></i></div>
                                    <span className="step-label">Trigger</span>
                                </div>
                                <div className="workflow-arrow">→</div>
                                <div className="workflow-step" data-step="2">
                                    <div className="step-icon"><i className="fas fa-cog"></i></div>
                                    <span className="step-label">Process</span>
                                </div>
                                <div className="workflow-arrow">→</div>
                                <div className="workflow-step" data-step="3">
                                    <div className="step-icon"><i className="fas fa-check"></i></div>
                                    <span className="step-label">Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution 2: Platform & Data Integration */}
            <section className="solution-detail solution-detail--alternate">
                <div className="container">
                    <div className="solution-detail__content">
                        <div className="solution-detail__text">
                            <div className="solution-detail__header">
                                <div className="solution-detail__icon">
                                    <i className="fas fa-project-diagram"></i>
                                </div>
                                <div className="solution-detail__title-wrapper">
                                    <h2 className="solution-detail__title">{t('solution2_title')}</h2>
                                    <p className="solution-detail__tagline">{t('solution2_tagline')}</p>
                                </div>
                            </div>
                            
                            <p className="solution-detail__description">
                                {t('solution2_description')}
                            </p>
                            
                            <div className="solution-benefits">
                                <h3 className="solution-benefits__title">{t('solution2_benefits_title')}</h3>
                                <ul className="solution-benefits__list">
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution2_benefit1') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution2_benefit2') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution2_benefit3') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution2_benefit4') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution2_benefit5') }} />
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="solution-examples">
                                <h3 className="solution-examples__title">{t('solution2_examples_title')}</h3>
                                <div className="solution-examples__grid">
                                    <div className="example-card">
                                        <h4>{t('solution2_example1_title')}</h4>
                                        <p>{t('solution2_example1_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution2_example2_title')}</h4>
                                        <p>{t('solution2_example2_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution2_example3_title')}</h4>
                                        <p>{t('solution2_example3_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution2_example4_title')}</h4>
                                        <p>{t('solution2_example4_description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="solution-detail__visual">
                            <div className="integration-diagram">
                                <div className="central-hub">
                                    <i className="fas fa-database"></i>
                                    <span>Unified Data Hub</span>
                                </div>
                                <div className="connected-system" data-system="1">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>E-commerce</span>
                                </div>
                                <div className="connected-system" data-system="2">
                                    <i className="fas fa-users"></i>
                                    <span>CRM</span>
                                </div>
                                <div className="connected-system" data-system="3">
                                    <i className="fas fa-chart-bar"></i>
                                    <span>Analytics</span>
                                </div>
                                <div className="connected-system" data-system="4">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <div className="connection-lines">
                                    <div className="connection-line" data-connection="1"></div>
                                    <div className="connection-line" data-connection="2"></div>
                                    <div className="connection-line" data-connection="3"></div>
                                    <div className="connection-line" data-connection="4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution 3: Custom Automation Strategy */}
            <section className="solution-detail">
                <div className="container">
                    <div className="solution-detail__content">
                        <div className="solution-detail__text">
                            <div className="solution-detail__header">
                                <div className="solution-detail__icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <div className="solution-detail__title-wrapper">
                                    <h2 className="solution-detail__title">{t('solution3_title')}</h2>
                                    <p className="solution-detail__tagline">{t('solution3_tagline')}</p>
                                </div>
                            </div>
                            
                            <p className="solution-detail__description">
                                {t('solution3_description')}
                            </p>
                            
                            <div className="solution-benefits">
                                <h3 className="solution-benefits__title">{t('solution3_benefits_title')}</h3>
                                <ul className="solution-benefits__list">
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution3_benefit1') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution3_benefit2') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution3_benefit3') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution3_benefit4') }} />
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span dangerouslySetInnerHTML={{ __html: t('solution3_benefit5') }} />
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="solution-examples">
                                <h3 className="solution-examples__title">{t('solution3_examples_title')}</h3>
                                <div className="solution-examples__grid">
                                    <div className="example-card">
                                        <h4>{t('solution3_example1_title')}</h4>
                                        <p>{t('solution3_example1_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution3_example2_title')}</h4>
                                        <p>{t('solution3_example2_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution3_example3_title')}</h4>
                                        <p>{t('solution3_example3_description')}</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>{t('solution3_example4_title')}</h4>
                                        <p>{t('solution3_example4_description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="solution-detail__visual">
                            <div className="strategy-diagram">
                                <div className="strategy-phase" data-phase="1">
                                    <div className="phase-number">1</div>
                                    <div className="phase-content">
                                        <h4>Assess</h4>
                                        <p>Current State Analysis</p>
                                    </div>
                                </div>
                                <div className="strategy-phase" data-phase="2">
                                    <div className="phase-number">2</div>
                                    <div className="phase-content">
                                        <h4>Plan</h4>
                                        <p>Strategic Roadmap</p>
                                    </div>
                                </div>
                                <div className="strategy-phase" data-phase="3">
                                    <div className="phase-number">3</div>
                                    <div className="phase-content">
                                        <h4>Execute</h4>
                                        <p>Phased Implementation</p>
                                    </div>
                                </div>
                                <div className="strategy-phase" data-phase="4">
                                    <div className="phase-number">4</div>
                                    <div className="phase-content">
                                        <h4>Optimize</h4>
                                        <p>Continuous Improvement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="solutions-cta">
                <div className="container">
                    <div className="solutions-cta__content">
                        <h2 className="solutions-cta__title">{t('solutions_cta_title')}</h2>
                        <p className="solutions-cta__description">
                            {t('solutions_cta_description')}
                        </p>
                        <div className="solutions-cta__actions">
                            <Link to="/contact" className="btn btn--primary btn--large">{t('book_your_strategy_session4')}</Link>
                            <Link to="/approach" className="btn btn--secondary btn--large">{t('learn_about_our_process')}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Solutions;