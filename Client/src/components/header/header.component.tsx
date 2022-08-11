import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./header.component.css";

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Bike Life</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
