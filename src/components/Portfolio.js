import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      tag: 'Web Development',
      description: 'Building a scalable online store with seamless payment integration for retail businesses.',
      status: 'In Development',
    },
    {
      title: 'HIL Testing System',
      tag: 'LabVIEW Automation',
      description: 'Developing a real-time hardware-in-the-loop testing solution for automotive ECUs.',
      status: 'In Development',
    },
    {
      title: 'Telehealth Web App',
      tag: 'Web Development',
      description: 'Crafting a secure platform for remote healthcare consultations and patient management.',
      status: 'In Development',
    },
    {
      title: 'Predictive Maintenance AI',
      tag: 'LabVIEW & AI',
      description: 'Creating an AI-driven system to predict equipment failures using LabVIEW and DeepLTK.',
      status: 'In Development',
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2>Our Portfolio</h2>
        <p className="portfolio-text">
          As a passionate startup, we’re hard at work building innovative solutions in LabVIEW automation and modern web development. Explore our ongoing projects below and see how we’re shaping the future!
        </p>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <span className="project-tag">{project.tag}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-status">{project.status}</p>
              <Link to="/connect" className="project-cta">Learn More</Link>
            </div>
          ))}
        </div>
        <ul className="portfolio-list">
          <li>LabVIEW-Powered Automation & AI</li>
          <li>Custom Web & Mobile Platforms</li>
          <li>Real-Time Data Visualization</li>
          <li>Secure E-commerce & Telehealth Solutions</li>
        </ul>
        <p className="portfolio-note">
          Want to collaborate on your next project? <Link to="/connect">Contact us</Link> to discuss your ideas!
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
