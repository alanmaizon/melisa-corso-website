import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesSection = ({ id }) => {
  return (
    <section id={id} className="content-section">
      <Container>
        <Row className="justify-content-center g-4">
          <Col md={6} className="content-block text-center">
            <h2>Concert violinist &amp; Experienced performer</h2>
            <div>
              From weddings to birthday parties, receptions, and corporate events.<br />
              I provide beautiful music to make your event
            </div>
            <ul className="text-center" style={{ display: 'inline-block', textAlign: 'left' }}>
              <li>Recording sessions</li>
              <li>Live performances</li>
              <li>Music composition</li>
              <li>Arrangement services</li>
            </ul>
          </Col>
          <Col md={6} className="content-block text-center">
            <h2>Coming shows this year</h2>
            <div className="table-responsive d-flex justify-content-center">
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