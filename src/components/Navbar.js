// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PulsaKu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {/* Dropdown Menu Beli */}
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Beli
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/pulsa">
                  Pulsa
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/kuota">
                  Kuota
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={Link} to="/promo">
              Promo
            </Nav.Link>
            <Nav.Link as={Link} to="/kontak">
              Kontak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
