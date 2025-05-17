import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Labview.css';

// Import representative images for categories
import hilTesting from '../assets/hil-testing.jpg';
import visualInspection from '../assets/visual-inspection.jpg';
import missileCheckout from '../assets/missile-checkout.jpg';
import smartManufacturing from '../assets/smart-manufacturing.jpg';

const categories = [
  {
    title: 'Automotive',
    description: 'Advanced testing and automation for vehicle ECUs, ADAS, and battery systems.',
    image: hilTesting,
    path: '/labview/automotive',
  },
  {
    title: 'Deep Learning',
    description: 'AI-driven solutions for defect detection, predictive maintenance, and robotics.',
    image: visualInspection,
    path: '/labview/deep-learning',
  },
  {
    title: 'Aerospace and Defense',
    description: 'Reliable testing for missile systems, radar, and automated equipment.',
    image: missileCheckout,
    path: '/labview/aerospace-defense',
  },
  {
    title: 'Industry 4.0',
    description: 'Smart manufacturing, digital twins, and IoT for modern industries.',
    image: smartManufacturing,
    path: '/labview/industry-4',
  },
];

const LabviewServices = () => {
  return (
    <div className="labview-services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">VIWEBSYNC LabVIEW Solutions</h1>
          <p className="hero-subtitle">
            Explore our specialized LabVIEW services for automotive, aerospace, deep learning, and Industry 4.0 applications.
          </p>
          <button
            onClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })}
            className="hero-cta"
            aria-label="Explore Categories"
          >
            Explore Categories
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <div className="container">
          <h2 className="section-title">Our LabVIEW Expertise</h2>
          <p className="section-subtitle">
            Discover our tailored solutions across key industries, powered by LabVIEW innovation.
          </p>
          <div className="services-grid">
            {categories.map((category) => (
              <div className="service-card" key={category.title}>
                <img src={category.image} alt={category.title} className="service-image" loading="lazy" />
                <div className="service-content">
                  <h4 className="service-title">{category.title}</h4>
                  <p className="service-description">{category.description}</p>
                  <Link to={category.path} className="service-cta">
                    Explore {category.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Partner with VIWEBSYNC</h2>
          <p className="cta-subtitle">
            Ready to transform your projects with LabVIEW? Contact us to discuss your needs.
          </p>
          <Link to="/connect" className="cta-button" aria-label="Get in Touch">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LabviewServices;