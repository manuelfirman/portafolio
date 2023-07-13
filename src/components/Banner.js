import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import imgHeader from "../assets/img/perfil1.png";
import pdf from "../assets/files/FIRMAN_JUAN_MANUEL_CV.pdf";

export const Banner = () => {
  const [numLoop, setNumLoop] = useState(0);
  const [borrando, setBorrando] = useState(false);
  const [texto, setTexto] = useState("");
  const [intervalo, setIntervalo] = useState(300 - Math.random() * 100);
  const [indice, setIndice] = useState(1);
  const periodo = 300;
  const stringsRotacion = ["Backend", "Developer", "Backend", "Developer", "UTN Student", ];

  useEffect(() => {
    let rotar = setInterval(() => {
      pulso();
    }, intervalo);

    return () => {
      clearInterval(rotar);
    };
  }, [texto]);

  const pulso = () => {
    let i = numLoop % stringsRotacion.length;
    let textoCompleto = stringsRotacion[i];
    let textoActualizado = borrando
      ? textoCompleto.substring(0, texto.length - 1)
      : textoCompleto.substring(0, texto.length + 1);

    setTexto(textoActualizado);

    if (!borrando && textoActualizado === textoCompleto) {
      setBorrando(true);
      setIndice((indicePrevio) => indicePrevio - 1);
      setIntervalo(periodo);
    } else if (borrando && textoActualizado.length === 0) {
      setBorrando(false);
      setNumLoop(numLoop + 1);
      setIndice(1);
      setIntervalo(periodo);
    } else {  
      setIndice((indicePrevio) => indicePrevio + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col className="banner-col-izq" xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a mi Portfolio!</span>
            <h1>{`MANUEL FIRMAN`}</h1>
            <h2><span className="txt-rotate"><span className="wrap">{texto}</span></span></h2>
            <p>
              Hola! Soy estudiante de programación en la UTN, cursando el ultimo año. Me enfoco principalmente en el desarrollo de aplicaciones web, especialmente en backend. En la universidad adquirí una formación sólida en conceptos fundamentales de informatica y programacion. También soy apasionado del desarrollo de juegos. Durante mi carrera tuve la oportunidad de trabajar tanto en proyectos individuales como en equipo, lo que, a dia de hoy, sigue fortaleciendo mis habilidades de comunicación y trabajo en equipo. <br>
              </br>
            </p>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download="FIRMAN_JUAN_MANUEL_CV.pdf">
              <button>Descarga mi CV <ArrowDownCircle size={25}/></button>
            </a>
          </Col>
          <Col className="banner-col-der" xs={12} md={6} xl={5}>
            <img src={imgHeader} alt="Imagen header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
