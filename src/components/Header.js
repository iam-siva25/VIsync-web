import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
import labviewIcon from '../assets/labview-icon.png';
import webDevIcon from '../assets/web-dev-icon.png';
import logo from '../assets/logo.png'; // Added import for logo.png

const Header = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const solutionsRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll to toggle header style
  useEffect(() => {
    const handleScroll = () => {
      headerRef.current.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Log solutions dropdown state for debugging
  useEffect(() => {
    console.log('Solutions dropdown state:', solutionsOpen);
  }, [solutionsOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    console.log('Toggling mobile menu, current state:', mobileMenuOpen);
    setMobileMenuOpen((prev) => {
      if (!prev) {
        setSolutionsOpen(false); // Close solutions dropdown when opening mobile menu
      }
      return !prev;
    });
  };

  // Toggle solutions dropdown
  const toggleSolutionsDropdown = () => {
    console.log('Toggling solutions dropdown, current state:', solutionsOpen);
    setSolutionsOpen((prev) => !prev);
  };

  // Handle navigation
  const handleNavClick = (path) => {
    console.log('Navigating to:', path);
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={() => handleNavClick('/')} aria-label="Viwebsync Homepage">
            <img src={logo} alt="Viwebsync Logo" className="logo" />
          </Link>
        </div>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => handleNavClick('/')}>
                Home
              </Link>
            </li>
            <li
              className={`nav-item dropdown ${solutionsOpen ? 'open' : ''}`}
              ref={solutionsRef}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                className="dropdown-btn"
                onClick={toggleSolutionsDropdown}
                aria-expanded={solutionsOpen}
              >
                Solutions <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <div className="dropdown-menu solutions-menu">
                <Link
                  to="/labview"
                  className="dropdown-card"
                  onClick={() => handleNavClick('/labview')}
                >
                  <div className="card-icon labview">
                    <img src={labviewIcon} alt="LabVIEW Icon" className="card-icon-img" loading="lazy" />
                  </div>
                  <div className="card-content">
                    <h4>LabVIEW Solutions</h4>
                    <p>Automation, testing, and data acquisition</p>
                    <span className="card-cta">Explore →</span>
                  </div>
                </Link>
                <Link
                  to="/web-development"
                  className="dropdown-card"
                  onClick={() => handleNavClick('/web-development')}
                >
                  <div className="card-icon web-dev">
                    <img src={webDevIcon} alt="Web Dev Icon" className="card-icon-img" loading="lazy" />
                  </div>
                  <div className="card-content">
                    <h4>IT Services</h4>
                    <p>Custom websites, apps & e-commerce</p>
                    <span className="card-cta">Explore →</span>
                  </div>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/company" className="nav-link" onClick={() => handleNavClick('/company')}>
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={() => handleNavClick('/portfolio')}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link" onClick={() => handleNavClick('/blog')}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/connect" className="nav-link" onClick={() => handleNavClick('/connect')}>
                Connect
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/start-now" className="cta-button" onClick={() => handleNavClick('/start-now')}>
          Kickstart
          <span className="cta-hover-effect"></span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-nav-item" onClick={() => handleNavClick('/')}>
              Home
            </Link>
            <div className="mobile-dropdown-section">
              <button
                className="mobile-dropdown-btn"
                onClick={toggleSolutionsDropdown}
                aria-expanded={solutionsOpen}
                aria-controls="mobile-solutions-menu"
              >
                Solutions <FontAwesomeIcon icon={faChevronDown} className={`dropdown-icon ${solutionsOpen ? 'rotate' : ''}`} />
              </button>
              <div
                id="mobile-solutions-menu"
                className={`mobile-dropdown-menu ${solutionsOpen ? 'open' : ''}`}
              >
                <Link
                  to="/labview"
                  className="mobile-dropdown-item"
                  onClick={() => handleNavClick('/labview')}
                >
                  LabVIEW Solutions
                </Link>
                <Link
                  to="/web-development"
                  className="mobile-dropdown-item"
                  onClick={() => handleNavClick('/web-development')}
                >
                  IT Services
                </Link>
              </div>
            </div>
            <Link to="/company" className="mobile-nav-item" onClick={() => handleNavClick('/company')}>
              Company
            </Link>
            <Link to="/portfolio" className="mobile-nav-item" onClick={() => handleNavClick('/portfolio')}>
              Portfolio
            </Link>
            <Link to="/blog" className="mobile-nav-item" onClick={() => handleNavClick('/blog')}>
              Blog
            </Link>
            <Link to="/connect" className="mobile-nav-item" onClick={() => handleNavClick('/connect')}>
              Connect
            </Link>
            <Link to="/start-now" className="mobile-cta-button" onClick={() => handleNavClick('/start-now')}>
              Kickstart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;