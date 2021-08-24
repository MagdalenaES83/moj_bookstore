import { Container, Jumbotron } from "react-bootstrap";

const MyJumbo = (props) => (
  <Jumbotron fluid>
    <Container>
      <h1> {props.title} </h1>
      <h3>
        “Always read something that will make you look good if you die in the
        middle of it.” - P.J. O’Rourke
      </h3>
    </Container>
  </Jumbotron>
);
export default MyJumbo;
