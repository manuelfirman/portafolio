import { Col } from "react-bootstrap";

export const ProjectCard = ({titulo, descripcion, imgUrl, repoUrl}) => {
  return(
    <Col sm={6} md={4}>
      <div className="project-imgbox">
        <img src={imgUrl} />
        <div className="project-txt">
          <h4>{titulo}</h4>
          <span>{descripcion}</span>
          <div>
          <a href={repoUrl} target="_blank"><button>Link</button></a>
          </div>
        </div>
      </div>
    </Col>
  )
}
