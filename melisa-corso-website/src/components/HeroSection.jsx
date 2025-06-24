import React from 'react';

const HeroSection = ({ id, className, backgroundImage, children }) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <section id={id} className={`hero-section ${className || ''}`} style={sectionStyle}>
      {children}
    </section>
  );
};

export default HeroSection;