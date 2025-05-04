import React from 'react';
import TeamImg from '../assets/values.jpg';
import WebImg from '../assets/mission.jpg';
import LabVIEWImg from '../assets/mission.jpg';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-container">
          <h1 className="hero-heading">Leading the Future of Engineering with LabVIEW & AI</h1>
          <p className="hero-subtitle">Powering embedded intelligence, automation, and innovation through LabVIEW-centered technologies</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="text-content">
            <h2 className="section-heading">Our Mission</h2>
            <p className="section-description">
              At VI Web Sync, LabVIEW isn't just part of what we do — it’s the **foundation** of our engineering philosophy. Our mission is to make **LabVIEW smarter and faster** by integrating it with the latest in AI, embedded computing, and web technologies. Whether we're building intelligent test systems, deploying neural networks to FPGAs, or developing data-driven web platforms, LabVIEW remains at the core of everything we deliver.
            </p>
            <div className="mission-points">
              <div className="mission-card">
                <h3>LabVIEW & AI Integration</h3>
                <p>Our unique AI toolchain—featuring DeepLTK, NNotate, CuLab, and FPGA deployment—empowers developers to build, train, and deploy deep neural networks entirely within the LabVIEW environment.</p>
              </div>
              <div className="mission-card">
                <h3>Embedded & Real-Time Solutions</h3>
                <p>We create rugged, deterministic systems for aerospace, defense, and industrial automation. From firmware to FPGA integration, our embedded work complements LabVIEW’s real-time capabilities.</p>
              </div>
              <div className="mission-card">
                <h3>Enterprise Web Applications</h3>
                <p>Our full-stack web services enable remote monitoring, control, and visualization of LabVIEW systems—bridging edge intelligence with modern web interfaces and cloud analytics.</p>
              </div>
            </div>
          </div>
          <div className="image-content">
            <img src={LabVIEWImg} alt="LabVIEW Innovation" className="about-img" />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="section-container">
          <h2 className="section-heading">Why VI Web Sync?</h2>
          <p className="section-description">
            With a strong foundation in **LabVIEW architecture**, we go beyond conventional system design to offer complete, AI-powered automation and analytics. Our multidisciplinary team spans test engineering, embedded systems, and cloud-native development—ensuring end-to-end delivery for mission-critical applications.
          </p>
          <ul className="why-us-list">
            <li>✔ Full-cycle LabVIEW + Deep Learning integration</li>
            <li>✔ Real-time system deployment with FPGA and PXI platforms</li>
            <li>✔ Embedded-to-cloud engineering with security and scalability in mind</li>
            <li>✔ Proven track record in defense, aerospace, and industrial sectors</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <div className="image-content">
            <img src={TeamImg} alt="Our Team" className="about-img" />
          </div>
          <div className="text-content">
            <h2 className="section-heading">Our Team</h2>
            <p className="section-description">
              We are a passionate team of LabVIEW architects, AI engineers, embedded developers, and full-stack web experts—united by a shared goal: to simplify complexity through intelligent, LabVIEW-powered solutions. Whether you're deploying neural networks on FPGAs or automating test benches, our team brings both domain knowledge and technical rigor.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Partner with the LabVIEW AI Experts</h2>
          <p>Ready to turn your ideas into intelligent, real-time, and scalable systems? Let’s build the future together.</p>
          <button className="cta-button primary">Contact Us</button>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
