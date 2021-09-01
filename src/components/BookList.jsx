import React from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends React.Component {
   state = {
     searchQ: "",
     selectedB: null,
   };

  render() {
    return (
      <Container>
        <Row>
          <Col md={10}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>
                    <h3 className="my-3">Search Book </h3>{" "}
                  </Form.Label>
                  <Form.Control
                    id="input"
                    type="text"
                    placeholder="Search here"
                    value={this.state.searchQ}
                    onChange={(e) =>
                      this.setState({ searchQ: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              {this.props.books
                // // FILTER FOR SEARCHING
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQ)
                )
                .slice(0, 30)
                // MAPING SINGLE-BOOK FOR FULL ARRAY
                .map((b) => (
                  <Col xs={2}>
                    <SingleBook
                      book={b}
                      selectedB={this.state.selectedB}
                      changeSelectedBook={(asin) =>
                        this.setState({
                          selectedB: asin,
                        })
                      }
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={2}>
            <h2 className="mt-3">Comments </h2>

            <CommentArea asin={this.state.selectedB} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
