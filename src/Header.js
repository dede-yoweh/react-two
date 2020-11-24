import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';

function Header() {
  return (
   <div className="container">
     <Navbar expand="lg" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">StartUps</Nav.Link>
      <Nav.Link href="#link">Register</Nav.Link>
      <Nav.Link href="#link">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   </div>
  );
}

export default Header;