import { Col } from "react-bootstrap";

export const ProjectCard = ({titulo, descripcion, imgUrl}) => {
  return(
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{titulo}</h4>
          <span>{descripcion}</span>
        </div>
      </div>
    </Col>
  )
}
