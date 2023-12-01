import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import logo from './Multimedia/logo_transparent.png'

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className='brand' href="home">
          <img className='logo-img' src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="dropdown">
            <NavDropdown title="Repuestos" id="basic-nav-dropdown">
              <NavDropdown.Item href="autos">Autos</NavDropdown.Item>
              <NavDropdown.Item href="motos">Motos</NavDropdown.Item>
              <NavDropdown.Item href="camionetas">Camionetas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;