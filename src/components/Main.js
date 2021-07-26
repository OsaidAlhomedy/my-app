import React from "react";
import HornedBeasts from "./HornedBeasts";
import DataArr from "./data.json";

class Main extends React.Component {
  getData() {
    let dataArr = JSON.parse(JSON.stringify(DataArr));
    return dataArr;
  }

  render() {
    return (
      <div className="main">
        {this.getData().map((element) => {
          return (
            <HornedBeasts
              title={element.title}
              image_url={element.image_url}
              description={element.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
