import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import imgHeader from "../assets/img/perfil1.png";

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
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a mi Portfolio!</span>
            <h1>{`MANUEL FIRMAN`}</h1>
            <h2><span className="txt-rotate"><span className="wrap">{texto}</span></span></h2>
            <p>
              Hola! Soy estudiante de programación en la UTN, cursando el ultimo año <br>
              </br>
            </p>
            <a href="../assets/files/Firman_Juan_CV.pdf" download="Firman_Juan_CV.pdf">
              <button>Descarga mi CV <ArrowDownCircle size={25}/></button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={imgHeader} alt="Imagen header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
