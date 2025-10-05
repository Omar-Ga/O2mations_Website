import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/solutions.css';

const Solutions = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="page-hero">
                <div className="container">
                    <div className="page-hero__content">
                        <h1 className="page-hero__title">
                            Intelligent Solutions for a 
                            <span className="page-hero__title-accent">Smarter Business</span>
                        </h1>
                        <p className="page-hero__subtitle">
                            Our comprehensive suite of automation solutions addresses every aspect of your business operations, from workflow optimization to strategic transformation. Each solution is designed with an outcome-oriented approach that delivers measurable results.
                        </p>
                        <div className="page-hero__stats">
                            <div className="hero-stat">
                                <span className="hero-stat__number">85%</span>
                                <span className="hero-stat__label">Average Efficiency Gain</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat__number">70%</span>
                                <span className="hero-stat__label">Reduction in Manual Tasks</span>
                            </div>
                            <div className="hero-stat">
                                <span className="hero-stat__number">3x</span>
                                <span className="hero-stat__label">Faster Process Execution</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Overview */}
            <section className="solutions-overview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Comprehensive Automation Solutions</h2>
                        <p className="section-subtitle">
                            Each solution is carefully crafted to address specific business challenges while working together to create a unified, efficient operation.
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
                                    <h2 className="solution-detail__title">Workflow & Process Automation</h2>
                                    <p className="solution-detail__tagline">Eliminate bottlenecks, amplify productivity</p>
                                </div>
                            </div>
                            
                            <p className="solution-detail__description">
                                Transform your manual processes into intelligent, automated workflows that operate flawlessly around the clock. Our workflow automation solutions eliminate human error, reduce processing time by up to 70%, and free your team to focus on strategic initiatives that drive growth.
                            </p>
                            
                            <div className="solution-benefits">
                                <h3 className="solution-benefits__title">What This Solves For You:</h3>
                                <ul className="solution-benefits__list">
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Eliminates manual data entry</strong> - No more copying information between systems or spreadsheets</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Reduces processing time by 70%</strong> - Tasks that took hours now complete in minutes</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Minimizes human error</strong> - Consistent, accurate results every time</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Enables 24/7 operations</strong> - Workflows continue even when your team is offline</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Provides process transparency</strong> - Real-time visibility into every step of your workflows</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="solution-examples">
                                <h3 className="solution-examples__title">Common Applications:</h3>
                                <div className="solution-examples__grid">
                                    <div className="example-card">
                                        <h4>Customer Onboarding</h4>
                                        <p>Automated welcome sequences, document collection, and account setup</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Invoice Processing</h4>
                                        <p>From receipt to payment, completely automated financial workflows</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Lead Nurturing</h4>
                                        <p>Intelligent follow-up sequences based on prospect behavior and interests</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Inventory Management</h4>
                                        <p>Automatic reordering, stock level monitoring, and supplier communication</p>
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
                                    <h2 className="solution-detail__title">Platform & Data Integration</h2>
                                    <p className="solution-detail__tagline">One unified ecosystem, infinite possibilities</p>
                                </div>
                            </div>
                            
                            <p className="solution-detail__description">
                                Break down data silos and connect your entire tech stack into a cohesive, intelligent ecosystem. Our integration solutions create seamless communication between your tools, providing real-time insights and enabling data-driven decision making across your entire organization.
                            </p>
                            
                            <div className="solution-benefits">
                                <h3 className="solution-benefits__title">What This Solves For You:</h3>
                                <ul className="solution-benefits__list">
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Creates single source of truth</strong> - All your data unified and accessible in one place</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Real-time data synchronization</strong> - Changes in one system instantly reflect everywhere</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Unified business intelligence</strong> - Comprehensive dashboards and reporting across all platforms</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Eliminates duplicate data entry</strong> - Enter once, use everywhere automatically</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Improves data accuracy</strong> - Consistent information across all systems</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="solution-examples">
                                <h3 className="solution-examples__title">Integration Examples:</h3>
                                <div className="solution-examples__grid">
                                    <div className="example-card">
                                        <h4>CRM + Email Marketing</h4>
                                        <p>Automatic segmentation and personalized campaigns based on customer behavior</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>E-commerce + Accounting</h4>
                                        <p>Real-time financial reporting and automatic transaction categorization</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Project Management + Time Tracking</h4>
                                        <p>Automatic project updates and accurate resource allocation reporting</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Support Desk + CRM</h4>
                                        <p>Complete customer history and automated ticket routing and escalation</p>
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
                                    <h2 className="solution-detail__title">Custom Automation Strategy</h2>
                                    <p className="solution-detail__tagline">Your roadmap to operational excellence</p>
                                </div>
                            </div>
                            
                            <p className="solution-detail__description">
                                Develop a comprehensive, tailored automation roadmap that aligns perfectly with your business goals and growth trajectory. Our strategic approach ensures every automation initiative delivers maximum ROI while building a foundation for sustainable, scalable operations.
                            </p>
                            
                            <div className="solution-benefits">
                                <h3 className="solution-benefits__title">What This Solves For You:</h3>
                                <ul className="solution-benefits__list">
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Strategic automation planning</strong> - Prioritized roadmap based on impact and feasibility</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>ROI-focused implementation</strong> - Every automation project delivers measurable business value</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Scalable solution architecture</strong> - Systems that grow with your business</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Risk mitigation strategies</strong> - Identify and address potential challenges before they occur</span>
                                    </li>
                                    <li className="solution-benefits__item">
                                        <i className="fas fa-check-circle"></i>
                                        <span><strong>Change management support</strong> - Ensure smooth adoption across your organization</span>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="solution-examples">
                                <h3 className="solution-examples__title">Strategy Components:</h3>
                                <div className="solution-examples__grid">
                                    <div className="example-card">
                                        <h4>Process Assessment</h4>
                                        <p>Comprehensive analysis of current workflows and identification of optimization opportunities</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Technology Audit</h4>
                                        <p>Evaluation of existing tools and recommendation for strategic integrations</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Implementation Roadmap</h4>
                                        <p>Phased approach with clear milestones, timelines, and success metrics</p>
                                    </div>
                                    <div className="example-card">
                                        <h4>Performance Monitoring</h4>
                                        <p>Ongoing optimization and continuous improvement strategies</p>
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
                        <h2 className="solutions-cta__title">Ready to Transform Your Operations?</h2>
                        <p className="solutions-cta__description">
                            Let's discuss which solution is right for your business. Book a complimentary strategy session to explore your automation opportunities.
                        </p>
                        <div className="solutions-cta__actions">
                            <Link to="/contact" className="btn btn--primary btn--large">Book a Strategy Session</Link>
                            <Link to="/approach" className="btn btn--secondary btn--large">Learn About Our Process</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Solutions;