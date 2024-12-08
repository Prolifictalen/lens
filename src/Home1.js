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
import axios from "axios";

const Home1 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchItem, setSearchItem] = useState("");
  const search = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/user/getitems/${searchItem}`);
      console.log(response.data);
      setSearchItem("");
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="white" variant="light" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Brand>
            <img src={lenskart} alt="Lenskart Logo" style={{ width: "150px", height: "auto" }} />
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
                  aria-label="Search"
                  style={{ width: "300px", fontSize: "16px", height: "40px" }}
                />
                <Button variant="outline-success" onClick={search}>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="trackorder">Track Order</Nav.Link>
            <Button variant="white" onClick={handleShow}>
              Login/Register
            </Button>
            <Nav.Link href="wishlist" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faHeart} />
              <span className="ms-1">Wishlist</span>
            </Nav.Link>
            <Nav.Link href="cart" className="d-flex align-items-center">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="ms-1">Cart</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="light" data-bs-theme="light" className="py-2">
        <Container>
          <Nav className="flex-wrap justify-content-center">
            <Nav.Link href="eyeglasses">EYE GLASSES</Nav.Link>
            <Nav.Link href="screenglasses">SCREEN GLASSES</Nav.Link>
            <Nav.Link href="kidglasses">KID GLASSES</Nav.Link>
            <Nav.Link href="contactlenses">CONTACT LENSES</Nav.Link>
            <Nav.Link href="sunglasses">SUNGLASSES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Mirages Section */}
      <div className="container my-4">
        <a href="/mirages">
          <img
            src="https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg"
            className="img-fluid w-100"
            alt="Mirages Banner"
          />
        </a>
      </div>

      {/* Other Sections */}
      <Carousel interval={1200} className="mt-4">
        {[
          "https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif",
          "https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif",
          "https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg",
        ].map((src, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={src} alt={`Slide ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Aqua Color Lenses Section */}
      <div className="container my-5">
        <a href="/contactlenses">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
            className="img-fluid w-100"
            alt="Color Lenses Banner"
          />
        </a>
        <div className="row g-3 my-3">
          {[
            {
              text: "Aquacolor Premium Powered Green",
              price: "$2000",
              img: "https://static1.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/aquacolor-premium-green.jpg",
            },
            {
              text: "Aquacolor Premium Naughty Brown",
              price: "$2400",
              img: "https://static1.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/aquacolor-premium-brown.jpg",
            },
          ].map((lens, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <Card>
                <Card.Img variant="top" src={lens.img} />
                <Card.Body>
                  <Card.Text>{lens.text}</Card.Text>
                  <Card.Text>{lens.price}</Card.Text>
                  <Button variant="outline-primary" className="d-block mx-auto">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <LoginModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Home1;

