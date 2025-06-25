import React from 'react';
import './index.css';

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

      {/* Home Page: Use hero-desktop for main and hero-mobile for mobile */}
      <HeroSection
        id="home"
        desktopImage="/images/hero-desktop.jpg"
        mobileImage="/images/hero-mobile.jpg" // Specific mobile image for Home
      >
        <h1><img src="/images/logo.png" alt="f-hole round violin logo" /></h1>
        <h1>Melisa Corso</h1>
        <h4>Sharing the Beauty of Violin Music</h4>
      </HeroSection>

      {/* Services Page */}
      <ServicesSection id="services" />

      {/* Hero Space 1: Example - using different images for this parallax section */}
      <HeroSection
        className="hero-space"
        desktopImage="/images/hero-desktop.jpg" // Can be a different image
        mobileImage="/images/hero-mobile.jpg" // Can be a different mobile image
      />

      {/* About Page */}
      <AboutSection id="about" />

      {/* Testimonials Section */}
      <TestimonialsSection id="testimonials" />

      {/* Hero Space 2: Example - using different images for this parallax section */}
      <HeroSection
        className="hero-space"
        desktopImage="/images/hero-desktop.jpg" // Can be a different image
        mobileImage="/images/hero-mobile.jpg" // Can be a different mobile image
      />

      {/* Contact Page */}
      <ContactSection id="contact" />

      {/* Footer: Example - using specific images for the footer parallax section */}
      <HeroSection
        className="hero-section hero-large"
        desktopImage="/images/hero-desktop.jpg" // Can be a different image
        mobileImage="/images/hero-mobile.jpg" // Can be a different mobile image
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