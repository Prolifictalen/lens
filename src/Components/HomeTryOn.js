import React, { useEffect, useRef } from 'react'
import Navbar1 from '../Navbar1'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faEye, faGlasses, faMicroscope, faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'

const HomeTryOn = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = true; // Ensure video is muted for autoplay
    video.play(); // Try to play the video on load
  }, []);
  return (
    <>
    <Navbar1/>
    <br/><br/>
     <Container>
      <Row>
        <Col xs={8}>
          <video ref={videoRef} loop playsInline autoPlay 
            poster="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/HTO_video_placeholder.png" 
            style={{width: "90%", height: "95%"}}>
            <source src="https://storage.googleapis.com/lenskart-prod-app-videos/EyeTest-Square-LK%40Home.mp4#t=0.1" type="video/mp4"/>
          </video>
        </Col>
        <Col xs={4}>
          <Card style={{ width: '25rem', height: '39rem'}}>
            <Card.Body>
              <Card.Title style={{color: "#000042", fontSize: "27px", fontFamily: "Arialblack", fontWeight: "bold"}}>Lenskart at Home</Card.Title>
              <Card.Text>
                <div style={{fontSize: "16px", fontFamily: "Arialblack"}}>
                  Eye Test & Frame Trail Service
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <FontAwesomeIcon icon={faStar} style={{ color: 'lightgreen' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'lightgreen' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'lightgreen' }} />
                    <FontAwesomeIcon icon={faStar} style={{ color: 'lightgreen' }} />
                    <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: 'lightgreen' }} />
                    <span style={{ marginLeft: '5px', fontFamily: "Arialblack", fontSize: "14px"}}>4.7 (1.7K)</span>
                  </div>
                </div>
                <div style={{color: "#000042", marginTop: "26px", fontFamily: "Arialblack", fontSize: "18px", fontWeight: "bold"}}>
                  Eye test eligibility
                </div>
                <div style={{marginBottom: "14px", fontFamily: "Arialblack", marginTop: "12px"}}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'lightgreen', marginRight: '5px' }} />
                &nbsp;  A well lit room with 10ft space is required
                </div>
                <div style={{marginBottom: "14px", fontFamily: "Arialblack"}}>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'lightgreen', marginRight: '5px' }} />
                &nbsp;  Required age for eye test is 14-75 years
                </div>
                <div style={{fontFamily: "Arialblack"}}>
                <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'lightcoral', marginRight: '5px' }} />
                &nbsp;  Not for Diabetics or those with High BP (Clinical eye test is required)
                </div>
                <h6 style={{color: "#000042", fontWeight: "bold", marginTop: "26px", fontFamily: "Arialblack", fontSize: "18px"}}>
                  What to expect?
                </h6>
                <div style={{marginBottom: "14px", fontFamily: "Arialblack", marginTop: "14px"}}>
                <FontAwesomeIcon icon={faEye} style={{ color: '#000042', marginRight: '5px' }} />
                &nbsp;  12 Step Eye Checkup by certified professionals
                  </div>
                <div style={{marginBottom: "14px", fontFamily: "Arialblack"}}>
                <FontAwesomeIcon icon={faMicroscope} style={{ color: '#000042', marginRight: '5px' }} />
                &nbsp;  Latest Eye Checkup Equipments
                  </div>
                <div style={{fontFamily: "Arialblack"}}>
                <FontAwesomeIcon icon={faGlasses} style={{ color: '#000042', marginRight: '5px' }} />
                &nbsp;  Try 150+ frames at home
                </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{color: "#000042", fontFamily: "Arialblack", fontWeight: "bold", background: "white", textAlign: 'center'}}>
                <div style={{width: '100%', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span>Lenskart at Home</span>
                  <span>
                    ₹99
                  </span>
                </div>
                <Button variant="white" style={{ background: "#000042", color: "white", width: '80%', marginTop: '35px'}}>
                  BOOK APPOINTMENT
                </Button>
              </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>  
     {/* <Card.Footer style={{color: "#000042", fontFamily: "Arialblack", fontWeight: "bold", background: "white"}}>Lenskart at Home</Card.Footer>
              <Button variant="white" style={{ background: "#000042", color: "white"}}>BOOK APPOINTMENT</Button> */}
    </>
  )
}

export default HomeTryOn
