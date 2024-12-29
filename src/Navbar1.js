import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import lenskartwhite from './img/lenskartwhite.png';
import lensloom from './img/lensloom.png';

const Navbar1 = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#000042' }} variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            src={lensloom}
            alt="LensLoom"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/eyeglasses">Eye Glasses</Nav.Link>
            <Nav.Link href="/screenglasses">Screen Glasses</Nav.Link>
            <Nav.Link href="/contactlenses">Contact Lenses</Nav.Link>
            <Nav.Link href="/sunglasses">Sunglasses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
