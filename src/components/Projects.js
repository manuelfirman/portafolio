import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sombra2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import imgBhaskara from "../assets/img/work/bhaskara.png";
import imgSpaceInvaders from "../assets/img/work/spaceinvaders.png";
import imgGranCerdo from "../assets/img/work/grancerdo1.png";
import imgNailsGiss from "../assets/img/work/webnails.png";
import imgCuestionario from "../assets/img/work/cuestionario.png";
import imgPortfolio from "../assets/img/work/portfolio.png";
import imgConsultorio from "../assets/img/work/consultoriomern.png";
import imgLaraster from "../assets/img/work/laraster.png";

export const Projects = () => {
  const proyectos1 = [
    {
      titulo: "Primer Portfolio",
      descripcion: "Desarrollo de portfolio con HTML, CSS y Javascript. Comenzando busqueda laboral",
      imgUrl: imgPortfolio,
      repoUrl: "https://manuelfirman.github.io/",
    },
    {
      titulo: "Web App No-Country",
      descripcion: "Emulacion de trabajo en la que desarrollamos en equipo una web app para un consultorio medico utilizando el stack MERN",
      imgUrl: imgConsultorio,
      repoUrl: "https://consultoriomern.vercel.app/",
    },
    {
      titulo: "Bhaskara [Fx Cuadratica] (2021)",
      descripcion: "Siempre quise una calculadora con ecuacion cuadratica",
      imgUrl: imgBhaskara,
      repoUrl: "https://github.com/manuelfirman/bhaskara-c",
    },
    {
      titulo: "Gran Cerdo",
      descripcion: "Primer proyecto para la universidad, utilizando C++ y rlutil",
      imgUrl: imgGranCerdo,
      repoUrl: "https://github.com/manuelfirman/proyectoGranCerdo",
    },
    {
      titulo: "Web Nails Giss",
      descripcion: "Primeros pasos con HTML, CSS y Javascript",
      imgUrl: imgNailsGiss,
      repoUrl: "https://github.com/manuelfirman/nailsgiss-web",
    },
    {
      titulo: "Laraster RPG",
      descripcion: "Desarrollo de juego estilo RPG con C++ y SFML. Un gran desafio en POO",
      imgUrl: imgLaraster,
      repoUrl: "https://github.com/manuelfirman/LabGameVS",
    },
  ];

  const proyectos2 = [

    {
      titulo: "Cuestionario Web (2022)",
      descripcion: "Una de mis practicas con logica en desarrollo web",
      imgUrl: imgCuestionario,
      repoUrl: "",
    },
        {
      titulo: "Space Invaders C++",
      descripcion: "Mi primer experiencia con POO utilizando C++",
      imgUrl: imgSpaceInvaders,
      repoUrl: "",
    },
  ]

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>PROYECTOS</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="primera">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                      <Nav.Item>
                        <Nav.Link eventKey="primera">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="segunda">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="tercera">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="primera">
                        <Row>
                          {proyectos1.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="segunda">
                      <Row>
                          {proyectos2.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tercera">
                        <p>
                          En construcción ...
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={sombra2} alt="sombrafondo"/>
    </section>
  );
};
