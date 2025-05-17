import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Labview.css';

// Import Deep Learning images
import visualInspection from '../assets/visual-inspection.jpg';
import voiceControl from '../assets/voice-control.jpg';
import predictiveMaintenance from '../assets/predictive-maintenance.jpg';
import activityRecognition from '../assets/activity-recognition.jpg';
import objectTracking from '../assets/object-tracking.jpg';

const deepLearningServices = [
  {
    id: 9,
    title: "Visual Inspection (Defect Detection)",
    description: "Use AI to detect defects in manufacturing with high accuracy.",
    benefits: ["Improves quality control", "Reduces waste", "Automates inspection"],
    image: visualInspection,
    tag: "AI Inspection",
  },
  {
    id: 10,
    title: "Voice Command Control",
    description: "Implement voice-controlled interfaces for machines and systems.",
    benefits: ["Hands-free operation", "Enhances user experience", "Increases efficiency"],
    image: voiceControl,
    tag: "Voice AI",
  },
  {
    id: 11,
    title: "Predictive Maintenance",
    description: "Predict equipment failures to minimize downtime and maintenance costs.",
    benefits: ["Reduces downtime", "Saves costs", "Extends equipment life"],
    image: predictiveMaintenance,
    tag: "AI Maintenance",
  },
  {
    id: 12,
    title: "Human Activity Recognition",
    description: "Enable systems to recognize human activities for automation and safety.",
    benefits: ["Enhances safety", "Supports automation", "Improves monitoring"],
    image: activityRecognition,
    tag: "AI Recognition",
  },
  {
    id: 13,
    title: "Object Tracking in Robotics",
    description: "Track objects in real-time for precise robotic operations.",
    benefits: ["Improves robotic accuracy", "Supports automation", "Real-time tracking"],
    image: objectTracking,
    tag: "Robotics AI",
  },
];

const DeepLearning = () => {
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
          <h1 className="hero-title">Deep Learning LabVIEW Solutions</h1>
          <p className="hero-subtitle">
            Leverage AI-driven automation for defect detection, predictive maintenance, and robotics.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="hero-cta"
            aria-label="Discover Deep Learning Services"
          >
            Discover Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Deep Learning Services</h2>
          <p className="section-subtitle">
            Our AI-powered LabVIEW solutions enhance quality, efficiency, and automation.
          </p>
          <div className="category-section">
            <h3 className="category-title">Deep Learning</h3>
            <div className="services-grid">
              {deepLearningServices.map((service) => (
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
            Ready to integrate AI into your projects? Contact us to discuss your deep learning needs.
          </p>
          <Link to="/connect" className="cta-button" aria-label="Get in Touch">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DeepLearning;