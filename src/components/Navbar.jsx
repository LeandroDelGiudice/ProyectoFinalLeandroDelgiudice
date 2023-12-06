import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CartWidget } from "./CartWidget";
import "./CustomNavbar.css";

export const CustomNavbar = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="custom-navbar justify-content-center mx-auto">
      <Container fluid className="navbar-container">
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            <span className="display-5">Repuestos Usados BMW</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-sm">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="category/motores" className="nav-link text-dark">
                  Motores
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="category/cajas" className="nav-link text-dark">
                  Cajas
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="category/diferenciales" className="nav-link text-dark">
                  Diferenciales
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}; 
