import React from "react";

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
      <div onClick={this.likesIncrement}>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.image_url}
          alt={this.props.title}
          title={this.props.title}
        />
        <p>💘: {this.state.counter} </p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
