import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap"; // Condensed imports
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = ({ user, logout }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    logout();
    navigate("/");
  }
  return (
    <Container className="nav-container">
      <Navbar className="d-flex flex-row">
        <Navbar.Brand href="/HomePage">
          <i className="bi bi-pencil"></i>
        </Navbar.Brand>
        <Nav.Link href="/" className="me-3">
          Login
        </Nav.Link>
        <Nav.Link href="/ContactForm" className="nav-link me-auto">
          Contact Us
        </Nav.Link>
        
        {user != "" ? (
          <div>
            <span className="welcome-container text-dark fw-bold me-3">
              Welcome {user}!
            </span>
          </div>
        ) : null}

        {user != "" ? (
          <div>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </div>
              ) : null}

        {/* </Nav> */}
      </Navbar>
    </Container>
  );
};
export default NavBar;
