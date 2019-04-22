import React, { Component } from "react";
import { List } from "./List";
import { Switch } from "./Switch";
import ReduxCounter from "./ReduxCounter";

const studentsList = [
  {
    id: 1,
    name: "Вадик",
    age: 12,
    description: "Любит пельмехи",
    avatar: "https://2ch.pm/dr/src/115618/14864416923910.png"
  },
  {
    id: 2,
    name: "Петя",
    age: 29,
    description: "Любит пельмехи",
    avatar:
      "https://i.pinimg.com/736x/08/a9/0a/08a90a48a9386c314f97a07ba1f0db56--avatar-bb.jpg"
  },
  {
    id: 3,
    name: "Вова",
    age: 19,
    description: "Не любит пельмехи",
    avatar: "https://79.img.avito.st/avatar/social/1024x1024/4445563879.jpg"
  },
  {
    id: 4,
    name: "Даша",
    age: 19,
    description: "Любит пельмехи",
    avatar: "https://79.img.avito.st/avatar/social/1024x1024/4445563879.jpg"
  },
  {
    id: 5,
    name: "Маша",
    age: 19,
    description: "Любит пельмехи",
    avatar: "https://79.img.avito.st/avatar/social/1024x1024/4445563879.jpg"
  },
  {
    id: 6,
    name: "Каша",
    age: 19,
    description: "Любит кашу",
    avatar: "https://79.img.avito.st/avatar/social/1024x1024/4445563879.jpg"
  }
];

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

export default class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchEnable: true
    };
  }

  render() {
    return (
      <div className="body">
        <ReduxCounter />
        <List data={studentsList} />
        <Switch
          data={switchData}
          onSwitchChanged={this.onSwitchChanged}
          enable={this.state.switchEnable}
        />
        <button
          onClick={() =>
            this.setState(prev => ({ switchEnable: !prev.switchEnable }))
          }
        >
          {this.state.switchEnable ? "Unlocked" : "Locked"}
        </button>
      </div>
    );
  }

  onSwitchChanged = id => {
    console.log(id);
  };
}
