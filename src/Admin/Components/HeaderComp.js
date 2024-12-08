import React from 'react';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';

// const HeaderComp = ({token}) => {
    // console.log(token)//give undefined

const HeaderComp = () => {
    const location = useLocation();
    const { token } = location.state || {};
    console.log("HeaderComp Token: ",token); // This correctly log the token
return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Lenskart Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/home" state={{token}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/additem" state={{token}}>Add Item</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/addcategory" state={{token}}>Add Category</Nav.Link>
            <Nav.Link as={Link} to="/admin/home/addstylescategory" state={{token}}>Add Styles Category</Nav.Link>
            <NavDropdown title="Display" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin/home/items" state={{token}}>Display Items</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/home/categories" state={{token}}>Display Category</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/home/stylecategories" state={{token}}>Display Styles Category</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    <Outlet/>
    </>
)
}

export default HeaderComp;
