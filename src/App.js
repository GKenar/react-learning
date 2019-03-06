import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Switch } from "./components/Switch";

const switchData = [
  { id: 0, content: "Кнопка 1" },
  { id: 1, content: "Кнопка 2" },
  { id: 2, content: "Кнопка 3" },
  { id: 3, content: "Кнопка 4" },
  {
    id: 4,
    content: (
      <img
        src="https://avatars.mds.yandex.net/get-pdb/1501870/6a3eab0f-d8a0-42b4-96ef-c5e67eee2918/s1200?webp=false"
        alt="image"
        style={{ width: 100, height: 50 }}
      />
    )
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} header="НАЗВАНИЕ САЙТА" />
        <Body />
        <Switch data={switchData} onSwitchChanged={this.onSwitchChanged} />
        <Footer />
      </div>
    );
  }

  onSwitchChanged = (id) => {
    console.log(id);
  }
}

export default App;
