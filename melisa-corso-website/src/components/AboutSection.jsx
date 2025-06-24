import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSection = ({ id }) => {
  return (
    <section id={id} className="content-section">
      <Container>
        <Row className="justify-content-center g-4">
          <Col md={6} className="content-block">
            <h2>I'm here to enhance your music</h2>
            <p>My violin playing adds a touch of elegance and sophistication to any celebration,
            whether you need a solo violinist or a full ensemble.</p>
            <h3>Elevate your special occasion with live violin music</h3>
            <div className="service-list-boxes">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", background: "#fafafa", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>Traditional Duo</li>
                <li style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", background: "#fafafa", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>Jazz Trio Band</li>
                <li style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", background: "#fafafa", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>String Quartet</li>
                <li style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", background: "#fafafa", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>Violin Concertos</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="video-container">
              {/* IMPORTANT: Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual YouTube video ID */}
              <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/MKeR_9-vpUg?rel=0"
                title="My True Love"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;