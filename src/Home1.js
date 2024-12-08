import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
    const data = await axios.get(
      `http://localhost:8000/api/v1/user/getitems/:${searchItem}`
    );
    console.log(data.data);
    setSearchItem("");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="white" variant="light" expand="lg" className="py-3">
        <Container fluid>
          <Navbar.Brand>
            <img src={lenskart} alt="Lenskart Logo" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="me-auto">
              <Nav.Link className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} />
                <span className="ms-2">+1 234 567 890</span>
              </Nav.Link>
            </Nav>
            <Form className="d-flex mx-auto w-100" style={{ maxWidth: "400px" }}>
              <InputGroup>
                <Form.Control
                  type="search"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                  placeholder="Search..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" onClick={search}>
                  Search
                </Button>
              </InputGroup>
            </Form>
            <Nav>
              <Nav.Link href="/trackorder" className="px-2">
                Track Order
              </Nav.Link>
              <Button variant="outline-primary" onClick={handleShow}>
                Login
              </Button>
              <Nav.Link href="/wishlist" className="d-flex align-items-center px-2">
                <FontAwesomeIcon icon={faHeart} />
                <span className="ms-1">Wishlist</span>
              </Nav.Link>
              <Nav.Link href="/cart" className="d-flex align-items-center px-2">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="ms-1">Cart</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Categories Section */}
      <Container className="my-4">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
          {[
            { link: "/eyeglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png", text: "Eyeglasses" },
            { link: "/sunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png", text: "Sunglasses" },
            { link: "/screenglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png", text: "Screen Glasses" },
            { link: "/contactlenses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png", text: "Contact Lenses" },
            { link: "/powersunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png", text: "Power Sunglasses" },
          ].map((card, idx) => (
            <div className="col" key={idx}>
              <Link to={card.link} className="text-decoration-none text-dark">
                <Card className="h-100">
                  <Card.Img variant="top" src={card.img} />
                  <Card.Body className="d-flex align-items-center justify-content-center">
                    <Card.Text className="text-center mb-0">{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </Container>

      {/* Banner */}
      <div className="my-4">
        <img
          src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
          alt="Banner"
          className="img-fluid w-100"
        />
      </div>

      {/* Carousel */}
      <Carousel className="my-4">
        {[
          "https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif",
          "https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif",
          "https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg",
          "https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg",
        ].map((src, idx) => (
          <Carousel.Item key={idx}>
            <img src={src} alt={`Slide ${idx}`} className="d-block w-100" />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Trending Collections */}
      <Container className="my-5">
        <h3 className="text-center">Trending Collections</h3>
        <div className="row row-cols-2 row-cols-md-4 g-3 justify-content-center">
          {[
            { link: "/round", img: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png", text: "Round" },
            { link: "/cat-eye", img: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg", text: "Cat-Eye" },
            { link: "/clubmaster", img: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg", text: "Clubmaster" },
            { link: "/transparent", img: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg", text: "Transparent" },
          ].map((item, idx) => (
            <div className="col" key={idx}>
              <Link to={item.link} className="text-decoration-none text-dark">
                <Card className="h-100">
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Text className="text-center mb-3">{item.text}</Card.Text>
                    <Button variant="outline-dark" size="sm">
                      Explore
                    </Button>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </Container>

      <LoginModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Home1;
