import React, { useState } from 'react';
import '../styles/Startnow.css';

const Startnow = () => {
  const [status, setStatus] = useState('');
  const [inquiryType, setInquiryType] = useState('web-ecommerce-platform');

  // Map inquiry types to email addresses
  const emailMap = {
    'web-ecommerce-platform': 'siva.b@viwebsync.com',
    'web-telehealth-app': 'siva.b@viwebsync.com',
    'web-custom-website': 'siva.b@viwebsync.com',
    'labview-hil-testing': 'nivassr@viwebsync.com',
    'labview-digital-twin': 'nivassr@viwebsync.com',
    'labview-ai-automation': 'nivassr@viwebsync.com',
    'aerospace-testing': 'nivassr@viwebsync.com',
  };

  const inquiryOptions = [
    { value: 'web-ecommerce-platform', label: 'Web E-commerce Platform' },
    { value: 'web-telehealth-app', label: 'Web Telehealth Application' },
    { value: 'web-custom-website', label: 'Web Custom Website Design' },
    { value: 'labview-hil-testing', label: 'LabVIEW HIL Testing' },
    { value: 'labview-digital-twin', label: 'LabVIEW Digital Twin' },
    { value: 'labview-ai-automation', label: 'LabVIEW AI Automation' },
    { value: 'aerospace-testing', label: 'Aerospace Testing Solutions' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = e.target;
    const data = new FormData(form);
    const email = emailMap[inquiryType];

    if (!email) {
      setStatus('Error: Invalid inquiry type.');
      return;
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        form.reset();
        setInquiryType('web-ecommerce-platform');
      } else {
        setStatus('Error sending message. Ensure the email is verified with FormSubmit.');
      }
    } catch (error) {
      setStatus('Error sending message. Check your network or FormSubmit configuration.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="startnow-page">
      {/* Hero Section */}
      <section className="startnow-hero">
        <div className="hero-container">
          <h1 className="hero-heading">Launch Your Project with VIWEBSYNC</h1>
          <p className="hero-subtitle">
            Ready to innovate with LabVIEW automation or build a cutting-edge web platform? Let’s get started today.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="startnow-form-section">
        <div className="container">
          <div className="startnow-form-card">
            <h2 className="form-heading">Tell Us About Your Project</h2>
            <form onSubmit={handleSubmit} className="startnow-form">
              <div className="form-group">
                <label htmlFor="inquiry-type">Project Type</label>
                <select
                  id="inquiry-type"
                  name="inquiry-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  required
                  aria-label="Project Type"
                >
                  {inquiryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                  aria-label="Full Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  aria-label="Email Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  aria-label="Subject"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  aria-label="Your Message"
                ></textarea>
              </div>
              <input type="text" name="_honeypot" style={{ display: 'none' }} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.viwebsync.com/" />
              <button type="submit">Send Message</button>
            </form>
            {status && <p className="form-status">{status}</p>}
          </div>
        </div>
      </section>

      {/* Why Start Now Section */}
      <section className="why-startnow-section">
        <div className="container">
          <h2 className="section-heading">Why Start Now?</h2>
          <div className="why-startnow-grid">
            <div className="why-card">
              <h3>Expert LabVIEW Solutions</h3>
              <p>Our team delivers advanced LabVIEW automation, from HIL testing to AI-driven digital twins, tailored for automotive and aerospace.</p>
            </div>
            <div className="why-card">
              <h3>Scalable Web Platforms</h3>
              <p>Launch e-commerce sites, telehealth apps, or custom websites with our full-stack expertise, built for performance and growth.</p>
            </div>
            <div className="why-card">
              <h3>Rapid Project Kickoff</h3>
              <p>As a startup, we’re agile and client-focused, ensuring your project starts quickly with clear communication and results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Startnow;