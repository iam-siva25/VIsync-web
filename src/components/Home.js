import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
   faIndustry, faChartBar, 
  faShieldAlt,  faMicrochip, faNetworkWired,
  faSatelliteDish, faRobot, faServer,  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { faImage, faObjectGroup, faMicrophoneAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

import TestSolutionsImage from '../assets/test-automation.jpg';
import EmbeddedSystemsImage from '../assets/embedded-systems.png';
import WebApplicationsImage from '../assets/web-design1.jpg';
import DataCollectionImage from '../assets/data-collection.jpg';
import TrainingImage from '../assets/training.jpg';
import OptimizationImage from '../assets/optimization.jpg';
import DeploymentImage from '../assets/deployment.jpg';



import '../styles/Home.css';

const Home = () => {
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [expandedCard, setExpandedCard] = useState(null);

  const [metrics, setMetrics] = useState({
    yearsOfOperation: 0,
    defenseProjects: 0,
    clientSatisfaction: 0
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setMetrics({
        yearsOfOperation: 0,
        defenseProjects: 0,
        clientSatisfaction: 0
      });
    }, 1000);
  }, []);

  const handleExpand = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero relative min-h-screen">
        <div className="hero-content">
          <div className="subtitle-container">
            <span className="hero-subtitle">Embedded | Web | Test Solutions</span>
          </div>
          <h1 className="hero-title">
            MAKING LabVIEW <br /> SMARTER and FASTER
          </h1>
          <p className="hero-description">
            From embedded platforms to enterprise web solutions and automated test systems, we deliver precision-built technology for modern industry.
          </p>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="industry-expertise">
        <div className="container">
          <h2 className="section-title">What We Specialize In</h2>
          <div className="industry-grid">
            {/* Deep Learning Toolchain Section */}
            <div className="industry-card">
              <div className="industry-image">
                <img src={DataCollectionImage} alt="Data Collection & Annotation" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>1. Data Collection & Annotation</h3>
                <p className={expandedCard === 'data' ? 'expanded' : ''}>
                  {expandedCard === 'data' ? (
                    <>Capture, clean, and annotate datasets with our LabVIEW-integrated tools like NNotate. Streamline your image, signal, or sensor data preparation for deep learning workflows.</>
                  ) : (
                    "LabVIEW-integrated tools for collecting and annotating data efficiently..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('data')}>
                  {expandedCard === 'data' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img src={TrainingImage} alt="Network Training" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>2. Network Training</h3>
                <p className={expandedCard === 'training' ? 'expanded' : ''}>
                  {expandedCard === 'training' ? (
                    <>Train deep neural networks directly using LabVIEW with DeepLTK. Integrate Python-based model training pipelines and visualize progress in real time.</>
                  ) : (
                    "Train models with DeepLTK, integrating Python and LabVIEW seamlessly..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('training')}>
                  {expandedCard === 'training' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img src={OptimizationImage} alt="Optimization & Quantization" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>3. Optimization & Quantization</h3>
                <p className={expandedCard === 'optimize' ? 'expanded' : ''}>
                  {expandedCard === 'optimize' ? (
                    <>Leverage CuLab to optimize and quantize trained models for speed and memory. Target FPGA, GPU, or CPU efficiently without leaving the LabVIEW environment.</>
                  ) : (
                    "Use CuLab to optimize and quantize models for efficient deployment..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('optimize')}>
                  {expandedCard === 'optimize' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            <div className="industry-card">
              <div className="industry-image">
                <img src={DeploymentImage} alt="Deployment for Inference" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>4. Deployment for Inference</h3>
                <p className={expandedCard === 'deploy' ? 'expanded' : ''}>
                  {expandedCard === 'deploy' ? (
                    <>Deploy neural networks to real-time targets including FPGAs and embedded systems. Our toolchain simplifies model conversion and runtime integration with LabVIEW.</>
                  ) : (
                    "Deploy models to FPGA and embedded targets using LabVIEW-based runtime..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('deploy')}>
                  {expandedCard === 'deploy' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Embedded Systems */}
            <div className="industry-card">
              <div className="industry-image">
                <img src={EmbeddedSystemsImage} alt="Embedded Systems Development" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>Embedded Systems</h3>
                <p className={expandedCard === 'embedded' ? 'expanded' : ''}>
                  {expandedCard === 'embedded' ? (
                    <>We develop real-time embedded applications for industries like automotive, aerospace, and defense. Our services include firmware development, board bring-up, RTOS integration, and custom driver creation for Linux and bare-metal platforms.</>
                  ) : (
                    "Real-time systems for automotive, aerospace, and industrial applications..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('embedded')}>
                  {expandedCard === 'embedded' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Web Applications */}
            <div className="industry-card">
              <div className="industry-image">
                <img src={WebApplicationsImage} alt="Web Applications" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>Web Application Development</h3>
                <p className={expandedCard === 'webapps' ? 'expanded' : ''}>
                  {expandedCard === 'webapps' ? (
                    <>We build high-performance, scalable web platforms with a focus on enterprise functionality and intuitive UX. Our stack includes React, Node.js, MongoDB, and cloud-native services for real-time data processing, dashboards, and automation portals.</>
                  ) : (
                    "Modern web platforms for enterprise, automation, and control systems..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('webapps')}>
                  {expandedCard === 'webapps' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            {/* Test Solutions */}
            <div className="industry-card">
              <div className="industry-image">
                <img src={TestSolutionsImage} alt="Automated Test Systems" loading="lazy" />
              </div>
              <div className="industry-content">
                <h3>Automated Test Systems</h3>
                <p className={expandedCard === 'test' ? 'expanded' : ''}>
                  {expandedCard === 'test' ? (
                    <>We design end-to-end test and validation systems tailored to defense, aerospace, and electronics manufacturing. Our ATE solutions feature PXI/LXI modular instrumentation, data acquisition, signal simulation, and comprehensive software frameworks.</>
                  ) : (
                    "End-to-end test systems for validation, simulation, and production QA..."
                  )}
                </p>
                <button className="read-more" onClick={() => handleExpand('test')}>
                  {expandedCard === 'test' ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions">
        {/* Applications Section */}
        <section className="solutions applications">
          <div className="container">
            <h2 className="section-title">Deep Learning Applications</h2>
            <div className="solutions-grid">
              <div className="solution-card">
                <FontAwesomeIcon icon={faImage} className="solution-icon" />
                <h3>Image Classification</h3>
                <p>Automatically categorize images into predefined classes using deep learning models. Ideal for defect detection, medical imaging, quality control, and more. Integrates seamlessly into LabVIEW-based inspection systems.</p>
              </div>
              <div className="solution-card">
                <FontAwesomeIcon icon={faObjectGroup} className="solution-icon" />
                <h3>Object Detection</h3>
                <p>Locate and identify multiple objects within images or video frames in real time. Enable precision tracking for industrial automation, robotics, security, and smart systems — fully supported by Ngene's CuLab and FPGA acceleration.</p>
              </div>
              <div className="solution-card">
                <FontAwesomeIcon icon={faMicrophoneAlt} className="solution-icon" />
                <h3>Voice Recognition</h3>
                <p>Convert spoken language into text or commands using powerful neural networks. Build intelligent voice-based HMI systems, audio classification tools, or embedded voice assistants — directly inside your LabVIEW workflows.</p>
              </div>
              <div className="solution-card">
                <FontAwesomeIcon icon={faChartLine} className="solution-icon" />
                <h3>Time Series Prediction</h3>
                <p>Predict future trends from sequential sensor or signal data using RNNs and LSTMs. Ideal for condition monitoring, predictive maintenance, and control system optimization in embedded environments.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <h2 className="section-title">Technical Services We Offer</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <FontAwesomeIcon icon={faMicrochip} className="solution-icon" />
              <h3>Embedded Firmware</h3>
              <p>Custom microcontroller and SoC-based firmware with real-time performance.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faLaptopCode} className="solution-icon" />
              <h3>Web Development</h3>
              <p>Full-stack solutions with React, Node.js, GraphQL, and RESTful services.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faSatelliteDish} className="solution-icon" />
              <h3>Signal Simulation</h3>
              <p>RF, digital, and analog signal generation for hardware-in-the-loop testing.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faRobot} className="solution-icon" />
              <h3>Test Automation</h3>
              <p>Custom automation frameworks for electronics validation and QA workflows.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faServer} className="solution-icon" />
              <h3>Data Acquisition</h3>
              <p>DAQ systems with real-time analysis and high-throughput data pipelines.</p>
            </div>
            <div className="solution-card">
              <FontAwesomeIcon icon={faShieldAlt} className="solution-icon" />
              <h3>Secure Systems</h3>
              <p>Rugged and secure designs for mission-critical applications in defense sectors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics" ref={metricsRef}>
        <div className="container">
          <h2 className="section-title">Our Track Record</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <FontAwesomeIcon icon={faIndustry} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.yearsOfOperation} duration={2} className="metric-number" />}
              <p className="metric-label">Years in Engineering</p>
            </div>
            <div className="metric-card">
              <FontAwesomeIcon icon={faNetworkWired} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.defenseProjects} duration={2} className="metric-number" />}
              <p className="metric-label">Projects Delivered</p>
            </div>
            <div className="metric-card">
              <FontAwesomeIcon icon={faChartBar} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.clientSatisfaction} duration={2} suffix="%" className="metric-number" />}
              <p className="metric-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>We partner with you from design to deployment. Let’s build something powerful together.</p>
          <Link to="/start-now" className="cta-button primary" onClick={scrollToTop}>
            Contact Our Experts
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;