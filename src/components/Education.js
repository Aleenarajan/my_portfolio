// src/components/Education.js
import React from 'react';
import '../styles/Education.css';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education & Certifications</h2>

      <div className="timeline">

        <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <h3>MCA – Master of Computer Applications</h3>
          <p><strong>APJ Abdul Kalam Technological University</strong></p>
          <p>2023 – 2025</p>
          <p><strong>CGPA:</strong> 7.27 / 10</p>
        </div>

        <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <h3>BSc – Computer Science</h3>
          <p><strong>Mahatma Gandhi University </strong></p>
          <p>2020 – 2023</p>
          <p><strong>CGPA:</strong> 6.3</p>
        </div>

     <div className="timeline-item">
          <FaGraduationCap className="icon" />
          <h3>Higher Secondary Education (+2)</h3>
          <p><strong>Kerala State Board</strong></p>
          <p>2018 – 2020</p>
          <p><strong>Percentage:</strong> 62.83</p>
        </div>

    <div className="timeline-item">
  <FaGraduationCap className="icon" />
  <h3>SSLC – 10th Grade</h3>
  <p><strong>Central Board of Secondary Education (CBSE)</strong></p>
  <p>2017 – 2018</p>
  <p><strong>Percentage:</strong> 51</p>
</div>


        <div className="timeline-item">
          <FaCertificate className="icon" />
          <h3>Online Certification</h3>
          <p><strong>Privacy and Security in Online Social Media</strong></p>
          <p>NPTEL Online Course – 2024</p>
        </div>

      </div>
    </section>
  );
};

export default Education;
