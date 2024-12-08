import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      {/* Footer Top Section */}
      <MDBContainer className="p-4">
        <MDBRow>
          {/* About Section */}
          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">About Us</h5>
            <p>
              Discover a range of eyewear styles tailored to suit every look and occasion. We pride ourselves
              on delivering premium products and excellent customer service. 
            </p>
          </MDBCol>

          {/* Links Section */}
          <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/eyeglasses" className="text-reset text-decoration-none">Eyeglasses</a>
              </li>
              <li>
                <a href="/sunglasses" className="text-reset text-decoration-none">Sunglasses</a>
              </li>
              <li>
                <a href="/contactlenses" className="text-reset text-decoration-none">Contact Lenses</a>
              </li>
              <li>
                <a href="/about" className="text-reset text-decoration-none">About Us</a>
              </li>
            </ul>
          </MDBCol>

          {/* Contact Section */}
          <MDBCol lg="4" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> support@yourwebsite.com</p>
            <p><strong>Address:</strong> 123 Your Street, Your City, Your Country</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Footer Bottom Section */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        &copy; {new Date().getFullYear()} Your Website | All Rights Reserved.
        <a className="text-reset fw-bold ms-2" href="https://yourwebsite.com">
          Visit Us
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
