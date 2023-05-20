import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import Logo from "../assets/img/logo.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (valor) => {
    setActiveLink(valor);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>HOME</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>HABILIDADES</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>PROYECTOS</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/manuel-firman/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="linkedin icon" />
              </a>
            </div>
            <a href="#connect">
              <button>
                <span>Contactame!</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
