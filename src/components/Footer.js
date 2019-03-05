import React, { Component } from "react";
import { Advertising } from "./Advertising";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Advertising text="Buy pepsi!" adSource="https://avatars.mds.yandex.net/get-mpic/1363071/img_id2166224983314119755.jpeg/9hq"/>
          <Advertising text="MacDonalds" adSource="https://informupack.ru/upload/iblock/14b/14b1a3706cf102c9df33b6113acc7ee2.jpg"/>
        </div>
      </footer>
    );
  }
}
