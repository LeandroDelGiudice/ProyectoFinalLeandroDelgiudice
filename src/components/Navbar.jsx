import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "../main.css";
import { CartWidget } from "./CartWidget";

export const CustomNavbar = () => {
  return (
    <Container className="justify-content-center">
      <Navbar expand="md" bg="light" data-bs-theme="light">
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <NavLink to="category/gorros" className="nav-link">
              Motores
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="category/camisas" className="nav-link">
              Cajas
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="category/Diferenciales" className="nav-link">
              Diferenciales
            </NavLink>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar>
    </Container>
  );
};
