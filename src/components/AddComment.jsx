import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 5,
      elementId: null,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
        this.setState({
            comment: {
                ...this.state.comment,
                elementId: this.props.asin
            }
        })
    }
}



  sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNmQyM2IzNTgxNzAwMTVjMjI3NTEiLCJpYXQiOjE2Mjk5ODEzMzksImV4cCI6MTYzMTE5MDkzOX0.6NPYoxieq9bDxaEg_g0NYorTMKgPTRmtNkTPDcW4rAk",
          },
        }
      );
      if (response.ok) {
        alert("OK");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label className="mt-5"></Form.Label>
            <Form.Control
              as="textarea"
              rows={12}
              className="writeCom"
              type="text"
              placeholder="write comment"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="writeCom">Rating</Form.Label>
            <Form.Control
              className="writeCom"
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button
            className="text-justify-content-center writeCom "
            variant="success"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
