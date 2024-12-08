import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faPhone } from "@fortawesome/free-solid-svg-icons";
import lenskart from "./img/lenskart.png";
import LoginModal from "./Components/LoginModal";

const Home1 = () => {
  const [show, setShow] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const search = async () => {
    // Simulate API call
    console.log(`Searching for: ${searchItem}`);
    setSearchItem("");
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar bg="white" className="py-2">
        <Container fluid className="justify-content-end">
          <Nav>
            <Nav.Link href="contactus" style={{ color: "#007BFF", fontSize: "12px" }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Navbar */}
      <Navbar bg="white" variant="light" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Brand>
            <img src={lenskart} alt="Lenskart Logo" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} />
              <span className="ms-1">+1 234 567 890</span>
            </Nav.Link>
          </Nav>
          <Nav className="d-flex flex-grow-1 justify-content-center">
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                  placeholder="What are you looking for?"
                  className="me-2"
                  style={{ width: "300px", fontSize: "16px" }}
                />
                <Button variant="outline-success" onClick={search}>Search</Button>
              </InputGroup>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="trackorder">Track Order</Nav.Link>
            <Button variant="white" onClick={handleShow}>Login/Register</Button>
            <Nav.Link href="wishlist">
              <FontAwesomeIcon icon={faHeart} />
              <span className="ms-1">Wishlist</span>
            </Nav.Link>
            <Nav.Link href="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ms-1">Cart</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Categories Navbar */}
      <Navbar bg="light" className="py-2">
        <Container>
          <Nav className="justify-content-center flex-wrap">
            {["EYE GLASSES", "SCREEN GLASSES", "KID GLASSES", "CONTACT LENSES", "SUNGLASSES"].map((item, idx) => (
              <Nav.Link key={idx} href={item.toLowerCase().replace(/\s+/g, "")}>
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      {/* Carousel */}
      <Carousel className="mt-4">
        {[
          "https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif",
          "https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif",
          "https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg",
          "https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg",
        ].map((src, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={src} alt={`Slide ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Cards Section */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between flex-wrap">
          {[
            { name: "Eyeglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png", link: "/eyeglasses" },
            { name: "Sunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png", link: "/sunglasses" },
            { name: "Screen Glasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png", link: "/screenglasses" },
            { name: "Contact Lenses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png", link: "/contactlenses" },
            { name: "Power Sunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png", link: "/powersunglasses" },
          ].map((card, idx) => (
            <Link key={idx} to={card.link} className="text-decoration-none text-dark">
              <Card style={{ width: "16rem", height: "11rem", margin: "10px" }}>
                <Card.Img variant="top" src={card.img} className="p-3" />
                <Card.Body className="text-center">
                  <Card.Text>{card.name}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Home1;
