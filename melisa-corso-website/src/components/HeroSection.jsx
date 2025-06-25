import React from 'react';

const HeroSection = ({ id, className, desktopImage, mobileImage, children }) => {
  // Generate a unique ID for this section to apply specific CSS
  const uniqueId = `hero-section-${id || Math.random().toString(36).substr(2, 9)}`;

  const sectionStyle = {
    // Set the desktop image as the default background
    backgroundImage: `url(${desktopImage})`,
  };

  // Create a style block dynamically for responsive background image
  // This will override the desktop image on mobile for this specific instance
  const mobileImageStyle = `
    @media (max-width: 767.98px) {
      #${uniqueId} {
        background-image: url(${mobileImage});
        background-position: center top; /* Often better for portrait images */
      }
    }
  `;

  return (
    <section id={uniqueId} className={`hero-section ${className || ''}`} style={sectionStyle}>
      {/* Inject the dynamic style tag for mobile image switching */}
      {mobileImage && <style>{mobileImageStyle}</style>}
      {children}
    </section>
  );
};

export default HeroSection;