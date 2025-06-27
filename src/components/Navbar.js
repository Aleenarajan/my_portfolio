import React, { useState } from 'react';
import './Navbar.css'; // make sure path matches

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Aleena</div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(true)}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? 'show' : ''}`}>
        <div className="close" onClick={() => setOpen(false)}>×</div>
        <ul>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
