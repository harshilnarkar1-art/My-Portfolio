import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaTools
} from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      title: 'Programming Languages',
      icon: <FaCode color="#00E5FF" />,
      items: [
        { name: 'Core Java', icon: <FaCode color="#f89820" /> },
        { name: 'JavaScript', icon: <FaJsSquare color="#f7df1e" /> },
        { name: 'HTML5', icon: <FaHtml5 color="#e34f26" /> },
        { name: 'CSS3', icon: <FaCss3 color="#1572B6" /> },
        { name: 'SQL', icon: <FaDatabase color="#4479A1" /> }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaTools color="#00c853" />,
      items: [
        { name: 'Spring Boot', icon: <FaCode color="#6db33f" /> },
        { name: 'React Js', icon: <FaReact color="#61dafb" /> },
        { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> }
      ]
    },
    {
      title: 'Databases',
      icon: <FaDatabase color="#4479A1" />,
      items: [
        { name: 'MySQL', icon: <FaDatabase color="#4479A1" /> }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools color="#ff9100" />,
      items: [
        { name: 'Git', icon: <FaGitAlt color="#f05032" /> },
        { name: 'GitHub', icon: <FaGithub color="#ffffff" /> },
        { name: 'Eclipse IDE', icon: <FaCode color="#2c2255" /> },
        { name: 'Visual Studio Code', icon: <FaCode color="#007acc" /> },
        { name: 'Postman', icon: <FaCode color="#ff6c37" /> }
      ]
    }
  ];

  return (
    <section
      id="skills"
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
          Technical <span style={{ color: '#00e5ff' }}>Skills</span>
        </h2>

        <Row className="justify-content-center">
          {skillsData.map((skill, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card
                className="h-100 text-white"
                style={{
                  backgroundColor: '#111',
                  borderRadius: '15px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.6)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Card.Body className="text-center">
                  <div style={{ fontSize: '3rem', marginBottom: '12px' }}>
                    {skill.icon}
                  </div>

                  <Card.Title className="mb-3">
                    {skill.title}
                  </Card.Title>

                  <div className="d-flex flex-wrap justify-content-center">
                    {skill.items.map((item, i) => (
                      <div
                        key={i}
                        className="m-2 text-center"
                        style={{ fontSize: '2rem' }}
                      >
                        {item.icon}
                        <div
                          style={{
                            fontSize: '0.85rem',
                            marginTop: '6px',
                            color: '#ccc'
                          }}
                        >
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
