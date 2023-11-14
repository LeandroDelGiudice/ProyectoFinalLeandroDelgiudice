
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import  "../main.css"

import { CartWidget } from "./cartWidget";

export const CustomNavbar = () => {
  return (
    
      <Container className="justify-content-center">
        <Navbar expand ="md" bg="light" data-bs-theme="light" >
        <Navbar.Brand>
        <NavLink to="/">Home</NavLink>
        </Navbar.Brand>
        <Nav>
          <Nav.Link >
          <NavLink to="category/Motores">Motores</NavLink> 
          </Nav.Link>
          <Nav.Link>
          <NavLink to="category/Cajas">Cajas</NavLink>
          </Nav.Link>
          <Nav.Link>
          <NavLink to="category/Diferenciales">Diferenciales</NavLink>
          </Nav.Link>
          
        </Nav>
       
        <CartWidget />
        
        </Navbar>
      </Container>
    
  );
}; 
