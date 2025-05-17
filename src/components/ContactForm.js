import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch('https://formsubmit.co/ajax/admin@viwebsync.com', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        form.reset();
        // Manual redirect to destination URL
        window.location.href = 'https://www.viwebsync.com/';
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
    }
  };

  const projectTypes = [
    { value: 'labview-hil-testing', label: 'LabVIEW HIL Testing' },
    { value: 'labview-digital-twin', label: 'LabVIEW Digital Twin' },
    { value: 'labview-ai-automation', label: 'LabVIEW AI Automation' },
    { value: 'web-ecommerce-platform', label: 'Web E-commerce Platform' },
    { value: 'web-telehealth-app', label: 'Web Telehealth Application' },
    { value: 'web-custom-website', label: 'Web Custom Website Design' },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-container">
          <h1 className="hero-heading">Let’s Build the Future Together</h1>
          <p className="hero-subtitle">
            Connect with VIWEBSYNC to explore LabVIEW automation, AI-driven solutions, and modern web development for your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="info-heading">Get in Touch</h2>
              <p className="info-text">
                We’re here to help you transform your ideas into reality with our expertise in LabVIEW and web development. Reach out today!
              </p>
              <ul className="info-list">
                <li>
                  <strong>Phone:</strong> +91 98765 43210
                </li>
                <li>
                  <strong>Email:</strong> admin@viwebsync.com
                </li>
                <li>
                  <strong>Follow Us:</strong>
                  <div className="social-links">
                    <Link to="https://linkedin.com/company/viwebsync" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      LinkedIn
                    </Link>
                    <Link to="https://twitter.com/viwebsync" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      Twitter
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="form-heading">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    aria-label="Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    aria-label="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <select name="projectType" required aria-label="Project Type">
                    <option value="" disabled selected>Select Project Type</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    aria-label="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    required
                    aria-label="Your Message"
                  ></textarea>
                </div>
                <input type="text" name="_honeypot" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="source_url" value="https://viwebsync.com/start-now" />
                <input type="hidden" name="_next" value="https://www.viwebsync.com/" />
                <button type="submit">Send Message</button>
              </form>
              {status && <p className="form-status">{status}</p>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;