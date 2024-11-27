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
            <h5>Sobre</h5>
            <p>Transformando espaços com <span className='important-words'> segurança </span>  e <span className='important-words'> excelência </span> em cada detalhe.</p>
          </Col>
          <Col md={4}>
            <h5>Páginas</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">Sobre</Link></li>
              <li><Link to="/work" className="text-white">Serviços</Link></li>      
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p><a href="mailto:telasdoni@gmail.com" target='_blank'>Email: telasdoni@gmail.com</a></p>
            <p><a href="tel:+5511968579924" target='_blank'>Telefone: (11)96857-9924</a></p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>&copy; 2024 DIEGO <span className='important-words'>RAMOS</span>. Todos os direitos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
