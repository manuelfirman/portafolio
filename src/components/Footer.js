import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../assets/img/linkedin.svg";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={5}>
            <img src={logo} className="logo" alt="logo" />
          </Col>
          <Col sm={5} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/manuel-firman/" target="_blank">
                <img src={linkedinIcon} alt="linkedin icon"/>
              </a>
            </div>
            <p>Backend Developer</p>
            <p>Grado en Higiene y Seguridad Laboral</p>
            <p>Técnico Electrónico en Sistemas de Comuninación</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
