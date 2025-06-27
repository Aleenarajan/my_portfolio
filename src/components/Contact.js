import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        📧 <strong>Email:</strong> 
        <a href="mailto:aleenamariya0208@gmail.com"> aleenamariya0208@gmail.com</a>
      </p>
 <p>
        📞 <strong>Phone:</strong> <a href="tel:+919061850536">+91 9061850536</a>
      </p>

      <p>
        🔗 <strong>LinkedIn:</strong> 
        <a 
          href="https://www.linkedin.com/in/aleena-mariya-rajan" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          linkedin.com/in/aleena-mariya-rajan
        </a>
      </p>
    </section>
  );
};

export default Contact;
