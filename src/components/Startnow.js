import React, { useState } from 'react';
import '../styles/Startnow.css';

const Startnow = () => {
  const [status, setStatus] = useState('');
  const [inquiryType, setInquiryType] = useState('web-development');

  // Map inquiry types to email addresses
  const emailMap = {
    'web-development': 'siva.b@viwebsync.com', // Verify with FormSubmit
    'deep-learning': 'nivassr@viwebsync.com', // Verify with FormSubmit
    'labview': 'nivassr@viwebsync.com',
    'aerospace': 'nivassr@viwebsync.com',
  };

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
        setInquiryType('web-development');
      } else {
        setStatus('Error sending message. Ensure the email is verified with FormSubmit.');
      }
    } catch (error) {
      setStatus('Error sending message. Check your network or FormSubmit configuration.');
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="startnow-container">
      <h2>Start Now</h2>
      <form onSubmit={handleSubmit} className="startnow-form">
        <select
          name="inquiry-type"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value)}
          required
        >
          <option value="web-development">Web Development</option>
          <option value="deep-learning">Deep Learning</option>
          <option value="labview">LabVIEW</option>
          <option value="aerospace">Aerospace</option>
        </select>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone Number" />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <input type="text" name="_honeypot" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://www.viwebsync.com/" />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Startnow;