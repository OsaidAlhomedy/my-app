import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

class Forms extends Component {
  handleSub = (event) => {
    event.preventDefault();
    let submittedData = event.target.select.value;
    this.props.handleSubmission(submittedData);
  };

  render() {
    return (
      <Form onSubmit={this.handleSub}>
        <FloatingLabel
          controlId="floatingSelect"
          label="Select the Number of Horns"
        >
          <Form.Select aria-label="Floating label select example" name="select">
            <option value="all">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Wow</option>
          </Form.Select>
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Forms;
