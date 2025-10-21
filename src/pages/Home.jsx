// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import EducationAndCertifications from '../components/EducationAndCertifications';
import Contact from '../components/Contact';
import SEO from '../components/SEO'; // Corrected Import path

const Home = () => {
  return (
    <>
      {/* SEO is now imported and used */}
      <SEO /> 
      
      {/* All sections are now imported from the components folder */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <EducationAndCertifications />
      <Contact />
    </>
  );
};

export default Home;