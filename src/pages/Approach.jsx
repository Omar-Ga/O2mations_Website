import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/approach.css';

const Approach = () => {
    return (
        <>
            {/* Approach Hero Section */}
            <section className="approach-hero">
                <div className="container">
                    <div className="approach-hero__content">
                        <h1 className="approach-hero__title">
                            Your Blueprint for 
                            <span className="approach-hero__title-accent">Transformation</span>
                        </h1>
                        <p className="approach-hero__subtitle">
                            Our proven 4-step methodology ensures successful automation implementation that delivers lasting results. Every engagement follows a clear, collaborative path designed to minimize risk and maximize value.
                        </p>
                        <div className="approach-hero__highlight">
                            <i className="fas fa-shield-alt"></i>
                            <span>Proven methodology used by 50+ successful transformations</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Overview Section */}
            <section className="process-overview">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">A Structured Approach to Success</h2>
                        <p className="section-subtitle">
                            Our methodology is built on years of experience and refined through dozens of successful implementations. Each step builds upon the previous one, ensuring a solid foundation for lasting transformation.
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
                                <h3 className="step-title">Discovery & Deep Dive</h3>
                                <p className="step-duration">1-2 weeks</p>
                                <p className="step-description">
                                    We start by understanding your business inside and out—your processes, challenges, goals, and unique requirements.
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
                                <h3 className="step-title">Strategic Design</h3>
                                <p className="step-duration">1-2 weeks</p>
                                <p className="step-description">
                                    We create a comprehensive automation strategy with detailed blueprints, timelines, and success metrics.
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
                                <h3 className="step-title">Precision Implementation</h3>
                                <p className="step-duration">2-8 weeks</p>
                                <p className="step-description">
                                    We build, test, and deploy your automation solutions with rigorous quality control and minimal disruption.
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
                                <h3 className="step-title">Partnership & Evolution</h3>
                                <p className="step-duration">Ongoing</p>
                                <p className="step-description">
                                    We provide continuous support, optimization, and strategic guidance to ensure your automation evolves with your business.
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
                                <span className="badge-text">Discovery & Deep Dive</span>
                            </div>
                            <h2 className="step-detail__title">Understanding Your Business Inside and Out</h2>
                            <p className="step-detail__subtitle">
                                Before we recommend any solutions, we need to truly understand your business, your challenges, and your goals. Our discovery process is thorough, collaborative, and designed to uncover opportunities you might not have considered.
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">What We Do:</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-users"></i>
                                        <h4>Stakeholder Interviews</h4>
                                        <p>One-on-one conversations with key team members to understand pain points and opportunities from multiple perspectives.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-sitemap"></i>
                                        <h4>Process Mapping</h4>
                                        <p>Detailed documentation of your current workflows, identifying bottlenecks, inefficiencies, and integration opportunities.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-tools"></i>
                                        <h4>Technology Audit</h4>
                                        <p>Comprehensive review of your existing tools, platforms, and data sources to understand your technical landscape.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-bullseye"></i>
                                        <h4>Goal Alignment</h4>
                                        <p>Clear definition of success metrics and business objectives that will guide our automation strategy.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">Your Deliverables:</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-file-alt"></i>
                                        <span><strong>Current State Analysis:</strong> Comprehensive documentation of your existing processes and systems</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-exclamation-triangle"></i>
                                        <span><strong>Pain Point Assessment:</strong> Detailed analysis of operational challenges and their business impact</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-lightbulb"></i>
                                        <span><strong>Opportunity Matrix:</strong> Prioritized list of automation opportunities with potential ROI estimates</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-compass"></i>
                                        <span><strong>Strategic Recommendations:</strong> Initial high-level recommendations for next steps</span>
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
                                <span className="badge-text">Strategic Design</span>
                            </div>
                            <h2 className="step-detail__title">Crafting Your Automation Blueprint</h2>
                            <p className="step-detail__subtitle">
                                With a deep understanding of your business, we design a comprehensive automation strategy that aligns perfectly with your goals and ensures maximum impact with minimal risk.
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">What We Do:</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-route"></i>
                                        <h4>Solution Architecture</h4>
                                        <p>Design the technical architecture and integration patterns that will power your automated workflows.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-calendar-alt"></i>
                                        <h4>Implementation Roadmap</h4>
                                        <p>Create a phased implementation plan with clear milestones, timelines, and resource requirements.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-shield-alt"></i>
                                        <h4>Risk Assessment</h4>
                                        <p>Identify potential challenges and develop mitigation strategies to ensure smooth implementation.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-chart-pie"></i>
                                        <h4>ROI Modeling</h4>
                                        <p>Detailed financial analysis showing expected costs, savings, and return on investment timelines.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">Your Deliverables:</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-project-diagram"></i>
                                        <span><strong>Technical Blueprint:</strong> Detailed system architecture and integration specifications</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-road"></i>
                                        <span><strong>Implementation Roadmap:</strong> Phase-by-phase plan with timelines and deliverables</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-calculator"></i>
                                        <span><strong>ROI Analysis:</strong> Comprehensive financial impact assessment and payback calculations</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-clipboard-check"></i>
                                        <span><strong>Success Metrics:</strong> Clear KPIs and measurement criteria for tracking progress</span>
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
                                <span className="badge-text">Precision Implementation</span>
                            </div>
                            <h2 className="step-detail__title">Building Your Automation Solutions</h2>
                            <p className="step-detail__subtitle">
                                This is where strategy becomes reality. Our implementation process is methodical, transparent, and designed to minimize disruption while maximizing quality and reliability.
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">What We Do:</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-cogs"></i>
                                        <h4>Agile Development</h4>
                                        <p>Build your automation solutions using iterative development cycles with regular check-ins and feedback.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-vial"></i>
                                        <h4>Rigorous Testing</h4>
                                        <p>Comprehensive testing in a controlled environment before any changes affect your live operations.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-graduation-cap"></i>
                                        <h4>Team Training</h4>
                                        <p>Hands-on training for your team to confidently use and maintain the new systems.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-rocket"></i>
                                        <h4>Phased Deployment</h4>
                                        <p>Careful, staged rollout of automation features to minimize risk and ensure smooth adoption.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">Your Deliverables:</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-play-circle"></i>
                                        <span><strong>Live Automation Systems:</strong> Fully functional, tested automation workflows integrated with your existing tools</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-book"></i>
                                        <span><strong>Comprehensive Documentation:</strong> User guides, technical documentation, and process manuals</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-user-graduate"></i>
                                        <span><strong>Trained Team:</strong> Your staff fully trained on new systems and processes</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-life-ring"></i>
                                        <span><strong>Support Framework:</strong> Clear escalation paths and support procedures for ongoing maintenance</span>
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
                                <span className="badge-text">Partnership & Evolution</span>
                            </div>
                            <h2 className="step-detail__title">Ensuring Long-term Success</h2>
                            <p className="step-detail__subtitle">
                                Implementation is just the beginning. We partner with you for the long haul, continuously optimizing your systems and helping you evolve as your business grows.
                            </p>
                        </div>
                        
                        <div className="step-detail__body">
                            <div className="step-activities">
                                <h3 className="activities-title">What We Do:</h3>
                                <div className="activities-grid">
                                    <div className="activity-card">
                                        <i className="fas fa-chart-line"></i>
                                        <h4>Performance Monitoring</h4>
                                        <p>Continuous tracking of system performance and business impact with regular optimization recommendations.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-sync-alt"></i>
                                        <h4>System Updates</h4>
                                        <p>Regular maintenance, security updates, and feature enhancements to keep your automation current.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-expand-arrows-alt"></i>
                                        <h4>Scalability Planning</h4>
                                        <p>Strategic guidance for expanding automation as your business grows and requirements evolve.</p>
                                    </div>
                                    
                                    <div className="activity-card">
                                        <i className="fas fa-headset"></i>
                                        <h4>Ongoing Support</h4>
                                        <p>Responsive technical support and strategic consultation whenever you need assistance.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="step-deliverables">
                                <h3 className="deliverables-title">Your Deliverables:</h3>
                                <ul className="deliverables-list">
                                    <li className="deliverable-item">
                                        <i className="fas fa-tachometer-alt"></i>
                                        <span><strong>Performance Reports:</strong> Regular analytics and insights on automation effectiveness and ROI</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-wrench"></i>
                                        <span><strong>Optimization Recommendations:</strong> Continuous improvement suggestions based on usage patterns and business changes</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-map"></i>
                                        <span><strong>Evolution Roadmap:</strong> Strategic plan for expanding and enhancing your automation capabilities</span>
                                    </li>
                                    <li className="deliverable-item">
                                        <i className="fas fa-handshake"></i>
                                        <span><strong>Trusted Partnership:</strong> Ongoing relationship with automation experts who understand your business</span>
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
                        <h2 className="section-title">Our Methodology in Action</h2>
                        <p className="section-subtitle">
                            See how our structured approach has delivered transformational results for businesses across industries.
                        </p>
                    </div>
                    
                    <div className="stories-grid">
                        <div className="story-card">
                            <div className="story-metrics">
                                <div className="metric">
                                    <span className="metric-number">75%</span>
                                    <span className="metric-label">Reduction in Processing Time</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">90%</span>
                                    <span className="metric-label">Fewer Errors</span>
                                </div>
                            </div>
                            <div className="story-content">
                                <h3 className="story-title">E-commerce Platform Transformation</h3>
                                <p className="story-description">
                                    A growing online retailer was drowning in manual order processing and inventory management. Our 4-step approach integrated their sales channels, automated fulfillment workflows, and created real-time inventory synchronization across multiple platforms.
                                </p>
                                <div className="story-quote">
                                    "The O2mations team didn't just automate our processes—they transformed how we think about our operations."
                                </div>
                            </div>
                        </div>
                        
                        <div className="story-card">
                            <div className="story-metrics">
                                <div className="metric">
                                    <span className="metric-number">3x</span>
                                    <span className="metric-label">Revenue Growth</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">60%</span>
                                    <span className="metric-label">Time Savings</span>
                                </div>
                            </div>
                            <div className="story-content">
                                <h3 className="story-title">Professional Services Automation</h3>
                                <p className="story-description">
                                    A consulting firm needed to scale their client onboarding and project management processes. We created automated client intake workflows, integrated project tracking systems, and built custom reporting dashboards.
                                </p>
                                <div className="story-quote">
                                    "We can now handle 3x more clients with the same team size, and our client satisfaction has never been higher."
                                </div>
                            </div>
                        </div>
                        
                        <div className="story-card">
                            <div className="story-metrics">
                                <div className="metric">
                                    <span className="metric-number">85%</span>
                                    <span className="metric-label">Faster Customer Response</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-number">50%</span>
                                    <span className="metric-label">Cost Reduction</span>
                                </div>
                            </div>
                            <div className="story-content">
                                <h3 className="story-title">Customer Service Revolution</h3>
                                <p className="story-description">
                                    A SaaS company struggled with customer support ticket management and response times. Our solution automated ticket routing, created intelligent response templates, and integrated customer data for personalized support.
                                </p>
                                <div className="story-quote">
                                    "Our support team went from overwhelmed to empowered. They can now focus on solving complex issues instead of manual tasks."
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
                        <h2 className="approach-cta__title">Ready to Start Your Transformation?</h2>
                        <p className="approach-cta__description">
                            Experience our proven methodology firsthand. Book a complimentary strategy session to see how our 4-step approach can transform your business operations.
                        </p>
                        <div className="approach-cta__actions">
                            <Link to="/contact" className="btn btn--primary btn--large">Book Your Strategy Session</Link>
                            <Link to="/solutions" className="btn btn--secondary btn--large">Explore Our Solutions</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Approach;