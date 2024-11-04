import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">Sobre</a></li>
              <li><a href="#services" className="text-white">Serviços</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p>Email: contato@empresa.com</p>
            <p>Telefone: (11) 1234-5678</p>
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
