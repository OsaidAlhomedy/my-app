import React from "react";
import HornedBeasts from "./HornedBeasts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

class Main extends React.Component {
  getData() {
    let dataArr = JSON.parse(JSON.stringify(this.props.data));
    return dataArr;
  }

  render() {
    return (
      <>
        {this.getData().map((element) => {
          return (
            <Col lg={4}>
              <HornedBeasts
                className="card"
                title={element.title}
                image_url={element.image_url}
                description={element.description}
                showModal={this.props.stateUpdate}
              />
            </Col>
          );
        })}
      </>
    );
  }
}

export default Main;
