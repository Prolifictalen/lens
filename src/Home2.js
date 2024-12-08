import React from 'react'
import Container from 'react-bootstrap/Container';
import car2 from './img/car2.png';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faPhone } from '@fortawesome/free-solid-svg-icons';
import lenskart from "./img/lenskart.png";
import Dropdown from 'react-bootstrap/Dropdown';

const Home2 = () => {
    return (
        <>
          <Navbar bg="white" data-bs-theme="light" style={{ height: '15px' }}>
            <Container fluid className="justify-content-end">
              <Nav>
                <Nav.Link href="contactus" style={{fontSize: "12px"}}>Contact Us</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          
          <Navbar bg="white" variant="light" expand="lg" style={{ height: '50px' }}>
            <Container fluid>
              <Navbar.Brand>
                <img
                  src={lenskart}
                  width="150"
                  height="70"
                  alt=""
                />
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
                      placeholder="What are you looking for ?"
                      className="me-2"
                      aria-label="Search"
                      style={{ width: '300px', fontSize: '16px', height: '40px' }}/>
                    <Button variant="outline-success">Search</Button>
                  </InputGroup>
                </Form>
              </Nav>
              <Nav>
                <Nav.Link href="trackorder">Track Order</Nav.Link>&nbsp;&nbsp;

                <Dropdown>
                <Dropdown.Toggle variant="white" id="dropdown-basic" style={{border: "none"}}>
                    Specsy
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">My Orders</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
                </Dropdown>
                
                <Nav.Link href="wishlist" className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faHeart} />
                  <span className="ms-1" >Wishlist</span>&nbsp;&nbsp;&nbsp;
                </Nav.Link>
                <Nav.Link href="cart" className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span className="ms-1">Cart</span>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Nav>
                <Nav.Link href="eyeglasses">EYE GLASSES</Nav.Link>
                <Nav.Link href="screenglasses">SCREEN GLASSES</Nav.Link>
                <Nav.Link href="kidglasses">KID GLASSES</Nav.Link>
                <Nav.Link href="contactlenses">CONTACT LENSES</Nav.Link>
                <Nav.Link href="sunglasses">SUNGLASSES</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br/>
              {/* starting card*/}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', gap: '20px', flexWrap: 'nowrap' }}>
        {/* Card 1 */}
        <Link to="/eyeglasses" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '16rem', height: '11rem' }}>
            <Card.Img 
              variant="top" 
              src="https://static1.lenskart.com/media/desktop/img/Apr22/a2.png" 
              style={{ marginTop: '9px', marginLeft: '9px', marginRight: '9px', width: "92%" }} 
            />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                Eyeglasses
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
  
        {/* Card 2 */}
        <Link to="/sunglasses" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '16rem', height: '11rem' }}>
            <Card.Img 
              variant="top" 
              src="https://static1.lenskart.com/media/desktop/img/Apr22/b2.png" 
              style={{ marginTop: '9px', marginLeft: '9px', marginRight: '9px', width: "92%" }} 
            />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                Sunglasses
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
  
        {/* Card 3 */}
        <Link to="/screenglasses" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '16rem', height: '11rem' }}>
            <Card.Img 
              variant="top" 
              src="https://static1.lenskart.com/media/desktop/img/Apr22/d2.png" 
              style={{ marginTop: '9px', marginLeft: '9px', marginRight: '9px', width: "92%" }} 
            />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                Screen Glasses
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
  
        {/* Card 4 */}
        <Link to="/contactlenses" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '16rem', height: '11rem' }}>
            <Card.Img 
              variant="top" 
              src="https://static1.lenskart.com/media/desktop/img/Apr22/d.png" 
              style={{ marginTop: '9px', marginLeft: '9px', marginRight: '9px', width: "92%" }} 
            />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                Contact Lenses
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
  
        {/* Card 5 */}
        <Link to="/powersunglasses" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '16rem', height: '11rem' }}>
            <Card.Img 
              variant="top" 
              src="https://static1.lenskart.com/media/desktop/img/Apr22/e2.png" 
              style={{ marginTop: '9px', marginLeft: '9px', marginRight: '9px', width: "92%" }} 
            />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                Power Sunglasses
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
  
        {/* Card 6 */}
        {/* <Link to="/progressivelenses" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card style={{ width: '14rem', height: '10rem' }}>
            <Card.Img 
              variant="top" 
              src="https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg" 
              style={{ marginTop: '7px', marginLeft: '7px', marginRight: '7px', width: "92%" }} 
            />
            <Card.Body>
              <Card.Text style={{ textAlign: "center" }}>
                Progressive Lenses
              </Card.Text>
            </Card.Body>
          </Card>
        </Link> */}
      </div>
      <br/>
  
      <div>
        <a href='/eyeglasses'>
        <img
        src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
        width="100%"
        height="450"
        alt=""
        />
        </a>
      </div>
  
      <br/><br/>
        {/* Carousel */}
        <Carousel interval={1200} data-bs-theme="dark">
        <Carousel.Item>
          <a href='/as-seen-on-mouniroy'>
              <img
                src="https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
                alt="Fourth slide"
                width="1473"
                height="330"
              />
            </a>
            </Carousel.Item> 
          <Carousel.Item>
            <a href="/madeinjapan">
              <img
                src="https://static1.lenskart.com/media/desktop/img/June24/combo_vc/Desktop.gif"
                alt="First slide"
                width="1473"
                height="330"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="/petite">
              <img
                src="https://static1.lenskart.com/media/desktop/img/republic/petite/Web-banner%20option%202.jpg"          
                alt="Second slide"
                width="1473"
                height="330"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href='/stardust'>
              <img
                src="https://static1.lenskart.com/media/desktop/img/May24/starDust/web_BannerStarDust.jpg"
                alt="Fourth slide"
                width="1473"
                height="330"
              />
              </a>
          </Carousel.Item>  
          <Carousel.Item>
            <a href='/earlock'>
              <img
                src="https://static1.lenskart.com/media/desktop/img/May24/pro-fit-lenskart-air/Desktop-Bannerpro_fit040624.gif"
                alt="Fourth slide"
                width="1473"
                height="330"
              />
              </a>
          </Carousel.Item>  
          <Carousel.Item>
              <img
                src="https://static1.lenskart.com/media/desktop/img/Mar24/Kjo/PLP%20web%20Banner.jpg"
                alt="Third slide"
                width="1473"
                height="330"
              />
          </Carousel.Item> 
          <Carousel.Item>
          <a href='/mirages'>
              <img
                src="https://static5.lenskart.com/media/uploads/homepage_banner.jpg"
                alt="Fourth slide"
                width="1473"
                height="330"
              />
              </a>
          </Carousel.Item>
          <Carousel.Item>
              <img
                src={car2}
                alt="Fourth slide"
                width="1473"
                height="330"
              />
          </Carousel.Item>
        </Carousel>
        <br/><br/>
  
  {/* second card */}
  <div style={{ display: 'flex', width: '80%', margin: '0 auto', alignItems: 'center' }}>
        {/* Left side text */}
        <div style={{ flex: 1, padding: '20px' }}>
          <div style={{fontSize: "30px"}}>WEAR THE</div>
          <div style={{fontFamily: "Rajdhani", fontSize: "55px", fontWeight: "bold"}}>TREND</div>
          <p style={{fontFamily: "Futura-Medium", fontWeight: "400", fontSize: "16px", marginLeft: "5px"}}>Our Hottest Collections</p>
        </div>
        
        {/* Right side for cards */}
        <div style={{ display: 'flex', flex: 4, padding: '20px' }}>
        <div style={{ display: 'flex' }}>
          <Link to="/round" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ width: '13rem', height: '15rem', margin: '10px' }}>
              <Card.Img variant="top" src="https://static1.lenskart.com/media/desktop/img/Sep21/image179.png" />
              <Card.Body style={{ textAlign: "center" }}>
                Round
                <Button style={{ width: "75%", marginLeft: "4px", marginTop: "24px" }}>Explore</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/cat-eye" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ width: '13rem', height: '15rem', margin: '10px' }}>
              <Card.Img variant="top" src="https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg" />
              <Card.Body style={{ textAlign: "center" }}>
                Cat-Eye
                <Button style={{ width: "75%", marginLeft: "4px", marginTop: "24px" }}>Explore</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/clubmaster" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ width: '13rem', height: '15rem', margin: '10px' }}>
              <Card.Img variant="top" src="https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg" />
              <Card.Body style={{ textAlign: "center" }}>
                Clubmaster
                <Button style={{ width: "75%", marginLeft: "4px", marginTop: "24px" }}>Explore</Button>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/transparent" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card style={{ width: '13rem', height: '15rem', margin: '10px' }}>
              <Card.Img variant="top" src="https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg" />
              <Card.Body style={{ textAlign: "center" }}>
                Transparent
                <Button style={{ width: "75%", marginLeft: "4px", marginTop: "24px" }}>Explore</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
      </div>
  
  
      <br/><br/>
        <center><h3>FREE PROGRESSIVE LENSES</h3></center>
        <br/>
        <div>
          <a href='/eyeglasses'>
          <img
            src="https://static1.lenskart.com/media/desktop/img/2024/may/prog/New%20Web%20Banner.jpg" 
            width="1473"
            height="400"
            alt=""
          />
          </a>
        </div>
  
        <br/><br/><br/><br/>
  
        <center><h3>PREMIUM EYEWEAR</h3></center>
        <br/>
        <div>
          <a href='/screenglasses'>
          <img
            src="https://static1.lenskart.com/media/desktop/img/oct23/home/13-10-23/As%20seen%20on%20Desk.jpg"
            width="1473"
            height="400"
            alt=""
          />
          </a>
        </div>
  
        <br/><br/><br/><br/>
  
        <center><h3>TRENDING GLASSES</h3></center>
        <br/>
        <div>
          <a href='/sunglasses'>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif" 
            width="1473"
            height="400"
            alt=""
          />
          </a>
        </div>
  
        <br/><br/><br/><br/>
  
        <center><h3>AQUACOLOR- GLAM UP WITH COLOR LENSES</h3></center>
        <br/>
        <div>
          <a href='http://localhost:3000/madeinjapan'>
          <img
            src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif" 
            width="1473"
            height="400"
            alt=""
          />
          </a>
        </div>
  
        <br/><br/><br/><br/>
  
        <center><h3>FIND THE PERFECT FIT</h3></center>
        <br/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <a href='/eyeglasses'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/eye-square10.jpg" 
            width="550" 
            height="730" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <div>
          <a href='/madeinjapan'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg"
            width="550" 
            height="355" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <br/>
          <a href='/sunglasses'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg"
            width="550" 
            height="355" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          </div>
         
        </div>
        <div style={{ display: 'flex' }}>
          <a href='/powersunglasses'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg"
            width="550" 
            height="300" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='/madeinjapan'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg"
            width="550" 
            height="300" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
        </div>
      </div>
  
      <br/><br/><br/><br/>
  
      <center><h3>CONTACT LENSES & MORE</h3></center>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg" 
            width="550" 
            height="300" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg" 
            width="550" 
            height="300" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
        </div>
      </div>
  
      <br/><br/><br/><br/>
  
      <center><h3>BUY IT YOUR WAY</h3></center>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <img
            src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/call.png"
            width="650" 
            height="250" 
            alt="" 
            style={{ margin: '10px' }}
          />
          <img 
            src="https://static1.lenskart.com/media/desktop/img/republic/celb-new/wts-up.png" 
            width="650" 
            height="250" 
            alt="" 
            style={{ margin: '10px' }}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/hto.jpg"
            width="650" 
            height="310" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/stores.jpg" 
            width="650" 
            height="310" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
        </div>
      </div>
  
      <br/><br/><br/><br/>
  
      <center><h3>OUR BRANDS</h3></center>
      <br/>
      <div>
        <img 
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
        width="1500"
        height="300"
        alt=""
        />
      </div>
  
      <br/><br/><br/>
  
      <h3 style={{marginLeft : "180px"}}>EYE GLASSES</h3>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '72%' }}>
          <a href='http://localhost:3000/madeinjapan'>
          <img
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-air-la-e15417-w-c1-eyeglasses_csvfile-1701688470121-img_7893.jpg"
            width="200" 
            height="100" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//l/i/crystal-full-rim-wayfarer-lenskart-hustlr-lh-e16985-w-c5-eyeglasses_img_2262_14march24.jpg" 
            width="200" 
            height="100" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-e12947-c2-eyeglasses_vincent-chase-vc-e12947-c2-eyeglasses_G_1969_1.jpg" 
            width="200" 
            height="100" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
        </div>
      </div>
  
      <br/><br/>
  
      <h3 style={{marginLeft : "180px"}}>SUNGLASSES</h3>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '72%' }}>
          <a href='http://localhost:3000/madeinjapan'>
          <img
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//j/i/grey-gradient-black-full-rim-wayfarer-john-jacobs-jj-tints-jj-s13227-c4-sunglasses_csvfile-1708406002394-img_7007.jpg"
            width="200" 
            height="100" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/matte-gunmetal-black-blue-gradient-full-rim-rectangle-square-vincent-chase-polarized-the-metal-edit-vc-s12934-c1-polarized-sunglasses_vincent-chase-vc-s12934-c1-sunglasses_g_1627_5july23.jpg"
            width="200" 
            height="100" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//v/i/black-green-full-rim-wayfarer-vincent-chase-athleisure-vc-s14525-c2-sunglasses_g_8300.jpg"
            width="200" 
            height="100" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
        </div>
      </div>
      <br/><br/><br/>
      <div>
        <img 
        src="https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg"
        width="1500"
        height="250"
        alt=""
        />
      </div>
  
      <br/><br/><br/>
  
      <h3 style={{marginLeft : "180px"}}>EYE GLASSES</h3>
      <br/>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '72%'}}>
          <a href='http://localhost:3000/madeinjapan'>
          <img
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpg"
            width="250" 
            height="130" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-gray-premium-zero-power-monthly_gray_kiara_01_09_2023.jpg"
            width="250" 
            height="130" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
          <a href='http://localhost:3000/madeinjapan'>
          <img 
            src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/371x178/9df78eab33525d08d6e5fb8d27136e95//no-resize/a/i/aquacolor-silver-gray-premium-zero-power-monthly_silver_grey_kiara_01_09_2023.jpg" 
            width="250" 
            height="130" 
            alt="" 
            style={{ margin: '10px' }}
          />
          </a>
        </div>
      </div>
      <br/><br/>
      <div>
        <img 
        src="https://static5.lenskart.com/media/uploads/whatsapp-1.png"
        width="1500"
        height="100"
        alt=""
        />
      </div>
      </>
    );
  }
    

export default Home2