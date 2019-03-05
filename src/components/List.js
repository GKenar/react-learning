import React from "react";
import { ListElement } from "./ListElement";

export const List = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <ListElement
          key={item.id}
          id={item.id}
          name={item.name}
          age={item.age}
          avatar={item.avatar}
        />
      ))}
    </ul>
  );
};
