import React from 'react';
// Custom global styles (will be imported via main.jsx too)
import './index.css';

// Import individual components from the components folder
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection'; // NEW IMPORT

function App() {
  return (
    <div className="App">
      <NavbarComponent />

      {/* Home Page */}
      <HeroSection
        id="home"
        backgroundImage="/images/hero-desktop.jpg" // Now using the main desktop hero image
      >
        <h1><img src="/images/logo.png" alt="f-hole round violin logo" /></h1>
        <h1>Melisa Corso</h1>
        <h4>Sharing the Beauty of Violin Music</h4>
      </HeroSection>

      {/* Services Page */}
      <ServicesSection id="services" />

      {/* Hero Space 1 */}
      <HeroSection className="hero-space" backgroundImage="/images/hero-desktop.jpg" /> {/* Using the main desktop hero image */}

      {/* About Page */}
      <AboutSection id="about" />

      {/* NEW: Testimonials Section */}
      <TestimonialsSection id="testimonials" />

      {/* Hero Space 2 (adjusting the image here to accommodate the new section) */}
      <HeroSection className="hero-space" backgroundImage="/images/hero-desktop.jpg" /> {/* Using the main desktop hero image */}

      {/* Contact Page */}
      <ContactSection id="contact" />

      {/* Footer */}
      <HeroSection className="hero-section hero-large" backgroundImage="/images/hero-desktop.jpg"> {/* Using the main desktop hero image */}
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
