import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  likesIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <Card
        style={{ width: "18rem", height: "30rem" }}
        onClick={this.likesIncrement}
      >
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary"> 💘 : {this.state.counter}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;
