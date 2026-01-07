import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const educationData = [
    {
      title: 'Full Stack Web Development with Java',
      institution: 'ITVedant',
      period: 'May 2025 – May 2026',
      description: [
        'Intensive training in full-stack development covering frontend and backend technologies',
        'Hands-on experience with Java, Spring Boot, ReactJS, and MySQL',
        'Built real-world projects demonstrating end-to-end application development'
      ]
    },
    {
      title: 'Python Programming',
      institution: 'A-EIT Computers',
      period: '2019 – 2020',
      description: [
        'Learned Python fundamentals, data handling, and practical programming concepts'
      ]
    },
    {
      title: 'Bachelor of Commerce (B.Com)',
      institution: 'Prakash Degree College',
      period: '2014 – 2017',
      description: [
        'Studied accounting, finance, and core business management principles'
      ]
    }
  ];

  return (
    <section
      id="education"
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
          Educational <span style={{ color: '#00e5ff' }}>Details</span>
        </h2>

        <Row className="justify-content-center">
          {educationData.map((edu, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card
                className="h-100 text-white"
                style={{
                  backgroundColor: '#111',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.6)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Card.Body>
                  <Card.Title className="mb-2">{edu.title}</Card.Title>

                  <Card.Subtitle
                    className="mb-3"
                    style={{ color: '#00e5ff', fontSize: '0.9rem' }}
                  >
                    {edu.institution} | {edu.period}
                  </Card.Subtitle>

                  <ul style={{ paddingLeft: '18px', color: '#ccc' }}>
                    {edu.description.map((item, i) => (
                      <li key={i} style={{ marginBottom: '8px' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
