import { Container, Jumbotron, Col, Row } from "react-bootstrap";
import MyCarousel from "./MyCarousel";

const MyJumbo = ({ location, history, match, title, }) => (
  <>
  <Jumbotron fluid>
    <Container>
      <h1> {title} </h1>
      <h3>
        “Always read something that will make you look good if you die in the
        middle of it.” - P.J. O’Rourke
      </h3>
    </Container>
  </Jumbotron>
  <Row> 
    <Col md={2}> </Col>
    <Col md={6}> 
    <MyCarousel></MyCarousel>
    <Col md={2}> </Col>
    </Col>
  </Row>
  
  </>

);
export default MyJumbo;
