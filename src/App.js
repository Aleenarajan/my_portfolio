import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';

import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />  {/* Add this */}
      <Projects /> {/* ✅ Add this */}
      <Education />  {/* ✅ Add this line */}

      <Contact />
    </div>
  );
}

export default App;
