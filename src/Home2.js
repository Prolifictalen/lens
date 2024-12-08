import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faPhone } from "@fortawesome/free-solid-svg-icons";
import lenskart from "./img/lenskart.png";
import Dropdown from "react-bootstrap/Dropdown";

const Home2 = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="white" data-bs-theme="light" className="py-1">
        <Container fluid className="justify-content-end">
          <Nav>
            <Nav.Link href="contactus" className="fs-6">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="white" variant="light" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Brand>
            <img src={lenskart} alt="Lenskart Logo" className="img-fluid" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="me-auto">
              <Nav.Link className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} />
                <span className="ms-2">+1 234 567 890</span>
              </Nav.Link>
            </Nav>
            <Nav className="d-flex flex-grow-1 justify-content-center">
              <Form className="d-flex w-100" style={{ maxWidth: "400px" }}>
                <InputGroup>
                  <Form.Control
                    type="search"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                    className="me-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </InputGroup>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link href="trackorder" className="px-2">Track Order</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ border: "none" }}>
                  Specsy
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">My Orders</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="wishlist" className="d-flex align-items-center px-2">
                <FontAwesomeIcon icon={faHeart} />
                <span className="ms-1">Wishlist</span>
              </Nav.Link>
              <Nav.Link href="cart" className="d-flex align-items-center px-2">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="ms-1">Cart</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light" className="py-2">
        <Container>
          <Nav className="flex-wrap justify-content-center">
            <Nav.Link href="eyeglasses" className="px-3">EYE GLASSES</Nav.Link>
            <Nav.Link href="screenglasses" className="px-3">SCREEN GLASSES</Nav.Link>
            <Nav.Link href="kidglasses" className="px-3">KID GLASSES</Nav.Link>
            <Nav.Link href="contactlenses" className="px-3">CONTACT LENSES</Nav.Link>
            <Nav.Link href="sunglasses" className="px-3">SUNGLASSES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Card Section */}
      <div className="container my-4">
        <div className="row g-3 justify-content-center">
          {[
            { link: "/eyeglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png", text: "Eyeglasses" },
            { link: "/sunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png", text: "Sunglasses" },
            { link: "/screenglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png", text: "Screen Glasses" },
            { link: "/contactlenses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png", text: "Contact Lenses" },
            { link: "/powersunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png", text: "Power Sunglasses" },
          ].map((card, idx) => (
            <div className="col-6 col-md-4 col-lg-2" key={idx}>
              <Link to={card.link} className="text-decoration-none text-dark">
                <Card>
                  <Card.Img
                    variant="top"
                    src={card.img}
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Text className="text-center">{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="container mb-4">
        <a href="/eyeglasses">
          <img
            src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
            alt="Banner"
            className="img-fluid w-100"
          />
        </a>
      </div>

      {/* Carousel */}
      <div className="container mb-5">
        <Carousel>
          {[
            "https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif",
            "https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif",
            "https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg",
            "https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg",
          ].map((src, idx) => (
            <Carousel.Item key={idx}>
              <img src={src} alt={`Slide ${idx + 1}`} className="d-block w-100" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Text & Cards Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 mb-3">
            <h3>WEAR THE TREND</h3>
            <p>Our Hottest Collections</p>
          </div>
          <div className="col-12 col-md-8">
            <div className="row g-3">
              {[
                { link: "/round", img: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png", text: "Round" },
                { link: "/cat-eye", img: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg", text: "Cat-Eye" },
                { link: "/clubmaster", img: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg", text: "Clubmaster" },
                { link: "/transparent", img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg", text: "Transparent" },
              ].map((item, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <Link to={item.link} className="text-decoration-none text-dark">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={item.img}
                        className="img-fluid"
                      />
                      <Card.Body>
                        <Card.Text className="text-center">{item.text}</Card.Text>
                        <Button variant="outline-dark" className="d-block mx-auto mt-2">Explore</Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
