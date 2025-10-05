import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/about.css';

const About = () => {
    return (
        <>
            {/* About Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero__content">
                        <h1 className="about-hero__title">
                            Transforming Business Operations,
                            <span className="about-hero__title-accent">One Automation at a Time</span>
                        </h1>
                        <p className="about-hero__subtitle">
                            Founded on the belief that every business deserves to operate at its highest potential, O2mations was created to bridge the gap between ambitious growth goals and operational limitations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="vision-section">
                <div className="container">
                    <div className="vision-content">
                        <div className="vision-text">
                            <h2 className="vision-title">Our Vision: A World Where Technology Amplifies Human Potential</h2>
                            <p className="vision-description">
                                In 2025, two visionary entrepreneurs, Syed Umar and Omar Gamal, recognized a critical gap in how businesses approached automation. While technology had advanced dramatically, most companies were still trapped by manual processes, disconnected systems, and operational bottlenecks that limited their growth.
                            </p>
                            <p className="vision-description">
                                They founded O2mations not just as another automation consultancy, but as a catalyst for business transformation. Our approach is fundamentally different: we don't replace human intelligence—we amplify it. We don't implement technology for technology's sake—we solve real business challenges.
                            </p>
                            
                            <div className="vision-principles">
                                <h3 className="principles-title">Our Core Principles</h3>
                                <div className="principles-grid">
                                    <div className="principle-item">
                                        <i className="fas fa-heart"></i>
                                        <h4>Human-Centric Design</h4>
                                        <p>Every solution we create puts people first, ensuring technology enhances rather than replaces human capabilities.</p>
                                    </div>
                                    
                                    <div className="principle-item">
                                        <i className="fas fa-chart-line"></i>
                                        <h4>Outcome-Focused Approach</h4>
                                        <p>We measure success by business results, not technical complexity. Every automation must deliver measurable value.</p>
                                    </div>
                                    
                                    <div className="principle-item">
                                        <i className="fas fa-seedling"></i>
                                        <h4>Sustainable Growth</h4>
                                        <p>Our solutions are built to scale with your business, adapting and evolving as your needs change.</p>
                                    </div>
                                    
                                    <div className="principle-item">
                                        <i className="fas fa-handshake"></i>
                                        <h4>Partnership Mindset</h4>
                                        <p>We don't just deliver projects—we build long-term relationships based on trust, transparency, and shared success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="vision-visual">
                            <div className="vision-graphic">
                                <div className="orbit-container">
                                    <div className="central-concept">
                                        <i className="fas fa-lightbulb"></i>
                                        <span>Innovation</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="1">
                                        <i className="fas fa-users"></i>
                                        <span>People</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="2">
                                        <i className="fas fa-cogs"></i>
                                        <span>Process</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="3">
                                        <i className="fas fa-rocket"></i>
                                        <span>Growth</span>
                                    </div>
                                    
                                    <div className="orbiting-element" data-orbit="4">
                                        <i className="fas fa-shield-alt"></i>
                                        <span>Trust</span>
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
                        <h2 className="section-title">Meet the Founders</h2>
                        <p className="section-subtitle">
                            Two passionate innovators with a shared vision for transforming how businesses operate in the digital age.
                        </p>
                    </div>
                    
                    <div className="founders-grid">
                        <div className="founder-card">
                            <div className="founder-image">
                                <div className="placeholder-avatar large" data-initials="SU"></div>
                            </div>
                            <div className="founder-info">
                                <h3 className="founder-name">Syed Umar</h3>
                                <p className="founder-title">Co-Founder & Strategic Director</p>
                                <p className="founder-bio">
                                    Syed brings a unique blend of strategic thinking and operational excellence to O2mations. With a background in helping businesses scale efficiently, he has witnessed firsthand how the right automation strategy can transform an organization's trajectory. His approach focuses on aligning technology initiatives with business goals, ensuring every automation project delivers tangible ROI.
                                </p>
                                <p className="founder-bio">
                                    Syed's passion lies in identifying the hidden inefficiencies that hold businesses back and crafting elegant solutions that unlock exponential growth. He believes that the best automation is invisible to end users—it simply makes everything work better.
                                </p>
                                
                                <div className="founder-expertise">
                                    <h4>Key Expertise:</h4>
                                    <ul className="expertise-list">
                                        <li>Strategic Business Planning</li>
                                        <li>Process Optimization</li>
                                        <li>Change Management</li>
                                        <li>ROI Analysis & Metrics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="founder-card">
                            <div className="founder-image">
                                <div className="placeholder-avatar large" data-initials="OG"></div>
                            </div>
                            <div className="founder-info">
                                <h3 className="founder-name">Omar Gamal</h3>
                                <p className="founder-title">Co-Founder & Technical Director</p>
                                <p className="founder-bio">
                                    Omar is the technical visionary behind O2mations' innovative automation solutions. His expertise in modern technology stacks and integration platforms enables him to design systems that are not just functional, but elegant and scalable. He has a rare ability to translate complex technical concepts into business language, making him the perfect bridge between strategy and execution.
                                </p>
                                <p className="founder-bio">
                                    What sets Omar apart is his commitment to creating solutions that businesses can actually use and maintain. He believes in building automation that empowers teams rather than overwhelming them, focusing on user-friendly interfaces and reliable, maintainable systems.
                                </p>
                                
                                <div className="founder-expertise">
                                    <h4>Key Expertise:</h4>
                                    <ul className="expertise-list">
                                        <li>System Integration</li>
                                        <li>Automation Architecture</li>
                                        <li>Platform Development</li>
                                        <li>Technical Leadership</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="founders-story">
                        <div className="story-content">
                            <h3 className="story-title">The O2mations Story</h3>
                            <p className="story-text">
                                Syed and Omar first collaborated on a project that would become the blueprint for O2mations' approach. A growing e-commerce company was drowning in manual processes—order processing, inventory management, customer service, and financial reporting were all handled by different people using different tools, with information getting lost or duplicated at every step.
                            </p>
                            <p className="story-text">
                                Rather than simply automating existing processes, Syed and Omar reimagined the entire operation. They created an integrated system where data flowed seamlessly between platforms, where repetitive tasks happened automatically, and where the team could focus on strategic initiatives instead of administrative overhead.
                            </p>
                            <p className="story-text">
                                The results were transformative: 75% reduction in processing time, 90% fewer errors, and the ability to scale revenue by 3x without proportionally increasing staff. But more importantly, the team was energized and engaged in ways they hadn't experienced before.
                            </p>
                            <p className="story-text">
                                That project became the inspiration for O2mations. Syed and Omar realized that most businesses face similar challenges, and that the right combination of strategic thinking and technical execution could unlock incredible potential. They founded O2mations to bring this transformative approach to ambitious businesses everywhere.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What Drives Us</h2>
                        <p className="section-subtitle">
                            Our values aren't just words on a wall—they guide every decision we make and every solution we deliver.
                        </p>
                    </div>
                    
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-compass"></i>
                            </div>
                            <h3 className="value-title">Purpose-Driven Innovation</h3>
                            <p className="value-description">
                                We don't innovate for the sake of innovation. Every solution we create serves a clear business purpose and delivers measurable value to our clients.
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3 className="value-title">Radical Transparency</h3>
                            <p className="value-description">
                                We believe in complete openness with our clients. You'll always know exactly what we're doing, why we're doing it, and what results you can expect.
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3 className="value-title">Continuous Learning</h3>
                            <p className="value-description">
                                Technology evolves rapidly, and so do we. We're committed to staying at the forefront of automation capabilities to serve our clients better.
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-award"></i>
                            </div>
                            <h3 className="value-title">Excellence in Execution</h3>
                            <p className="value-description">
                                We set high standards for ourselves and deliver work that we're proud to put our name on. Quality is never negotiable.
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-hands-helping"></i>
                            </div>
                            <h3 className="value-title">Collaborative Partnership</h3>
                            <p className="value-description">
                                Your success is our success. We work alongside your team as trusted partners, not just external consultants.
                            </p>
                        </div>
                        
                        <div className="value-card">
                            <div className="value-icon">
                                <i className="fas fa-balance-scale"></i>
                            </div>
                            <h3 className="value-title">Ethical Technology</h3>
                            <p className="value-description">
                                We believe technology should serve humanity. Our solutions respect privacy, promote fairness, and contribute to positive business outcomes.
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
                            <h2 className="why-choose-title">Why Choose O2mations?</h2>
                            <p className="why-choose-description">
                                In a world full of automation consultancies, what makes O2mations different? It's our unique combination of strategic vision, technical expertise, and genuine commitment to your success.
                            </p>
                            
                            <div className="differentiators">
                                <div className="differentiator-item">
                                    <div className="diff-number">01</div>
                                    <div className="diff-content">
                                        <h3>Fresh Perspective, Proven Results</h3>
                                        <p>As a newly founded company, we bring innovative thinking without the baggage of "that's how we've always done it." Yet our founders' proven track record ensures you get expertise you can trust.</p>
                                    </div>
                                </div>
                                
                                <div className="differentiator-item">
                                    <div className="diff-number">02</div>
                                    <div className="diff-content">
                                        <h3>Agile and Responsive</h3>
                                        <p>Without layers of bureaucracy, we can move quickly, adapt to your needs, and implement solutions faster than larger, more rigid consultancies.</p>
                                    </div>
                                </div>
                                
                                <div className="differentiator-item">
                                    <div className="diff-number">03</div>
                                    <div className="diff-content">
                                        <h3>Client-Focused Culture</h3>
                                        <p>Every client matters to us. You'll work directly with our founders and senior team members, not junior consultants learning on your time.</p>
                                    </div>
                                </div>
                                
                                <div className="differentiator-item">
                                    <div className="diff-number">04</div>
                                    <div className="diff-content">
                                        <h3>Modern Technology Stack</h3>
                                        <p>We leverage the latest platforms and tools, unencumbered by legacy systems or vendor relationships that might limit our recommendations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="why-choose-stats">
                            <h3 className="stats-title">Our Impact</h3>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <span className="stat-number">100+</span>
                                    <span className="stat-label">Processes Optimized</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Businesses Transformed</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">85%</span>
                                    <span className="stat-label">Average Efficiency Gain</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">3x</span>
                                    <span className="stat-label">Average Revenue Growth</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">95%</span>
                                    <span className="stat-label">Client Satisfaction Rate</span>
                                </div>
                                
                                <div className="stat-item">
                                    <span className="stat-number">24/7</span>
                                    <span className="stat-label">System Uptime</span>
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
                        <h2 className="about-cta__title">Ready to Transform Your Business?</h2>
                        <p className="about-cta__description">
                            Let's discuss how O2mations can help you unlock your business's full potential through intelligent automation.
                        </p>
                        <div className="about-cta__actions">
                            <Link to="/contact" className="btn btn--primary btn--large">Book Your Strategy Session</Link>
                            <Link to="/solutions" className="btn btn--secondary btn--large">Explore Our Solutions</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;