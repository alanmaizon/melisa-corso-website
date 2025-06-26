import React from 'react';

const HeroSection = ({ id, className, children }) => { // Removed backgroundImage from props
  // Removed sectionStyle and logic related to backgroundImage
  const sectionStyle = {}; // Empty style object as background is handled by CSS

  return (
    <section id={id} className={`hero-section ${className || ''}`} style={sectionStyle}>
      {children}
    </section>
  );
};

export default HeroSection;