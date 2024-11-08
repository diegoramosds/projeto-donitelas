import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre Nós</h5>
            <p>Informações sobre a empresa ou site.</p>
          </Col>
          <Col md={4}>
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">Sobre</Link></li>
              <li><Link to="/work" className="text-white">Serviços</Link></li>      
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p><a href="mailto:exemple@gmail.com" target='_blank'>Email: contato@empresa.com</a></p>
            <p><a href="tel:+55971999999999" target='_blank'>Telefone: (11) 1234-5678</a></p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; 2024 Sua Empresa. Todos os direitos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
