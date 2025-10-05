import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <div className="hero__text">
                            <h1 className="hero__title">
                                The Future of Your Business is 
                                <span className="hero__title-accent">Effortless</span>
                            </h1>
                            <p className="hero__subtitle">
                                Transform your operations with intelligent automation solutions designed specifically for ambitious businesses ready to scale without limits.
                            </p>
                            <div className="hero__actions">
                                <Link to="/contact" className="btn btn--primary btn--large">Book a Strategy Session</Link>
                                <Link to="/solutions" className="btn btn--secondary btn--large">Explore Our Solutions</Link>
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
                        <h2 className="section-title">The Challenges Holding Your Business Back</h2>
                        <p className="section-subtitle">
                            We understand the operational bottlenecks that prevent ambitious businesses from reaching their full potential.
                        </p>
                    </div>
                    
                    <div className="problems__grid">
                        <div className="problem-card">
                            <div className="problem-card__icon">
                                <i className="fas fa-sync-alt"></i>
                            </div>
                            <h3 className="problem-card__title">Repetitive Workflows</h3>
                            <p className="problem-card__description">
                                Your team spends valuable hours on manual, repetitive tasks that could be automated, preventing them from focusing on strategic, high-value work that drives growth.
                            </p>
                        </div>
                        
                        <div className="problem-card">
                            <div className="problem-card__icon">
                                <i className="fas fa-puzzle-piece"></i>
                            </div>
                            <h3 className="problem-card__title">Disconnected Systems</h3>
                            <p className="problem-card__description">
                                Data silos between your tools create inefficiencies, errors, and missed opportunities. Your systems work against each other instead of together.
                            </p>
                        </div>
                        
                        <div className="problem-card">
                            <div className="problem-card__icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 className="problem-card__title">Growth Plateaus</h3>
                            <p className="problem-card__description">
                                Manual processes that worked at smaller scale now limit your growth. You need systems that scale with your ambitions, not against them.
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
                            <h2 className="philosophy__title">Human-Centric Automation</h2>
                            <p className="philosophy__description">
                                We believe automation should amplify human potential, not replace it. Our approach focuses on eliminating the mundane so your team can concentrate on what they do best: innovating, strategizing, and building meaningful relationships.
                            </p>
                            <div className="philosophy__quote">
                                <blockquote>
                                    "Technology is best when it brings people together and frees them to focus on what truly matters."
                                </blockquote>
                                <cite>— O2mations Philosophy</cite>
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
                        <h2 className="section-title">Intelligent Solutions for a Smarter Business</h2>
                        <p className="section-subtitle">
                            Our comprehensive approach addresses every aspect of business automation, from workflow optimization to strategic transformation.
                        </p>
                    </div>
                    
                    <div className="solutions__grid">
                        <div className="solution-card">
                            <div className="solution-card__header">
                                <div className="solution-card__icon">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <h3 className="solution-card__title">Workflow & Process Automation</h3>
                            </div>
                            <p className="solution-card__description">
                                Streamline your operations with intelligent workflows that eliminate manual bottlenecks and reduce human error.
                            </p>
                            <ul className="solution-card__benefits">
                                <li>Eliminate manual data entry</li>
                                <li>Reduce processing time by 70%</li>
                                <li>Minimize human error</li>
                            </ul>
                        </div>
                        
                        <div className="solution-card">
                            <div className="solution-card__header">
                                <div className="solution-card__icon">
                                    <i className="fas fa-project-diagram"></i>
                                </div>
                                <h3 className="solution-card__title">Platform & Data Integration</h3>
                            </div>
                            <p className="solution-card__description">
                                Connect your tools and create a unified data ecosystem that provides real-time insights across your entire business.
                            </p>
                            <ul className="solution-card__benefits">
                                <li>Create single source of truth</li>
                                <li>Real-time data synchronization</li>
                                <li>Unified business intelligence</li>
                            </ul>
                        </div>
                        
                        <div className="solution-card">
                            <div className="solution-card__header">
                                <div className="solution-card__icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3 className="solution-card__title">Custom Automation Strategy</h3>
                            </div>
                            <p className="solution-card__description">
                                Develop a comprehensive automation roadmap aligned with your business goals and growth trajectory.
                            </p>
                            <ul className="solution-card__benefits">
                                <li>Strategic automation planning</li>
                                <li>ROI-focused implementation</li>
                                <li>Scalable solution architecture</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="solutions-preview__cta">
                        <Link to="/solutions" className="btn btn--primary btn--large">Explore All Solutions</Link>
                    </div>
                </div>
            </section>

            {/* Founders Intro Section */}
            <section className="founders-intro">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Meet the Visionaries Behind O2mations</h2>
                        <p className="section-subtitle">
                            Founded by two passionate innovators with a shared vision for transforming how businesses operate.
                        </p>
                    </div>
                    
                    <div className="founders__content">
                        <div className="founders__text">
                            <h3 className="founders__title">Driven by Innovation, Focused on Results</h3>
                            <p className="founders__description">
                                Syed Umar and Omar Gamal founded O2mations with a simple yet powerful belief: every business deserves to operate at its highest potential. Together, they bring a unique combination of strategic thinking, technical expertise, and human-centered design to create automation solutions that truly transform operations.
                            </p>
                            <div className="founders__stats">
                                <div className="stat">
                                    <span className="stat__number">100+</span>
                                    <span className="stat__label">Processes Optimized</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__number">50+</span>
                                    <span className="stat__label">Businesses Transformed</span>
                                </div>
                                <div className="stat">
                                    <span className="stat__number">85%</span>
                                    <span className="stat__label">Average Efficiency Gain</span>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn--secondary">Learn More About Our Story</Link>
                        </div>
                        
                        <div className="founders__profiles">
                            <div className="founder-profile">
                                <div className="founder-profile__image">
                                    <div className="placeholder-avatar" data-initials="SU"></div>
                                </div>
                                <h4 className="founder-profile__name">Syed Umar</h4>
                                <p className="founder-profile__title">Co-Founder & Strategic Director</p>
                            </div>
                            
                            <div className="founder-profile">
                                <div className="founder-profile__image">
                                    <div className="placeholder-avatar" data-initials="OG"></div>
                                </div>
                                <h4 className="founder-profile__name">Omar Gamal</h4>
                                <p className="founder-profile__title">Co-Founder & Technical Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta__content">
                        <h2 className="cta__title">Ready to Transform Your Business Operations?</h2>
                        <p className="cta__description">
                            Book a complimentary strategy session and discover how O2mations can help you scale efficiently and effortlessly.
                        </p>
                        <Link to="/contact" className="btn btn--primary btn--large">Book Your Strategy Session</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;