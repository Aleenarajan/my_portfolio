// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
<div className="project-card">
  <h3>Face Mask Detection</h3>
  <p>
    A deep learning project that classifies images into "with mask" or "without mask" using CNNs. 
    Built with Python, TensorFlow, and OpenCV.
  </p>
  <a 
    href="https://github.com/Aleenarajan/MCA-_LAB/tree/MCA/S3/mini_project" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    🔗 View on GitHub
  </a>
</div>


        <div className="project-card">
  <h3>Image Colorization</h3>
  <p>
    Used AI models to transform black & white images into colored ones. 
    Implemented using Python, OpenCV, and deep learning techniques.
  </p>
  <a 
    href="https://github.com/Aleenarajan/MCA-_LAB/tree/MCA/main%20cod" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-link"
  >
    🔗 View on GitHub
  </a>
</div>

          <div className="project-card">
          <h3>Career Guidance Website</h3>
          <p>
            A platform that helps users choose courses by analyzing test responses across various categories. 
            Recommends suitable courses, allows course search, and enables college registration with admin approval.
          </p>
          <p><strong>Technologies:</strong> Python, MySQL, HTML, CSS, Bootstrap</p>
        </div>

        

      </div>
    </section>
  );
};

export default Projects;
