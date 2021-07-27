import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./App.css";
import DataArr from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  stateHandleShow = () => {
    this.setState({
      show: true,
    });
  };

  stateHandleHide = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <Container fluid align="center">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <SelectedBeast show={this.state.show} hide={this.stateHandleHide} />
          <Main data={DataArr} stateUpdate={this.stateHandleShow} />
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
