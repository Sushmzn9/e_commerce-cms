import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      {" "}
      <Navbar expand="md" className="bg-dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            E Commerce
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <Link to="/" className="nav-link">
                Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
