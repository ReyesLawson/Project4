import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap"; // Condensed imports
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ user }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  


  return (
    <Container className="nav-container">
      <Navbar className="d-flex flex-row">
        <Navbar.Brand href="/HomePage">
          <i className="bi bi-pencil"></i>
        </Navbar.Brand>
        {/* <Nav className="me-auto d-flex"> */}
        <Nav.Link href="/" className="me-3">
          Login
        </Nav.Link>
        <Nav.Link href="/ContactForm" className="nav-link me-auto">
          Contact Us
        </Nav.Link>
        {/* <NavLink to="/contactpage" className="nav-link">
                Contact Us
              </NavLink> */}
        {user != "" ? (
          <div>
            <span className="welcome-container text-dark fw-bold">
              Welcome {user}!
            </span>
          </div>
        ) : (
          null
        )}

        {/* </Nav> */}
      </Navbar>
     
    </Container>
  );
};
export default NavBar;
