import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lenskartLogo from './img/lenskart.png'; // Replace with the correct path to your logo image

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasShow = () => setShowOffcanvas(true);
  const handleOffcanvasClose = () => setShowOffcanvas(false);

  return (
    <header>
      {/* Top Contact Bar */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '5px 10px', fontSize: '12px', textAlign: 'right' }}>
        <span>Contact Us: +1 234 567 890</span>
      </div>

      {/* Main Navigation Bar */}
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
        <Container>
          {/* Brand/Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={lenskartLogo}
              alt="Lenskart Logo"
              width="150"
              height="50"
              style={{ objectFit: 'contain' }}
            />
          </Navbar.Brand>

          {/* Hamburger Menu for Mobile */}
          <Navbar.Toggle onClick={handleOffcanvasShow} aria-controls="offcanvas-navbar" />

          {/* Offcanvas Navigation for Mobile */}
          <Navbar.Offcanvas
            id="offcanvas-navbar"
            show={showOffcanvas}
            onHide={handleOffcanvasClose}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link as={Link} to="/eyeglasses" onClick={handleOffcanvasClose}>
                  Eye Glasses
                </Nav.Link>
                <Nav.Link as={Link} to="/screenglasses" onClick={handleOffcanvasClose}>
                  Screen Glasses
                </Nav.Link>
                <Nav.Link as={Link} to="/contactlenses" onClick={handleOffcanvasClose}>
                  Contact Lenses
                </Nav.Link>
                <Nav.Link as={Link} to="/sunglasses" onClick={handleOffcanvasClose}>
                  Sunglasses
                </Nav.Link>
                <Nav.Link as={Link} to="/wishlist" onClick={handleOffcanvasClose}>
                  Wishlist
                </Nav.Link>
                <Nav.Link as={Link} to="/cart" onClick={handleOffcanvasClose}>
                  Cart
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          {/* Desktop Navigation */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/eyeglasses">Eye Glasses</Nav.Link>
              <Nav.Link as={Link} to="/screenglasses">Screen Glasses</Nav.Link>
              <Nav.Link as={Link} to="/contactlenses">Contact Lenses</Nav.Link>
              <Nav.Link as={Link} to="/sunglasses">Sunglasses</Nav.Link>
              <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
