import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonialData = [
  {
    id: 1,
    name: "Anna Maizon",
    comment: "Melisa's performance at our wedding was absolutely breathtaking. She created an unforgettable atmosphere!",
    image: "/images/testimonial3.jpg" // Placeholder image
  },
  {
    id: 2,
    name: "Jane Smith",
    comment: "Her music composition for our project exceeded all expectations. Truly a gifted artist!",
    image: "/images/testimonial2.jpg" // Placeholder image
  },
  {
    id: 3,
    name: "Roberta Johnson",
    comment: "I've learned so much from Melisa's online lessons. She's patient, knowledgeable, and incredibly inspiring.",
    image: "/images/testimonial1.png" // Placeholder image
  }
];

const TestimonialsSection = ({ id }) => {
  return (
    <section id={id} className="content-section testimonials-section">
      <Container>
        <h2 className="text-center mb-5">What People Say About Melisa</h2>
        <Row className="justify-content-center g-4">
          {testimonialData.map(testimonial => (
            <Col key={testimonial.id} md={6} lg={4} className="d-flex align-items-stretch">
              <Card className="testimonial-card">
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                </div>
                <Card.Body>
                  <Card.Text className="comment-text">
                    "{testimonial.comment}"
                  </Card.Text>
                  <Card.Title className="testimonial-name">- {testimonial.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;