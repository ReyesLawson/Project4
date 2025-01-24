import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap"; // Condensed imports
import { NavLink } from "react-router-dom";
import "./NavBar.css";


const NavBar=() => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="nav-container container-fluid">
        <Navbar className="container-fluid">
          <Container>
            <Navbar.Brand href="#home">
            <i class="bi bi-pencil"></i>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <NavLink to="/Homepage" className="nav-link">
                Contact Us
              </NavLink>
              {/* <NavLink to="/contactpage" className="nav-link">
                Contact Us
              </NavLink> */}
              
            </Nav>
          </Container>
        </Navbar>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Lists</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ol>
              <div>
                <Button
                  type="OnClick"
                  className="nav-list-buttons d-flex flex-row fs-4 offcanvas-buttons">
                  <NavLink to="/todayslist" className="nav-link">
                    Today
                  </NavLink>
                </Button>
  
                <Button
                  type=""
                  className="nav-list-buttons d-flex flex-row fs-4 offcanvas-buttons">
                  <NavLink to="/todayslist" className="nav-link">
                    Tomorrow
                  </NavLink>
                </Button>
              </div>
            </ol>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
  export default NavBar; 
