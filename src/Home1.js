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
    const data = await axios.get(`http://localhost:8000/api/v1/user/getitems/:${searchItem}`);
    console.log(data.data);
    setSearchItem("");
  };

  return (
    <>
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
                <Button variant="outline-success" onClick={search}>Search</Button>
              </InputGroup>
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="trackorder">Track Order</Nav.Link>
            <Button variant="white" onClick={handleShow}>Login/Register</Button>
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

      {/* Stardust Section */}
      <div className="container my-4">
        <a href="/stardust">
          <img
           src="src="https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg"
           className="img-fluid w-100"
           alt="Stardust Banner"
         />
       </a>
     </div>

      {/* Wear the Trend Section */}
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

      {/* Cards Section */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
        {[
          { link: "/eyeglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png", text: "Eyeglasses" },
          { link: "/sunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png", text: "Sunglasses" },
          { link: "/screenglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png", text: "Screen Glasses" },
          { link: "/contactlenses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png", text: "Contact Lenses" },
          { link: "/powersunglasses", img: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png", text: "Power Sunglasses" }
        ].map((card, index) => (
          <Link to={card.link} key={index} style={{ textDecoration: "none", color: "inherit" }}>
            <Card style={{ width: "16rem", height: "11rem" }}>
              <Card.Img variant="top" src={card.img} style={{ width: "92%", margin: "auto", marginTop: "9px" }} />
              <Card.Body>
                <Card.Text style={{ textAlign: "center" }}>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>

      {/* Carousel */}
      <Carousel interval={1200} className="mt-4">
        {[
          "https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif",
          "https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif",
          "https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg",
          "https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg"
        ].map((src, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={src} alt={`Slide ${idx + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Other Sections */}
      <div className="container my-5">
        <h3 className="text-center">Free Progressive Lenses</h3>
        <img src="https://static1.lenskart.com/media/desktop/img/2024/may/prog/New%20Web%20Banner.jpg" className="img-fluid" alt="Banner" />
      </div>
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
            { text: "Aquacolor Premium Powered Green", price: "$2000", img: "https://via.placeholder.com/150" },
            { text: "Aquacolor Premium Naughty Brown", price: "$2400", img: "https://via.placeholder.com/150" },
            { text: "Aquacolor Premium Green Powered", price: "$2500", img: "https://via.placeholder.com/150" },
            { text: "Aquacolor Premium Naughty Brown Powered", price: "$1500", img: "https://via.placeholder.com/150" },
          ].map((lens, idx) => (
            <div className="col-6 col-md-3" key={idx}>
              <Card>
                <Card.Img variant="top" src={lens.img} />
                <Card.Body>
                  <Card.Text>{lens.text}</Card.Text>
                  <Card.Text>{lens.price}</Card.Text>
                  <Button variant="outline-primary" className="d-block mx-auto">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Eye Glasses Section */}
      <div className="container my-5">
        <h3>Eye Glasses</h3>
        <div className="row g-3">
          {[
            "https://via.placeholder.com/300",
            "https://via.placeholder.com/300",
            "https://via.placeholder.com/300",
          ].map((img, idx) => (
            <div className="col-4" key={idx}>
              <Card>
                <Card.Img variant="top" src={img} />
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
