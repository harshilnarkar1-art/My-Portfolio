import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        alignItems: 'center',
        padding: '60px 0'
      }}
    >
      <Container>
        <h2 className="text-center text-white mb-5">
          Contact <span style={{ color: '#00e5ff' }}>Me</span>
        </h2>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              className="text-white"
              style={{
                backgroundColor: '#111',
                borderRadius: '18px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.7)'
              }}
            >
              <Card.Body className="text-center py-5">
                <h4 className="mb-4" style={{ color: '#00e5ff' }}>
                  Harshil Narkar
                </h4>

                <p className="mb-3">
                  <FaPhone color="#00e5ff" />{' '}
                  <span className="ms-2">+91 9867732133</span>
                </p>

                <p className="mb-3">
                  <FaEnvelope color="#ff6c37" />{' '}
                  <span className="ms-2">harshilnarkar1@gmail.com</span>
                </p>

                <p className="mb-4">
                  <FaMapMarkerAlt color="#f44336" />{' '}
                  <span className="ms-2">Mumbai, Maharashtra</span>
                </p>

                <div className="d-flex justify-content-center gap-4 mt-4">
                  <a
                    href="https://linkedin.com/in/harshil-narkar-221955203"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0a66c2', fontSize: '1.8rem' }}
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="https://github.com/harshilnarkar1-art"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ffffff', fontSize: '1.8rem' }}
                  >
                    <FaGithub />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
