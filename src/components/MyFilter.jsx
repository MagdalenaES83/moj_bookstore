import { InputGroup, FormControl, Row, Col, Container, Button } from "react-bootstrap";

const MyFilter = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <Button variant="dark">Search</Button>
            <FormControl placeholder="Title" aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFilter;
