import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

import { CartWidget } from "./cartWidget";

export const CustomNavbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand>
        <NavLink to="/">Home</NavLink>
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to="category/Motores">Motores</NavLink>
          <NavLink to="category/Cajas">Cajas</NavLink>
          <NavLink to="category/Diferenciales">Diferenciales</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

/*  import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { CartWidget } from "./cartWidget";

export const CustomNavbar = () => {
  return (
    <BootstrapNavbar bg="dark" data-bs-theme="dark">
      <Container>
        <BootstrapNavbar.Brand href="#home">Repuestos Usados BMW</BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <NavLink to="category/Motores">Motores</NavLink>
          <NavLink to="category/Cajas">Cajas</NavLink>
          <NavLink to="category/Diferenciales">Diferenciales</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </BootstrapNavbar>
  );
}; */
