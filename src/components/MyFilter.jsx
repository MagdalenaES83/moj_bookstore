import {InputGroup, FormControl, Row, Col, Container} from 'react-bootstrap'

const MyFilter =() => {
    return (

<Container> 
    <Row> 
        <Col md={6}>
<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
    <FormControl
      placeholder="Title"
      
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  </Col>
  </Row>
</Container>
)
}

export default MyFilter