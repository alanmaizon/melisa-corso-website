import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    comment: "Melisa's performance at our wedding was absolutely breathtaking. She created an unforgettable atmosphere!",
    image: "/images/testimonial1.jpg" // Placeholder image
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Her music composition for our project exceeded all expectations. Truly a gifted artist!",
    image: "/images/testimonial2.jpg" // Placeholder image
  },
  {
    id: 3,
    name: "Robert Johnson",
    comment: "I've learned so much from Melisa's online lessons. She's patient, knowledgeable, and incredibly inspiring.",
    image: "/images/testimonial3.jpg" // Placeholder image
  }
];

const ServicesSection = ({ id }) => {
  return (
    <section id={id} className="content-section">
      <Container>
        <Row className="justify-content-center g-4"> {/* g-4 for gutter spacing */}
          <Col md={6} className="content-block text-center"> {/* Keeping text-center on column */}
            <h2>Concert violinist &amp; Experienced performer</h2>
            <p> {/* Changed div to p for semantic correctness and consistency */}
              From weddings to birthday parties, receptions, and corporate events.<br />
              I provide beautiful music to make your event unforgettable.
            </p>
            <h3>My services include</h3>
            {/* NEW: Removed inline styles, added services-list class */}
            <ul className="services-list">
              <li>Recording sessions</li>
              <li>Live performances</li>
              <li>Music composition</li>
              <li>Arrangement services</li>
            </ul>
          </Col>
          <Col md={6} className="content-block">
            <h2>Coming shows this year</h2>
            <div className="table-responsive"> {/* Make table responsive */}
              <table>
                <thead>
                  <tr>
                    <td>Venue</td>
                    <td>City</td>
                    <td>Date</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Esker Orchestra Festival</td>
                  <td>Galway, Ireland</td>
                  <td>Not Confirmed</td>
                </tr>
                <tr>
                  <td>National Concert Hall</td>
                  <td>Dublin, Ireland</td>
                  <td>Not Confirmed</td>
                </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
