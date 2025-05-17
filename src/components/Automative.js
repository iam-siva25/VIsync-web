import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Labview.css';

// Import Automotive images
import hilTesting from '../assets/hil-testing.jpg';
import daqProcessing from '../assets/daq-processing.jpg';
import eolTesting from '../assets/eol-testing.jpg';
import bmsTesting from '../assets/bms-testing.jpg';
import networkTesting from '../assets/network-testing.jpg';
import testBench from '../assets/test-bench.jpg';
import dataLogging from '../assets/data-logging.jpg';
import adasTesting from '../assets/adas-testing.jpg';

const automotiveServices = [
  {
    id: 1,
    title: "Hardware-in-the-Loop (HIL) Testing",
    description: "Validate ECUs in a simulated environment to ensure reliability and safety without real-world risks.",
    benefits: ["Reduces testing costs", "Ensures ECU reliability", "Simulates complex scenarios"],
    image: hilTesting,
    tag: "ECU Validation",
  },
  {
    id: 2,
    title: "Data Acquisition (DAQ) & Signal Processing",
    description: "Capture and analyze real-time data for vehicle performance and diagnostics.",
    benefits: ["High-precision data", "Real-time insights", "Supports multiple protocols"],
    image: daqProcessing,
    tag: "Data Analysis",
  },
  {
    id: 3,
    title: "End-of-Line (EOL) Testing",
    description: "Automate quality checks at production end to ensure defect-free vehicles.",
    benefits: ["Improves quality", "Speeds up production", "Reduces manual errors"],
    image: eolTesting,
    tag: "Quality Assurance",
  },
  {
    id: 4,
    title: "Battery Management System (BMS) Testing",
    description: "Test BMS for electric vehicles to optimize performance and safety.",
    benefits: ["Enhances battery life", "Ensures safety", "Supports EV development"],
    image: bmsTesting,
    tag: "EV Testing",
  },
  {
    id: 5,
    title: "CAN/LIN/FlexRay Communication",
    description: "Ensure seamless vehicle network communication with robust protocol testing.",
    benefits: ["Reliable networks", "Supports multiple protocols", "Real-time diagnostics"],
    image: networkTesting,
    tag: "Network Testing",
  },
  {
    id: 6,
    title: "Test Bench Automation",
    description: "Automate test benches for efficient and repeatable testing processes.",
    benefits: ["Saves time", "Increases repeatability", "Reduces human error"],
    image: testBench,
    tag: "Automation",
  },
  {
    id: 7,
    title: "In-Vehicle Data Logging",
    description: "Log real-time vehicle data for performance analysis and diagnostics.",
    benefits: ["Comprehensive data capture", "Supports diagnostics", "Improves design"],
    image: dataLogging,
    tag: "Data Logging",
  },
  {
    id: 8,
    title: "ADAS & Sensor Fusion Testing",
    description: "Validate ADAS systems with simulated sensor data for safety and performance.",
    benefits: ["Ensures ADAS reliability", "Simulates real-world scenarios", "Supports autonomy"],
    image: adasTesting,
    tag: "ADAS Validation",
  },
];

const Automotive = () => {
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
          <h1 className="hero-title">Automotive LabVIEW Solutions</h1>
          <p className="hero-subtitle">
            Enhance vehicle testing and automation with our advanced LabVIEW solutions for ECUs, ADAS, and EVs.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="hero-cta"
            aria-label="Discover Automotive Services"
          >
            Discover Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Automotive Services</h2>
          <p className="section-subtitle">
            Our LabVIEW expertise drives efficiency and reliability in automotive testing and automation.
          </p>
          <div className="category-section">
            <h3 className="category-title">Automotive</h3>
            <div className="services-grid">
              {automotiveServices.map((service) => (
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
            Ready to advance your automotive projects? Contact us to discuss your testing and automation needs.
          </p>
          <Link to="/connect" className="cta-button" aria-label="Get in Touch">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Automotive;