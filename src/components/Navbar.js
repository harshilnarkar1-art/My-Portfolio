import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
        padding: '12px 0'
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontWeight: '700',
            fontSize: '1.5rem',
            color: '#00e5ff',
            letterSpacing: '1px'
          }}
        >
          Harshil Narkar
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: '#1c1c1c' }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map(
              (item, index) => (
                <Nav.Link
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#ffffff',
                    margin: '0 10px',
                    fontWeight: '500',
                    position: 'relative'
                  }}
                  className="nav-link-custom"
                >
                  {item}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
