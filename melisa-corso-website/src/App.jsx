import React from 'react';
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      {/* Home Page */}
      <HeroSection
        id="home"
        backgroundImage="/images/hero-desktop.jpg" // RE-ADDED: Pointing to desktop image
      >
        <h1><img src="/images/logo.png" alt="f-hole round violin logo" /></h1>
        <h1>Melisa Corso</h1>
        <h4>Sharing the Beauty of Violin Music</h4>
      </HeroSection>

      {/* Services Page */}
      <ServicesSection id="services" />

      {/* Hero Space 1 */}
      <HeroSection className="hero-space" backgroundImage="/images/hero-desktop.jpg" /> {/* RE-ADDED */}

      {/* About Page */}
      <AboutSection id="about" />

      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials" />

      {/* Hero Space 2 */}
      <HeroSection className="hero-space" backgroundImage="/images/hero-desktop.jpg" /> {/* RE-ADDED */}

      {/* Contact Page */}
      <ContactSection id="contact" />

      {/* Footer */}
      <HeroSection className="hero-section hero-large" backgroundImage="/images/hero-desktop.jpg"> {/* RE-ADDED */}
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