import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Labview.css';

// Import Industry 4.0 images
import smartManufacturing from '../assets/smart-manufacturing.jpg';
import digitalTwin from '../assets/digital-twin.jpg';
import iiot from '../assets/iiot.jpg';
import robotics from '../assets/robotics.jpg';
import pharmaAutomation from '../assets/pharma-automation.jpg';

const industry4Services = [
  {
    id: 20,
    title: "Smart Manufacturing & Automation",
    description: "Implement smart manufacturing with automated, data-driven processes.",
    benefits: ["Increases efficiency", "Reduces costs", "Enhances traceability"],
    image: smartManufacturing,
    tag: "Smart Factory",
  },
  {
    id: 21,
    title: "Digital Twin Systems",
    description: "Create virtual models of physical assets for real-time monitoring and optimization.",
    benefits: ["Real-time insights", "Optimizes performance", "Reduces downtime"],
    image: digitalTwin,
    tag: "Digital Twin",
  },
  {
    id: 22,
    title: "Industrial IoT (IIoT)",
    description: "Connect and monitor industrial systems for enhanced operational efficiency.",
    benefits: ["Real-time monitoring", "Improves decision-making", "Scalable solutions"],
    image: iiot,
    tag: "IoT Solutions",
  },
  {
    id: 23,
    title: "Robotics & Cobots",
    description: "Deploy collaborative robots for flexible and efficient manufacturing.",
    benefits: ["Increases productivity", "Enhances safety", "Flexible automation"],
    image: robotics,
    tag: "Robotics",
  },
  {
    id: 24,
    title: "Pharma & Biotech 4.0",
    description: "Automate and optimize processes in pharmaceutical and biotech industries.",
    benefits: ["Ensures compliance", "Increases efficiency", "Supports innovation"],
    image: pharmaAutomation,
    tag: "Pharma Automation",
  },
];

const Industry4 = () => {
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
          <h1 className="hero-title">Industry 4.0 LabVIEW Solutions</h1>
          <p className="hero-subtitle">
            Transform manufacturing with smart automation, IoT, and digital twins powered by LabVIEW.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="hero-cta"
            aria-label="Discover Industry 4.0 Services"
          >
            Discover Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Industry 4.0 Services</h2>
          <p className="section-subtitle">
            Our LabVIEW solutions drive the future of smart manufacturing and industrial automation.
          </p>
          <div className="category-section">
            <h3 className="category-title">Industry 4.0</h3>
            <div className="services-grid">
              {industry4Services.map((service) => (
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
            Ready to revolutionize your manufacturing? Contact us to discuss your Industry 4.0 needs.
          </p>
          <Link to="/connect" className="cta-button" aria-label="Get in Touch">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industry4;