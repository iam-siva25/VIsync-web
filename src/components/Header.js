import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import aiIcon from '../assets/ai.png';
import webDevIcon from '../assets/web-dev-icon.png';
import aerospaceIcon from '../assets/aerospace-icon.png';

const Header = () => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const solutionsRef = useRef(null);
  const headerRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      headerRef.current.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSolutionsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={scrollToTop}>
            <img src={logo} alt="Viwebsync Logo" className="logo-img" />
            <div className="logo-text-container">
              <span className="logo-text-primary">VI Websync</span>
             
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={scrollToTop}>
                Home
              </Link>
            </li>

            {/* Solutions Dropdown */}
            <li
              className={`nav-item dropdown ${solutionsOpen ? 'open' : ''}`}
              ref={solutionsRef}
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="nav-link dropdown-btn" aria-expanded={solutionsOpen}>
                Solutions <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
              </button>
              <div className="dropdown-menu solutions-menu">
                <Link to="/ai-labview-solutions" className="dropdown-card" onClick={scrollToTop}>
                  <div className="card-icon ai">
                    <img src={aiIcon} alt="AI Icon" className="card-icon-img" />
                  </div>
                  <div className="card-content">
                    <h4>AI & DeepLearning</h4>
                    <p>LabVIEW-integrated AI & hardware solutions</p>
                    <span className="card-cta">Learn More →</span>
                  </div>
                </Link>
                <Link to="/digital-solutions" className="dropdown-card" onClick={scrollToTop}>
                  <div className="card-icon web-dev">
                    <img src={webDevIcon} alt="Web Dev Icon" className="card-icon-img" />
                  </div>
                  <div className="card-content">
                    <h4>Web Development</h4>
                    <p>Custom websites & applications</p>
                    <span className="card-cta">Explore →</span>
                  </div>
                </Link>
                <Link to="/aerospace-tech" className="dropdown-card" onClick={scrollToTop}>
                  <div className="card-icon aerospace">
                    <img src={aerospaceIcon} alt="Aerospace Icon" className="card-icon-img" />
                  </div>
                  <div className="card-content">
                    <h4>Aerospace Solutions</h4>
                    <p>Missile & defense systems</p>
                    <span className="card-cta">Discover →</span>
                  </div>
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/company" className="nav-link" onClick={scrollToTop}>
                Company
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" onClick={scrollToTop}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/connect" className="nav-link" onClick={scrollToTop}>
                Connect
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <Link to="/start-now" className="cta-button" onClick={scrollToTop}>
          Start Project
          <span className="cta-hover-effect"></span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-nav-item" onClick={scrollToTop}>
              Home
            </Link>
            <div className="mobile-dropdown-section">
              <button className="mobile-dropdown-btn" onClick={() => setSolutionsOpen(!solutionsOpen)}>
                Solutions <FontAwesomeIcon icon={faChevronDown} className={`${solutionsOpen ? 'rotate' : ''}`} />
              </button>
              <div className={`mobile-dropdown-menu ${solutionsOpen ? 'open' : ''}`}>
                <Link to="/digital-solutions" className="mobile-dropdown-item" onClick={scrollToTop}>
                  Web Development
                </Link>
                <Link to="/aerospace-tech" className="mobile-dropdown-item" onClick={scrollToTop}>
                  Aerospace Solutions
                </Link>
                <Link to="/ai-labview-solutions" className="mobile-dropdown-item" onClick={scrollToTop}>
                  AI & DeepLearning
                </Link>
              </div>
            </div>
            <Link to="/company" className="mobile-nav-item" onClick={scrollToTop}>
              Company
            </Link>
            <Link to="/portfolio" className="mobile-nav-item" onClick={scrollToTop}>
              Portfolio
            </Link>
            <Link to="/connect" className="mobile-nav-item" onClick={scrollToTop}>
              Connect
            </Link>
            <Link to="/start-now" className="mobile-cta-button" onClick={scrollToTop}>
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;