import { Link } from "react-router-dom"
import '../../scss/style.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useEffect, useRef, useState } from "react";

import { motion } from "motion/react"
import { Menu, Phone } from "lucide-react";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);


  const toggleMenu = () => setExpanded(!expanded);

  const closeMenu = () => setExpanded(false);

 
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
    <div className="main-nav">
      <Navbar ref={navbarRef} expanded={expanded} expand="lg">
      <Container>
        <div className="options-nav">
          <Navbar.Brand as={Link} to="/"><strong>DONI<span className="important-words">TELAS</span></strong></Navbar.Brand>
          <Navbar.Toggle onClick={toggleMenu} aria-controls="basic-navbar-nav">
            <Menu size={28} color="#ffffff"/>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto my-2 ">
            {/* <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="options-nav"> */}
            <Nav.Link as={Link} to="/" onClick={closeMenu}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeMenu}>Sobre</Nav.Link>
            <Nav.Link as={Link} to="/work" onClick={closeMenu}>Serviços</Nav.Link>
            <Nav.Link as={Link} to="/information" onClick={closeMenu}>Mais informações</Nav.Link> 
            {/* </Nav></motion.nav> */}
            <NavDropdown title="Contato" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
              <a href="https://wa.me/5511968579924?text=Olá,%20gostaria%20de%20solitar%20um%20orçamento" target="_blank">Whatsapp</a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <a href="tel:+5511968579924" target="_blank">Ligar Agora</a>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" as={Link} to="/contact" onClick={closeMenu}>
                Formulário de contato
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to='/contact' className="nav-button">
        <Phone size={15}/>Orçamento
        </Link>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default NavBar