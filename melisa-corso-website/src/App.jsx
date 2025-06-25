import React from 'react';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection'; // This component will now receive the backgroundImage prop
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      {/* Home Page: Using hero-desktop for main parallax, mobile handled by CSS media query in index.css */}
      <HeroSection
        id="home"
        backgroundImage="/images/hero-desktop.jpg"
      >
        <h1><img src="/images/logo.png" alt="f-hole round violin logo" /></h1>
        <h1>Melisa Corso</h1>
        <h4>Sharing the Beauty of Violin Music</h4>
      </HeroSection>

      {/* Services Page */}
      <ServicesSection id="services" />

      {/* About Page */}
      <AboutSection id="about" />

      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials" />

      {/* Contact Page */}
      <ContactSection id="contact" />

      {/* Footer */}
      <HeroSection
        className="hero-section hero-large"
        backgroundImage="/images/hero-desktop.jpg" // Example: use the same desktop image for all parallax sections
      >
        <a href="#home">
          <img src="/images/logo.png" alt="f-hole round violin logo" style={{ height: '80px', marginBottom: '20px' }} />
        </a>
        <div className="footer-content">
          <small>Melisa Corso 2025 © All rights reserved</small>
        </div>
      </HeroSection>
    </div>
  );
}

export default App;