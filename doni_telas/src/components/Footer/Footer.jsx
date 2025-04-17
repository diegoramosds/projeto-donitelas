import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre</h5>
            <p>
              Transformando espaços com{" "}
              <span className="important-words"> segurança </span> e{" "}
              <span className="important-words"> excelência </span> em cada
              detalhe.
            </p>
          </Col>
          <Col md={4}>
            <h5>Páginas</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Sobre</Link>
              </li>
              <li>
                <Link to="/work">Serviços</Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p>
              Email:
              <a href="mailto:telasdoni@gmail.com" target="_blank">
                {" "}
                telasdoni@gmail.com
              </a>
            </p>
            <p>
              Telefone:
              <a href="tel:+5511968579924" target="_blank">
                {" "}
                (11)96857-9924
              </a>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <small>
              &copy; 2025 DIEGO RAMOS.
              Todos os direitos reservados.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
