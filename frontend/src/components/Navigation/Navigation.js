import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle, FaEnvelope } from 'react-icons/fa';

function CustomNavbar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">RU Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Product Page</Nav.Link>
            <Nav.Link as={Link} to="/orders">Order Page</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <FaShoppingCart size={20} />
            </Nav.Link>
            <NavDropdown
              title={<FaUserCircle size={20} />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#">Login</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <FaEnvelope size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
