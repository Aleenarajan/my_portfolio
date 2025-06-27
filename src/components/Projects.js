// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="project-cards">
        <div className="project-card">
          <h3>Image Colorization</h3>
          <p>
            Developed an AI-based image colorization model that converts black-and-white
            images into realistic colored versions using deep learning techniques.
            <br />
            <strong>Technologies:</strong> Python, TensorFlow, GAN, CNNs, Flask
          </p>
          <a
            href="https://github.com/Aleenarajan/MCA-_LAB/tree/MCA/main%20cod"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Face Mask Detection</h3>
          <p>
            Developed a face mask detection system using deep learning models to identify
            masked and unmasked faces in real-time. Utilized CNNs for image classification
            and optimized the model for high accuracy and performance.
            <br />
            <strong>Technologies:</strong> Python, TensorFlow, Flask
          </p>
          <a
            href="https://github.com/Aleenarajan/MCA-_LAB/tree/MCA/S3/mini_project"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Career Guidance</h3>
          <p>
            Developed a career guidance website to help users choose courses by analyzing
            their test responses across various categories. The platform recommends courses
            based on focus areas and allows users to search for courses. Colleges can
            register, but admin approval is required before they can update details and manage
            profiles.
            <br />
            <strong>Technologies:</strong> Python, MySQL, HTML, CSS, Bootstrap
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default Projects;
