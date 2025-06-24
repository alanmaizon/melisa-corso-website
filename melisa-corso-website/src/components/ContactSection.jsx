import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ContactSection = ({ id }) => {
  // Function to handle form submission (optional, can be left empty for Formspree)
  const handleSubmit = (event) => {
    // For Formspree, the form's action attribute handles the POST request.
    // You can add client-side validation or other logic here before submission if needed.
  };

  return (
    <section id={id} className="content-section">
      <Container>
        <Row className="justify-content-center g-4">
          <Col md={6} className="content-block contact-info">
            <h2>Learn the violin online</h2>
            <p>I'm also passionate about teaching the next generation of musicians.
            Reach out for one-on-one violin lessons from anywhere in the world.</p>
            <h3>Classes in your own language</h3>
            <div className="flags">
              <div className="item">
                <img src="/images/spanish.png" alt="Spanish flag" />
                <p>Spanish</p>
              </div>
              <div className="item">
                <img src="/images/english.png" alt="English flag" />
                <p>English</p>
              </div>
              <div className="item">
                <img src="/images/portuguese.png" alt="Portuguese flag" />
                <p>Portuguese</p>
              </div>
            </div>
            
            <p>Feel free to contact me for inquiries, bookings, or to discuss your project.
            I'd love to explore how I can bring my music to your event or recording.</p>
            
            <h2>Let's get in touch!</h2>
            <div className="social-icons">
              <a href="mailto:melicorso22@gmail.com" aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="https://www.facebook.com/melicorso/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.instagram.com/meli.corso/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://wa.me/353832051969/" aria-label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} /></a>
              <a href="https://www.linkedin.com/in/melisa-corso-915a82a8/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </Col>
          <Col md={6} className="content-block contact-form-container">
            <h2>Leave a message</h2>
            {/* IMPORTANT: Replace "YOUR_FORMSPREE_ENDPOINT_HERE" with your actual Formspree endpoint */}
            {/* Or if using Netlify Forms, add data-netlify="true" and remove action/method */}
            <Form action="https://formspree.io/f/mpwroadk" method="POST" onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col sm={6}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstname" placeholder="Your name..." required />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="Your last name..." required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your email address..." required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" placeholder="Subject of your message..." required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" placeholder="Write something..." required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;