import React from 'react';
import { Link } from 'react-router-dom';
import TeamImg from '../assets/values.jpg';

import LabVIEWImg from '../assets/mission.jpg';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-container">
          <h1 className="hero-heading">Pioneering Innovation with LabVIEW & Web Development</h1>
          <p className="hero-subtitle">
            Empowering industries with intelligent LabVIEW automation and modern web solutions for seamless, scalable performance.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="text-content">
            <h2 className="section-heading">Our Mission</h2>
            <p className="section-description">
              At VIWEBSYNC, we are a technology leader specializing in **LabVIEW-powered automation** and **AI-driven web development**. Our mission is to bridge cutting-edge LabVIEW solutions with modern web technologies, delivering intelligent, scalable systems for industries like automotive, aerospace, healthcare, and e-commerce. <br /><br />
              With LabVIEW as our foundation, we integrate AI tools like DeepLTK and NNotate to build smart test systems, real-time analytics, and embedded solutions. Simultaneously, our full-stack web development expertise creates responsive, secure platforms—from e-commerce sites to telehealth applications—connecting edge intelligence to cloud-based interfaces. Whether it’s automating test benches or deploying custom websites, we simplify complexity and drive innovation.
            </p>
            <div className="mission-points">
              <div className="mission-card">
                <h3>LabVIEW & AI Integration</h3>
                <p>Our AI toolchain (DeepLTK, NNotate) enables seamless neural network training and deployment within LabVIEW, powering intelligent automation and analytics.</p>
              </div>
              <div className="mission-card">
                <h3>Web Development Excellence</h3>
                <p>We build responsive, scalable web platforms for e-commerce, education, and healthcare, integrating with LabVIEW systems for real-time control and visualization.</p>
              </div>
              <div className="mission-card">
                <h3>Embedded-to-Cloud Solutions</h3>
                <p>From FPGA-based real-time systems to cloud-native web apps, we deliver end-to-end solutions with security, scalability, and performance in mind.</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img src={LabVIEWImg} alt="LabVIEW and Web Innovation" className="about-img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="section-container">
          <h2 className="section-heading">Why VIWEBSYNC?</h2>
          <p className="section-description">
            With deep expertise in **LabVIEW architecture** and **modern web development**, we deliver comprehensive solutions that combine real-time automation with user-friendly, scalable web interfaces. Our multidisciplinary team excels in test engineering, AI integration, embedded systems, and full-stack development, ensuring success across automotive, aerospace, healthcare, and e-commerce sectors.
          </p>
          <ul className="why-us-list">
            <li>✔ LabVIEW-driven automation with AI and real-time capabilities</li>
            <li>✔ Custom web platforms for e-commerce, telehealth, and education</li>
            <li>✔ Seamless embedded-to-cloud integration with robust security</li>
            <li>✔ Proven success in mission-critical applications across industries</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <div className="image-content">
            <img src={TeamImg} alt="VIWEBSYNC Team" className="about-img" loading="lazy" />
          </div>
          <div className="text-content">
            <h2 className="section-heading">Our Team</h2>
            <p className="section-description">
              Our team of **LabVIEW architects**, **AI engineers**, **embedded developers**, and **full-stack web experts** is passionate about delivering intelligent solutions. From automating HIL testing in automotive to building telehealth platforms, we combine technical expertise with industry knowledge to solve complex challenges and drive your success.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Partner with VIWEBSYNC</h2>
          <p>Ready to transform your projects with LabVIEW automation and modern web solutions? Let’s innovate together.</p>
          <Link to="/connect" className="cta-button primary">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;