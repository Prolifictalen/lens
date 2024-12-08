import React from 'react'
import Navbar1 from '../Navbar1'
import { Navbar } from 'react-bootstrap'

const StoresNearYou = () => {
  return (
    <>
    <Navbar1/>
    <Navbar expand="lg" bg="light">
        <h1 style={{margin: "auto"}}>Find Stores Near You</h1>
    </Navbar><br/><br/>
    <div>
        <center>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28639.37440532087!2d78.12861961903329!3d26.199221987223332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c726c80c4ce3%3A0x6a948008bf7d94fb!2sLenskart.com%20at%20Phoolbagh%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1720586230296!5m2!1sen!2sin" 
        width="600" height="450" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" title='map'>
        </iframe>
        </center>
    </div>
    </>
  )
}

export default StoresNearYou