import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Aleena</div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li onClick={closeMenu}><a href="#home">Home</a></li>
        <li onClick={closeMenu}><a href="#about">About</a></li>
        <li onClick={closeMenu}><a href="#skills">Skills</a></li>
        <li onClick={closeMenu}><a href="#projects">Projects</a></li>
        <li onClick={closeMenu}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
