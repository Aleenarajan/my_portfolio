import React from 'react';
import '../styles/Skills.css'; // Ensure this path is correct

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-category">
        <h3>Programming</h3>
        <ul>
          <li>Python</li>
          <li>Java</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Web Development</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Flask</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>Database</h3>
        <ul>
          <li>MySQL</li>
        </ul>
      </div>

      <div className="skills-category">
        <h3>AI/ML & Tools</h3>
        <ul>
          <li>Deep Learning</li>
          <li>TensorFlow</li>
          <li>GANs</li>
          <li>CNNs</li>
          <li>GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
