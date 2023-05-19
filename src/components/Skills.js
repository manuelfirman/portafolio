import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Row, Col, Container } from "react-bootstrap";
import sombra from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="contenedor">
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>HABILIDADES</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="javascript"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="typescript"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                    alt="express"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="html"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="css"
                  />
                </div>
              </Carousel>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="cplusplus"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                    alt="csharp"
                  />
                </div>
                <div className="item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet"/>
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                    alt="git"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github"
                  />
                </div>

                
              </Carousel>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                    alt="mongodb"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="postgresql"
                  />
                </div>
                <div className="item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"
                    alt="sqlserver"
                  />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
      <img className="fondo-izquierda" src={sombra} alt="background" />
    </section>
  );
};
