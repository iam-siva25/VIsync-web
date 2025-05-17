import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Labview.css';

// Import Aerospace and Defense images
import missileCheckout from '../assets/missile-checkout.jpg';
import radarSimulation from '../assets/radar-simulation.jpg';
import sarSimulator from '../assets/sar-simulator.jpg';
import cableHarness from '../assets/cable-harness.jpg';
import anomalyDetection from '../assets/anomaly-detection.jpg';
import ate from '../assets/ate.jpg';

const aerospaceDefenseServices = [
  {
    id: 14,
    title: "Ballistic Missile Checkout & Analysis",
    description: "Validate missile systems with comprehensive testing and analysis.",
    benefits: ["Ensures mission success", "High reliability", "Detailed diagnostics"],
    image: missileCheckout,
    tag: "Missile Testing",
  },
  {
    id: 15,
    title: "RADAR Target & ECHO Simulation",
    description: "Simulate radar targets for realistic testing of radar systems.",
    benefits: ["Realistic scenarios", "Improves radar accuracy", "Cost-effective testing"],
    image: radarSimulation,
    tag: "Radar Testing",
  },
  {
    id: 16,
    title: "SAR Environment Simulator",
    description: "Simulate synthetic aperture radar environments for accurate testing.",
    benefits: ["High-fidelity simulation", "Supports complex scenarios", "Enhances radar design"],
    image: sarSimulator,
    tag: "SAR Testing",
  },
  {
    id: 17,
    title: "Cable Harness Tester",
    description: "Test cable harnesses for reliability in critical aerospace applications.",
    benefits: ["Ensures connectivity", "Reduces failures", "High reliability"],
    image: cableHarness,
    tag: "Harness Testing",
  },
  {
    id: 18,
    title: "Anomaly Detection in Manufacturing",
    description: "Detect anomalies in aerospace manufacturing data to ensure quality.",
    benefits: ["Improves quality", "Reduces defects", "Saves costs"],
    image: anomalyDetection,
    tag: "AI Quality",
  },
  {
    id: 19,
    title: "Automated Test Equipment (ATE)",
    description: "Automate testing for aerospace systems to ensure reliability and efficiency.",
    benefits: ["Saves time", "Increases accuracy", "Supports complex systems"],
    image: ate,
    tag: "Test Automation",
  },
];

const AerospaceDefense = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="labview-services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Aerospace and Defense LabVIEW Solutions</h1>
          <p className="hero-subtitle">
            Ensure reliability and precision in missile systems, radar, and automated testing with LabVIEW.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="hero-cta"
            aria-label="Discover Aerospace and Defense Services"
          >
            Discover Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Aerospace and Defense Services</h2>
          <p className="section-subtitle">
            Our LabVIEW solutions deliver robust testing and automation for critical aerospace applications.
          </p>
          <div className="category-section">
            <h3 className="category-title">Aerospace and Defense</h3>
            <div className="services-grid">
              {aerospaceDefenseServices.map((service) => (
                <div className="service-card" key={service.id}>
                  <img src={service.image} alt={service.title} className="service-image" loading="lazy" />
                  <div className="service-content">
                    <h4 className="service-title">{service.title}</h4>
                    <span className="service-tag">{service.tag}</span>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-benefits">
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Our Technology Stack</h2>
          <p className="section-subtitle">
            Powered by LabVIEW and integrated with cutting-edge hardware and software for unmatched performance.
          </p>
          <div className="tech-stack-grid">
            <div className="tech-card">
              <h3>Platforms</h3>
              <p>LabVIEW, NI VeriStand, Windows, Real-Time Systems</p>
            </div>
            <div className="tech-card">
              <h3>Hardware</h3>
              <p>NI PXI, CompactRIO, FPGA, NVIDIA GPUs</p>
            </div>
            <div className="tech-card">
              <h3>Protocols</h3>
              <p>CAN, LIN, FlexRay, Automotive Ethernet</p>
            </div>
            <div className="tech-card">
              <h3>AI & Data</h3>
              <p>DeepLTK, NNotate, Vision Datasets, Predictive Analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Partner with VIWEBSYNC</h2>
          <p className="cta-subtitle">
            Ready to advance your aerospace projects? Contact us to discuss your testing and automation needs.
          </p>
          <Link to="/connect" className="cta-button" aria-label="Get in Touch">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AerospaceDefense;