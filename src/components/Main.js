import React from "react";
import HornedBeasts from "./HornedBeasts";
import DataArr from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

class Main extends React.Component {
  getData() {
    let dataArr = JSON.parse(JSON.stringify(DataArr));
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
              />
              </Col>
            );
          })}
        
      </>
    );
  }
}

export default Main;
