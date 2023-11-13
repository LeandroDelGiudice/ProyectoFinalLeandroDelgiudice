
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import  "../main.css"

import { CartWidget } from "./cartWidget";

export const CustomNavbar = () => {
  return (
    <Navbar  bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand>
        <NavLink to="/">Home</NavLink>
        </Navbar.Brand>
        <Nav>
          <NavLink to="category/Motores">Motores</NavLink>
          <NavLink to="category/Cajas">Cajas</NavLink>
          <NavLink to="category/Diferenciales">Diferenciales</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}; 
