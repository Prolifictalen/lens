import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import lenskartwhite from './img/lenskartwhite.png'

const Navbar1 = () => {
  return (
    <>
    <Navbar variant="light" expand="lg" style={{ height: '60px', backgroundColor: "#000042" }}>
        <Container fluid>
            <Navbar.Brand>
                <img
                src={lenskartwhite}
                width="180"
                height="90"
                alt=""
                />
            </Navbar.Brand>
        </Container>
    </Navbar>
    </>
  )
}

export default Navbar1