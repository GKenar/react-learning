import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ListElement } from "./components/ListElement";

const listData = [
  { id: 1, content: "Hello, world" },
  { id: 2, content: "Test item 2" },
  { id: 3, content: "Last item" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          {listData.map(item => (
            <ListElement id={item.id} content={item.content} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
