import { Link } from "react-router-dom"
import '../../scss/style.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FaHammer, FaHardHat } from 'react-icons/fa';
import { GiConcreteBag, GiBrickWall } from 'react-icons/gi';
import { MdBuild } from 'react-icons/md';
import { RiBuilding2Fill } from 'react-icons/ri';


const NavBar = () => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><FaHammer /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/work">Serviços</Nav.Link>
            <NavDropdown title="Contato" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <a href="https://wa.me/55119953463533?text=Olá,%20gostaria%20de%20solitar%20um%20orçamento" target="_blank">Whatsapp</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <a href="mailto:diegora@gmail.com" target="_blank">E-mail</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <a href="tel:+55971999999999">Tel: (11) 944646-43464</a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar