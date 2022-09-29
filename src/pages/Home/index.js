import Particle from "../../components/particles/index";
import HomeLeft from "../../components/homeLeft/index";
import HomeRight from "../../components/homeRight/index";
import {Container, Row, Col} from "react-bootstrap"
import "./style.css"

export default function HomePage(){

  return (
    <>
      <Particle/>
      <Container fluid={true} className="home-container">
        <Row className="home-main-container">
          <Col xl={7}>
            <HomeLeft/>
          </Col>
          <Col xl={5}>
            <HomeRight/>
          </Col>
        </Row>
      </Container>
    </>
  )
}