import React from 'react';
import '../styles/ContactForm.css';


const ContactForm = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form
        action="https://formsubmit.co/sivabtrade25@gmail.com"
        method="POST"
        target="_blank"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone Number" />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>

        {/* Optional: disable captcha and redirect after submission */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thankyou" />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
