import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const headerRef = useRef(null);

    // Function to handle the mobile menu toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Handle scroll event to add 'scrolled' class
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effects for when mobile menu is open
    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        const handleClickOutside = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeydown);
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeydown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Helper function to determine active link
    const getLinkClass = (path) => {
        const currentPath = location.pathname;
        const normalizedPath = path.replace('.html', '');
        const isActive = currentPath === normalizedPath || currentPath === path || (currentPath === '/' && path === '/');
        // Special case for home
        if (path === '/' && currentPath !== '/') return 'nav__link';
        return `nav__link${isActive ? ' nav__link--active' : ''}`;
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header" ref={headerRef}>
            <div className="container">
                <nav className="nav">
                    <div className="nav__logo">
                        <Link to="/" className="nav__logo-link">
                            <span className="nav__logo-text">O2mations</span>
                        </Link>
                    </div>
                    
                    <div className={`nav__menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className={getLinkClass('/')}>Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/solutions" className={getLinkClass('/solutions')}>Our Solutions</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/approach" className={getLinkClass('/approach')}>Our Approach</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="nav__actions">
                        <Link to="/contact" className="btn btn--primary">Book a Strategy Session</Link>
                        <button className="nav__toggle" id="nav-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
                            {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
