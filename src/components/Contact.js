import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/perfil.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInicial = {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  };
  const [detalleForm, setDetalleForm] = useState(formInicial);
  const [textoBoton, setTextoBoton] = useState("Enviar");
  const [status, setStatus] = useState({});

  const actualizarForm = (categoria, valor) => {
    setDetalleForm({
      ...detalleForm,
      [categoria]: valor,
    });
  };

  const enviar = async (e) => {
    e.preventDefault();
    setTextoBoton("Enviando...");
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(detalleForm),
    // });
    setTextoBoton("Enviado");
    // let result = await response.json();
    setDetalleForm(formInicial);
    // if (result.code == 200) {
    setStatus({
      succes: true,
      message: "La funcion se añadira proximamente! Gracias por tu paciencia.",
    });
    // } else {
    //   setStatus({ succes: false, message: 'Algo salió mal, intente nuevamente mas tarde'});
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="contactame"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>CONTACTO</h2>
                  <form onSubmit={enviar}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={detalleForm.nombre}
                          placeholder="Nombre"
                          onChange={(e) =>
                            actualizarForm("nombre", e.target.valor)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={detalleForm.apellido}
                          placeholder="Apellido"
                          onChange={(e) =>
                            actualizarForm("apellido", e.target.valor)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={detalleForm.email}
                          placeholder="Email"
                          onChange={(e) =>
                            actualizarForm("email", e.target.valor)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={detalleForm.mensaje}
                          placeholder="Mensaje"
                          onChange={(e) =>
                            actualizarForm("mensaje", e.target.valor)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{textoBoton}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <div className="msgStatus">
                            <p className={ status.success === false ? "danger" : "success" }> {status.message}</p>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
