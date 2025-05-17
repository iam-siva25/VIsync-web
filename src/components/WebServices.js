import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WebServices.css';

// Import images from src/assets/
import customWebsiteDesign from '../assets/custom-website-design.jpg';
import ecommercePlatforms from '../assets/e-commerce-platforms.jpg';
import paymentGateway from '../assets/payment-gateway.jpg';
import seoOptimization from '../assets/seo-optimization.jpg';
import learningManagement from '../assets/learning-management.jpg';
import webAppsEducation from '../assets/web-apps-education.jpg';
import cybersecurityEducation from '../assets/cybersecurity-education.jpg';
import cmsDevelopmentEducation from '../assets/cms-development-education.jpg';
import onlineBankingApps from '../assets/online-banking-apps.jpg';
import cybersecurityFinance from '../assets/cybersecurity-finance.jpg';
import customWebsiteDesignFinance from '../assets/custom-website-design-finance.jpg';
import seoOptimizationFinance from '../assets/seo-optimization-finance.jpg';
import telehealth from '../assets/telehealth.jpg';
import webAppsHealthcare from '../assets/web-apps-healthcare.jpg';
import cybersecurityHealthcare from '../assets/cybersecurity-healthcare.jpg';
import cmsDevelopmentHealthcare from '../assets/cms-development-healthcare.jpg';
import streamingPlatforms from '../assets/streaming-platforms.jpg';
import mobileApps from '../assets/mobile-apps.jpg';
import customWebsiteDesignMedia from '../assets/custom-website-design-media.jpg';
import seoOptimizationMedia from '../assets/seo-optimization-media.jpg';
import propertyListings from '../assets/property-listings.jpg';
import virtualTours from '../assets/virtual-tours.jpg';
import webAppsRealEstate from '../assets/web-apps-real-estate.jpg';
import seoOptimizationRealEstate from '../assets/seo-optimization-real-estate.jpg';

