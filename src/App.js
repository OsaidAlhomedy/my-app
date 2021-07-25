import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="all">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
