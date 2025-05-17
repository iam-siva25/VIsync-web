import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronUp, faChevronDown, faIndustry, faNetworkWired, faChartBar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const Home = () => {
  // Technical Services slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const serviceSlides = [
    {
      title: 'LabVIEW Testing & Automation',
      desc: 'HIL, DAQ, EOL, and BMS testing for automotive excellence.',
      link: '/solutions/labview-testing'
    },
    {
      title: 'Aerospace & Defense',
      desc: 'Missile checkout, RADAR, and SATCOM systems for defense.',
      link: '/solutions/aerospace-defense'
    },
    {
      title: 'Embedded Systems',
      desc: 'Real-time control, FPGA, and edge computing solutions.',
      link: '/solutions/embedded-systems'
    },
    {
      title: 'Deep Learning',
      desc: 'Visual inspection, predictive maintenance, and Edge AI.',
      link: '/solutions/deep-learning'
    },
    {
      title: 'Industry 4.0',
      desc: 'Smart manufacturing, IIoT, and digital twins.',
      link: '/solutions/industry-4-0'
    }
  ];

  // Auto-slide for Technical Services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [serviceSlides.length]);

  // Manual navigation
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + serviceSlides.length) % serviceSlides.length);

  // Metrics animation trigger
  const [metricsRef, metricsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Metrics data
  const metrics = {
    yearsOfOperation: 0,
    defenseProjects: 0,
    clientSatisfaction: 100
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Scroll to top for navigation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants for slideshow (down to up)
  const slideTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  };

  // Animation variants for fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  };

  return (
    <main className="home-container">
      {/* Hero Section */}
      <motion.section
        className="hero relative min-h-screen"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="hero-container">
          <div className="hero-content">
            <div className="subtitle-container">
              <span className="hero-subtitle">Automation | Testing | Innovation</span>
            </div>
            <h1 className="hero-title">
              MAKING LabVIEW <br /> SMARTER and FASTER
            </h1>
            <p className="hero-description">
              Empowering automotive, aerospace, and industrial sectors with cutting-edge LabVIEW solutions for automation, testing, and data logging.
            </p>
            <Link to="/start-now" className="hero-cta" onClick={scrollToTop}>
              Start Your Project <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Technical Services Section (Slideshow) */}
      <section className="technical-services-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Technical Services
          </motion.h2>
          <p className="section-subtitle">Tailored solutions for efficiency, quality, and traceability.</p>
          <div className="slideshow-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="slide-card"
                {...slideTransition}
              >
                <h3>{serviceSlides[currentSlide].title}</h3>
                <p>{serviceSlides[currentSlide].desc}</p>
                <Link
                  to={serviceSlides[currentSlide].link}
                  className="slide-cta"
                  onClick={scrollToTop}
                >
                  Learn More <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
                </Link>
              </motion.div>
            </AnimatePresence>
            <button className="slide-button prev" onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button className="slide-button next" onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics-section" ref={metricsRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Track Record
          </motion.h2>
          <div className="metrics-grid">
            <motion.div
              className="metric-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <FontAwesomeIcon icon={faIndustry} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.yearsOfOperation} duration={2} className="metric-number" />}
              <p className="metric-label">Years in Engineering</p>
            </motion.div>
            <motion.div
              className="metric-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <FontAwesomeIcon icon={faNetworkWired} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.defenseProjects} duration={2} className="metric-number" />}
              <p className="metric-label">Projects Delivered</p>
            </motion.div>
            <motion.div
              className="metric-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <FontAwesomeIcon icon={faChartBar} className="metric-icon" />
              {metricsInView && <CountUp end={metrics.clientSatisfaction} duration={2} suffix="%" className="metric-number" />}
              <p className="metric-label">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Ready to Transform Your Business?</h2>
            <p>Partner with VIWEBSYNC for innovative LabVIEW and IT solutions tailored to your industry.</p>
            <Link to="/start-now" className="cta-button" onClick={scrollToTop}>
              Get Started Now <FontAwesomeIcon icon={faArrowRight} className="cta-icon" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;