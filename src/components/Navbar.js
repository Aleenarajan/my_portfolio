import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">Aleena</a>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li> {/* ✅ This one */}
                <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>

                        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
