import React from 'react';

const HeroSection = ({ id, className, backgroundImage, children }) => {
  const sectionStyle = {
    // This prop will be the ONLY source of background image/color
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
  };

  return (
    <section id={id} className={`hero-section ${className || ''}`} style={sectionStyle}>
      {children}
    </section>
  );
};

export default HeroSection;