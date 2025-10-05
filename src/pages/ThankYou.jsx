import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/thank-you.css';

const ThankYou = () => {
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
                            Thank You for Your Interest!
                        </h1>
                        
                        <p className="thank-you-subtitle">
                            We've received your strategy session request and are excited to help transform your business operations. Our team will review your information and reach out within <strong>one business day</strong> to schedule your complimentary consultation.
                        </p>
                        
                        <div className="next-steps">
                            <h2 className="next-steps__title">What Happens Next?</h2>
                            <div className="steps-timeline">
                                <div className="step-item">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h3>We Review Your Request</h3>
                                        <p>Our team analyzes your business goals and current challenges to prepare for your session.</p>
                                        <span className="step-time">Within 4 hours</span>
                                    </div>
                                </div>
                                
                                <div className="step-item">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h3>We Schedule Your Session</h3>
                                        <p>You'll receive a personal email with available time slots that work for your schedule.</p>
                                        <span className="step-time">Within 24 hours</span>
                                    </div>
                                </div>
                                
                                <div className="step-item">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h3>Your Strategy Session</h3>
                                        <p>We'll conduct a 60-minute deep-dive into your processes and provide actionable recommendations.</p>
                                        <span className="step-time">Within 1 week</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="session-details">
                            <h2 className="session-details__title">Your Strategy Session Will Include:</h2>
                            <div className="details-grid">
                                <div className="detail-card">
                                    <i className="fas fa-search"></i>
                                    <h3>Process Analysis</h3>
                                    <p>Comprehensive review of your current workflows and identification of automation opportunities</p>
                                </div>
                                
                                <div className="detail-card">
                                    <i className="fas fa-route"></i>
                                    <h3>Custom Roadmap</h3>
                                    <p>Prioritized automation strategy with clear implementation phases and expected ROI</p>
                                </div>
                                
                                <div className="detail-card">
                                    <i className="fas fa-lightbulb"></i>
                                    <h3>Quick Wins</h3>
                                    <p>Immediate improvements you can implement right away to see instant results</p>
                                </div>
                                
                                <div className="detail-card">
                                    <i className="fas fa-chart-line"></i>
                                    <h3>Success Metrics</h3>
                                    <p>Clear KPIs and measurement strategies to track your automation success</p>
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
                        <h2 className="preparation-title">How to Prepare for Your Session</h2>
                        <p className="preparation-subtitle">
                            While we'll guide you through everything, here are a few things you can think about beforehand to maximize the value of our time together:
                        </p>
                        
                        <div className="preparation-grid">
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-clipboard-list"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>Current Processes</h3>
                                    <p>Think about your most time-consuming or error-prone workflows. What takes up most of your team's time each day?</p>
                                </div>
                            </div>
                            
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-puzzle-piece"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>Tools & Systems</h3>
                                    <p>List the software and tools your business currently uses. We'll explore how to make them work better together.</p>
                                </div>
                            </div>
                            
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-target"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>Growth Goals</h3>
                                    <p>Consider your business objectives for the next 6-12 months. What would success look like?</p>
                                </div>
                            </div>
                            
                            <div className="prep-item">
                                <div className="prep-icon">
                                    <i className="fas fa-stopwatch"></i>
                                </div>
                                <div className="prep-content">
                                    <h3>Pain Points</h3>
                                    <p>Identify the bottlenecks that slow down your operations or frustrate your team members.</p>
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
                        <h2 className="meanwhile-title">In the Meantime</h2>
                        <p className="meanwhile-subtitle">
                            While you wait for our call, here are some resources to help you start thinking about automation opportunities:
                        </p>
                        
                        <div className="resource-cards">
                            <div className="resource-card">
                                <div className="resource-header">
                                    <i className="fas fa-book-open"></i>
                                    <h3>Explore Our Solutions</h3>
                                </div>
                                <p>Learn more about our comprehensive approach to workflow automation, platform integration, and strategic planning.</p>
                                <Link to="/solutions" className="resource-link">
                                    View Solutions <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                            
                            <div className="resource-card">
                                <div className="resource-header">
                                    <i className="fas fa-map-signs"></i>
                                    <h3>Our Proven Process</h3>
                                </div>
                                <p>Understand our 4-step methodology that ensures successful automation implementation and lasting results.</p>
                                <Link to="/approach" className="resource-link">
                                    See Our Approach <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                            
                            <div className="resource-card">
                                <div className="resource-header">
                                    <i className="fas fa-users"></i>
                                    <h3>Meet the Team</h3>
                                </div>
                                <p>Get to know the founders behind O2mations and learn about our vision for transforming business operations.</p>
                                <Link to="/about" className="resource-link">
                                    About Us <i className="fas fa-arrow-right"></i>
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
                            <h2>Questions Before Your Session?</h2>
                            <p>If you have any immediate questions or need to make changes to your request, don't hesitate to reach out to us directly.</p>
                        </div>
                        
                        <div className="contact-methods">
                            <div className="contact-method">
                                <i className="fas fa-envelope"></i>
                                <div className="method-content">
                                    <h3>Email Us</h3>
                                    <a href="mailto:strategy@o2mations.com">strategy@o2mations.com</a>
                                    <p>We typically respond within 4 hours</p>
                                </div>
                            </div>
                            
                            <div className="contact-method">
                                <i className="fas fa-calendar-alt"></i>
                                <div className="method-content">
                                    <h3>Reschedule or Update</h3>
                                    <p>Need to change your availability or add more information to your request? Just reply to our scheduling email.</p>
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