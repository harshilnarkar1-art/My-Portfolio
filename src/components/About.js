import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container id="about" className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8} className="text-center">
          <h2 className="text-white mb-4">
            About <span style={{ color: '#00e5ff' }}>Me</span>
          </h2>

          <p className="text-light fs-5" style={{ lineHeight: '1.8' }}>
            I am a passionate <strong>Java Developer</strong> and <strong>Full Stack Developer</strong> with a strong
            foundation in <strong>Core Java, Spring Boot, MySQL, and ReactJS</strong>. I enjoy building secure,
            scalable, and user-friendly web applications that solve real-world problems.
          </p>

          <p className="text-light fs-5" style={{ lineHeight: '1.8' }}>
            I have hands-on experience in developing RESTful APIs, implementing authentication and authorization
            using <strong>Spring Security and JWT</strong>, and integrating frontend applications with backend
            services. I follow clean coding practices and layered architecture to create maintainable software
            solutions.
          </p>

          <p className="text-light fs-5" style={{ lineHeight: '1.8' }}>
            Currently, I am focused on improving my backend expertise and working on real-time projects like
            <strong> EcoTrack</strong>, a material recycling management system. I am actively seeking internship or
            entry-level opportunities where I can contribute my technical skills, learn from industry professionals,
            and grow as a software developer.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
