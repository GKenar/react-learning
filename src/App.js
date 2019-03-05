import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} header="НАЗВАНИЕ САЙТА" />
        <Body />
        <Footer />
      </div> 
    );
  }
}

export default App;
