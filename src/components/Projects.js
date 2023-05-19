import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
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
      titulo: "Primer Portfolio (2022)",
      descripcion: "Desarrollo de portfolio con HTML, CSS y Javascript. Comenzando busqueda laboral",
      imgUrl: imgPortfolio,
    },
    {
      titulo: "Web App No-Country (2023)",
      descripcion: "Emulacion de trabajo en la que desarrollamos en equipo una web app para un consultorio medico utilizando el stack MERN",
      imgUrl: imgConsultorio,
    },
    {
      titulo: "Space Invaders C++ (2021)",
      descripcion: "Mi primer experiencia con POO utilizando C++",
      imgUrl: imgSpaceInvaders,
    },
    {
      titulo: "Gran Cerdo (2021)",
      descripcion: "Primer proyecto para la universidad, utilizando C++ y rlutil",
      imgUrl: imgGranCerdo,
    },
    {
      titulo: "Web Nails Giss (2022)",
      descripcion: "Primeros pasos con HTML, CSS y Javascript",
      imgUrl: imgNailsGiss,
    },
    {
      titulo: "Laraster RPG (2022)",
      descripcion: "Desarrollo de juego estilo RPG con C++ y SFML. Un gran desafio en POO",
      imgUrl: imgLaraster,
    },
  ];

  const proyectos2 = [
    {
      titulo: "Bhaskara [Fx Cuadratica] (2021)",
      descripcion: "Siempre quise una calculadora con ecuacion cuadratica",
      imgUrl: imgBhaskara,
    },
    {
      titulo: "Cuestionario Web (2022)",
      descripcion: "Una de mis practicas con logica en desarrollo web",
      imgUrl: imgCuestionario,
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
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.<br></br> Lorem Ipsum has been the
                    industry's standard dummy text.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {proyectos1.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {proyectos2.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}/>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
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
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
