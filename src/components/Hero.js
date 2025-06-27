import React from 'react';
import './Hero.css'; // Make sure Hero.css is in the same folder as Hero.js


const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
<img src="/image/aleena.jpg" alt="Aleena Mariya Rajan" className="profile-pic" />
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Aleena Mariya Rajan</span></h1>
          <h2>Open To Work</h2>
          <h3>Fresher in Tech | Building Skills in Web Development & AI/ML</h3>
          <p>
            A passionate fresher who loves building clean websites and smart applications. 
            Always eager to learn, explore new technologies, and create projects that make a difference.
          </p>
          <div className="hero-buttons">
            <a href="/Aleena Mariya Rajan_Resume.pdf" className="btn btn-secondary" download>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
