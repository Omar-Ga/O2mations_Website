import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="nav__logo-link">
            <span className="nav__logo-text">O2MATIONS</span>
          </Link>

          <div className="nav__menu">
            <ul className="nav__list">
              <li>
                <Link to="/about" className="nav__link">{t('nav_about')}</Link>
              </li>
              <li>
                <Link to="/solutions" className="nav__link">{t('nav_solutions')}</Link>
              </li>
              <li>
                <Link to="/approach" className="nav__link">{t('nav_approach')}</Link>
              </li>
              <li>
                <Link to="/contact" className="nav__link">{t('nav_contact')}</Link>
              </li>
            </ul>
          </div>

          <div className="nav__actions">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
