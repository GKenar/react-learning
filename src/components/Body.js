import React, { Component } from "react";
import { List } from "./List";

const studentsList = [
  { id: 1, name: "Вадик", age: 12, avatar: "https://2ch.pm/dr/src/115618/14864416923910.png" },
  { id: 2, name: "Петя", age: 29, avatar: "https://i.pinimg.com/736x/08/a9/0a/08a90a48a9386c314f97a07ba1f0db56--avatar-bb.jpg" },
  { id: 3, name: "Вова", age: 19, avatar: "https://79.img.avito.st/avatar/social/1024x1024/4445563879.jpg" }
];

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="body">
        <List data={studentsList} />
      </div>
    );
  }
}
