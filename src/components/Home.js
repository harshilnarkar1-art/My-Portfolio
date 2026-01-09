import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="display-4">Welcome to My Portfolio</h1>
          <p className="lead">
            I'm Harshil Narkar, a passionate Java and Full Stack Developer.
          </p>

          {/* Use <a> with Button styles */}
          <a
            href={`${process.env.PUBLIC_URL}/BackendDeveloperResume.pdf`}
            download="BackendDeveloperResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button variant="light" size="lg">
              <FaDownload className="me-2" />
              Download Resume
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
