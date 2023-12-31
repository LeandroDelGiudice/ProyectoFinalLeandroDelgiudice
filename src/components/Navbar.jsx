import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { CartWidget } from "./CartWidget";
import "./CustomNavbar.css";
import bmw from "../assets/bmw.png";
export const CustomNavbar = () => {
  return (
    <Navbar
      expand="md"
      bg="dark"
      variant="dark"
      className="custom-navbar justify-content-center mx-auto"
    >
      <Container fluid className="navbar-container">
        <Navbar.Brand>
          <img
            src={bmw}
            alt="Logo BMW"
            style={{ width: "60px", marginRight: "450px" }}
          />
          <NavLink to="/" className="nav-link">
            <span className="display-5">Repuestos Usados BMW</span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-sm">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={Link}
                to="category/motores"
                className="nav-link text-dark"
              >
                Motores
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="category/cajas"
                className="nav-link text-dark"
              >
                Cajas
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="category/diferenciales"
                className="nav-link text-dark"
              >
                Diferenciales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
