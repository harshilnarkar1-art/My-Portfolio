import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Projects = () => {
  const projectsData = [
    {
      title: "EcoTrack – Material Recycling Management System",
      subtitle: "Full Stack Project | 2025",
      description: [
        "Designed and developed a full-stack material recycling management system using Java, Spring Boot, ReactJS, and MySQL",
        "Implemented secure user authentication and role-based authorization using Spring Security with JWT",
        "Built RESTful APIs to manage recyclable materials, recycling requests, and status tracking",
        "Applied layered architecture (Controller, Service, Repository) for clean, scalable, and maintainable codebase",
        "Integrated ReactJS frontend with Spring Boot backend for a responsive UI",
      ],
    },
    {
      title: "Furniture Web Application",
      subtitle: "Full Stack Project | 2025",
      description: [
        "Developed a fully functional e-commerce platform using Java, Spring Boot, ReactJS, and MySQL",
        "Implemented user authentication, product catalog, and shopping cart functionality",
        "Applied MVC architecture for clean separation of concerns",
        "Optimized database queries improving page load performance",
      ],
    },
    {
      title: "Investor Management System",
      subtitle: "MySQL Database Project | 2025",
      description: [
        "Designed and implemented a relational MySQL database for investor data management",
        "Created normalized tables for transactions, income, expenses, and portfolios",
        "Used primary and foreign keys to maintain data integrity",
        "Wrote SQL queries for financial reports and analysis",
      ],
    },
    {
      title: "Hotel Booking Portal",
      subtitle: "Front-End Web Project | 2025",
      description: [
        "Built a responsive hotel booking website using HTML, CSS, and Bootstrap",
        "Developed multiple pages including Home, Booking, Hotels, Login, and Registration",
        "Ensured smooth navigation and mobile responsiveness",
        "Focused on clean UI and user-friendly design",
      ],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <Container>
        <h2 className="text-center text-white mb-5">
          Academic <span style={{ color: "#00e5ff" }}>Projects</span>
        </h2>

        <Row className="justify-content-center">
          {projectsData.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card
                className="h-100 text-white"
                style={{
                  backgroundColor: "#111",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body>
                  <Card.Title className="mb-2">
                    {project.title}
                  </Card.Title>

                  <Card.Subtitle
                    className="mb-3"
                    style={{ color: "#00e5ff", fontSize: "0.9rem" }}
                  >
                    {project.subtitle}
                  </Card.Subtitle>

                  <ul style={{ paddingLeft: "18px", color: "#ccc" }}>
                    {project.description.map((item, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
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

export default Projects;
