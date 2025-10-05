import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-text">O2mations</span>
                        </div>
                        <p className="footer__mission">
                            Transforming businesses through intelligent automation solutions that amplify human potential.
                        </p>
                    </div>
                    
                    <div className="footer__links">
                        <div className="footer__column">
                            <h4 className="footer__column-title">Company</h4>
                            <ul className="footer__list">
                                <li><Link to="/about" className="footer__link">About Us</Link></li>
                                <li><Link to="/approach" className="footer__link">Our Approach</Link></li>
                                <li><Link to="/contact" className="footer__link">Contact</Link></li>
                            </ul>
                        </div>
                        
                        <div className="footer__column">
                            <h4 className="footer__column-title">Solutions</h4>
                            <ul className="footer__list">
                                <li><Link to="/solutions" className="footer__link">Workflow Automation</Link></li>
                                <li><Link to="/solutions" className="footer__link">Platform Integration</Link></li>
                                <li><Link to="/solutions" className="footer__link">Automation Strategy</Link></li>
                            </ul>
                        </div>
                        
                        <div className="footer__column">
                            <h4 className="footer__column-title">Connect</h4>
                            <ul className="footer__list">
                                <li><a href="mailto:hello@o2mations.com" className="footer__link">hello@o2mations.com</a></li>
                                <li><a href="#" className="footer__link">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="footer__bottom">
                    <p className="footer__copyright">© 2025 O2mations. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;