// Web Development Services Data
const webServices = [
  {
    category: "Retail & E-commerce",
    services: [
      {
        id: 1,
        title: "Custom Website Design",
        description: "Create tailored websites to enhance brand identity and user engagement for e-commerce businesses.",
        benefits: ["Improves user experience", "Boosts brand visibility", "Drives conversions"],
        image: customWebsiteDesign,
        tag: "Web Design",
      },
      {
        id: 2,
        title: "E-commerce Platforms",
        description: "Develop scalable e-commerce platforms with seamless product management and checkout processes.",
        benefits: ["Supports high traffic", "Streamlines operations", "Enhances customer satisfaction"],
        image: ecommercePlatforms,
        tag: "E-commerce",
      },
      {
        id: 3,
        title: "Payment Gateway Integration",
        description: "Integrate secure payment gateways for smooth and safe online transactions.",
        benefits: ["Ensures secure payments", "Supports multiple methods", "Reduces cart abandonment"],
        image: paymentGateway,
        tag: "Payments",
      },
      {
        id: 4,
        title: "SEO & Performance Optimization",
        description: "Optimize websites for search engines and performance to increase visibility and speed.",
        benefits: ["Improves search rankings", "Enhances load times", "Drives organic traffic"],
        image: seoOptimization,
        tag: "SEO",
      },
    ],
  },
  {
    category: "Education",
    services: [
      {
        id: 5,
        title: "Learning Management Systems",
        description: "Build LMS platforms for delivering online courses and managing educational content.",
        benefits: ["Simplifies course delivery", "Enhances student engagement", "Scalable solutions"],
        image: learningManagement,
        tag: "LMS",
      },
      {
        id: 6,
        title: "Web Application Development",
        description: "Develop custom web apps for educational tools, quizzes, and interactive learning.",
        benefits: ["Interactive learning", "Supports diverse formats", "Improves accessibility"],
        image: webAppsEducation,
        tag: "Web Apps",
      },
      {
        id: 7,
        title: "Cybersecurity Services",
        description: "Implement security measures to protect educational platforms and user data.",
        benefits: ["Ensures data privacy", "Prevents breaches", "Builds user trust"],
        image: cybersecurityEducation,
        tag: "Security",
      },
      {
        id: 8,
        title: "CMS Development",
        description: "Create content management systems for easy management of educational resources.",
        benefits: ["Simplifies content updates", "Supports collaboration", "User-friendly interface"],
        image: cmsDevelopmentEducation,
        tag: "CMS",
      },
    ],
  },
  {
    category: "Finance & Banking",
    services: [
      {
        id: 9,
        title: "Online Banking Apps",
        description: "Develop secure online banking apps for seamless financial transactions and account management.",
        benefits: ["Enhances user convenience", "Ensures secure transactions", "Supports mobile access"],
        image: onlineBankingApps,
        tag: "Banking Apps",
      },
      {
        id: 10,
        title: "Cybersecurity Services",
        description: "Provide robust cybersecurity solutions to protect financial data and transactions.",
        benefits: ["Prevents fraud", "Ensures compliance", "Builds customer trust"],
        image: cybersecurityFinance,
        tag: "Security",
      },
      {
        id: 11,
        title: "Custom Website Design",
        description: "Create professional websites for financial institutions to enhance credibility and engagement.",
        benefits: ["Boosts brand trust", "Improves user experience", "Drives client acquisition"],
        image: customWebsiteDesignFinance,
        tag: "Web Design",
      },
      {
        id: 12,
        title: "SEO & Performance Optimization",
        description: "Optimize financial websites for search visibility and fast performance.",
        benefits: ["Increases online presence", "Reduces load times", "Attracts clients"],
        image: seoOptimizationFinance,
        tag: "SEO",
      },
    ],
  },
  {
    category: "Healthcare",
    services: [
      {
        id: 13,
        title: "Telehealth Platforms",
        description: "Develop telehealth platforms for remote consultations and patient management.",
        benefits: ["Improves patient access", "Streamlines consultations", "Ensures privacy"],
        image: telehealth,
        tag: "Telehealth",
      },
      {
        id: 14,
        title: "Web Application Development",
        description: "Create web apps for healthcare management, diagnostics, and patient engagement.",
        benefits: ["Enhances care delivery", "Supports data integration", "Improves accessibility"],
        image: webAppsHealthcare,
        tag: "Web Apps",

      },
      {
        id: 15,
        title: "Cybersecurity Services",
        description: "Implement security solutions to protect healthcare data and comply with regulations.",
        benefits: ["Ensures HIPAA compliance", "Protects patient data", "Builds trust"],
        image: cybersecurityHealthcare,
        tag: "Security",
      },
      {
        id: 16,
        title: "CMS Development",
        description: "Build CMS platforms for managing healthcare content and patient resources.",
        benefits: ["Simplifies content management", "Supports scalability", "User-friendly design"],
        image: cmsDevelopmentHealthcare,
        tag: "CMS",
      },
    ],
  },
  {
    category: "Entertainment & Media",
    services: [
      {
        id: 17,
        title: "Streaming Platforms",
        description: "Develop streaming platforms for video and audio content delivery.",
        benefits: ["Supports high-quality streaming", "Scales with users", "Enhances viewer experience"],
        image: streamingPlatforms,
        tag: "Streaming",
      },
      {
        id: 18,
        title: "Mobile App Development",
        description: "Create mobile apps for media consumption and user engagement.",
        benefits: ["Improves accessibility", "Enhances user retention", "Supports offline access"],
        image: mobileApps,
        tag: "Mobile Apps",
      },
      {
        id: 19,
        title: "Custom Website Design",
        description: "Design engaging websites for media brands to attract and retain audiences.",
        benefits: ["Boosts brand appeal", "Improves user engagement", "Drives traffic"],
        image: customWebsiteDesignMedia,
        tag: "Web Design",
      },
      {
        id: 20,
        title: "SEO & Performance Optimization",
        description: "Optimize media websites for search visibility and fast load times.",
        benefits: ["Increases discoverability", "Reduces bounce rates", "Attracts viewers"],
        image: seoOptimizationMedia,
        tag: "SEO",
      },
    ],
  },
  {
    category: "Real Estate",
    services: [
      {
        id: 21,
        title: "Property Listing Platforms",
        description: "Build platforms for listing and managing real estate properties.",
        benefits: ["Streamlines listings", "Improves user experience", "Drives sales"],
        image: propertyListings,
        tag: "Listings",
      },
      {
        id: 22,
        title: "Virtual Tour Integration",
        description: "Integrate virtual tours into real estate websites for immersive property viewing.",
        benefits: ["Enhances buyer interest", "Reduces physical visits", "Improves engagement"],
        image: virtualTours,
        tag: "Virtual Tours",
      },
      {
        id: 23,
        title: "Web Application Development",
        description: "Develop web apps for property management and client interactions.",
        benefits: ["Simplifies management", "Improves client access", "Supports scalability"],
        image: webAppsRealEstate,
        tag: "Web Apps",
      },
      {
        id: 24,
        title: "SEO & Performance Optimization",
        description: "Optimize real estate websites for search engines and performance.",
        benefits: ["Increases visibility", "Improves load times", "Attracts buyers"],
        image: seoOptimizationRealEstate,
        tag: "SEO",
      },
    ],
  },
];

const WebServices = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="web-services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">VIWEBSYNC Web Development Solutions</h1>
          <p className="hero-subtitle">
            Elevate your business with our custom web, app, and e-commerce solutions tailored for retail, education, finance, healthcare, media, and real estate.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="hero-cta"
            aria-label="Discover Our Services"
          >
            Discover Our Services
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Web Development Services</h2>
          <p className="section-subtitle">
            From e-commerce platforms to telehealth solutions, our web services drive innovation and efficiency across industries.
          </p>
          {webServices.map((category) => (
            <div key={category.category} className="category-section">
              <h3 className="category-title">{category.category}</h3>
              <div className="services-grid">
                {category.services.map((service) => (
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
                      <Link
                        to={`/web-development/${category.category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="service-cta"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Our Technology Stack</h2>
          <p className="section-subtitle">
            Leveraging modern frameworks and tools for robust, scalable web solutions.
          </p>
          <div className="tech-stack-grid">
            <div className="tech-card">
              <h3>Frontend</h3>
              <p>React, Vue.js, Angular</p>
            </div>
            <div className="tech-card">
              <h3>Backend</h3>
              <p>Node.js, Django, .NET</p>
            </div>
            <div className="tech-card">
              <h3>Databases</h3>
              <p>MySQL, MongoDB, PostgreSQL</p>
            </div>
            <div className="tech-card">
              <h3>Cloud</h3>
              <p>AWS, Azure, Google Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Partner with VIWEBSYNC</h2>
          <p className="cta-subtitle">
            Ready to transform your business with our web development expertise? Contact us to discuss your needs and drive innovation.
          </p>
          <Link to="/connect" className="cta-button" aria-label="Get in Touch">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebServices;
