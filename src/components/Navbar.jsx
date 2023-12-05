/* import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { CartWidget } from "./CartWidget";

export const CustomNavbar = () => {
  return (
    <Container className="justify-content-center">
      <Navbar expand="md" bg="light" data-bs-theme="light">
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            Repuestos Usados BMW
          </NavLink>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <NavLink to="category/motores" className="nav-link">
              Motores
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="category/cajas" className="nav-link">
              Cajas
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="category/diferenciales" className="nav-link">
              Diferenciales
            </NavLink>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Navbar>
    </Container>
  );
};
 */
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CartWidget } from "./CartWidget";
import "./CustomNavbar.css";

export const CustomNavbar = () => {
  return (
    <Navbar expand="md" bg="light" variant="light" className="custom-navbar">
      <Container fluid className="navbar-container">
        <Navbar.Brand>
          <NavLink to="/" className="nav-link">
            Repuestos Usados BMW
          </NavLink>
        </Navbar.Brand>
        <Nav className="text-sm">
          <Nav.Link>
            <NavLink to="category/motores" className="nav-link">
              Motores
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="category/cajas" className="nav-link">
              Cajas
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="category/diferenciales" className="nav-link">
              Diferenciales
            </NavLink>
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};