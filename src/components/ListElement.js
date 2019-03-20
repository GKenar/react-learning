import React from "react";

export const ListElement = ({ id, name, age, avatar, onClick }) => {
  return (
    <li onClick={onClick} style={{ border: "1px solid grey" }}>
      <div className="list-element">
        <h3>{`${name} ${age}`}</h3>
        <img
          src={avatar}
          style={{ width: 60, height: 60, borderRadius: 20, marginLeft: 10 }}
          alt="avatar"
        />
      </div>
    </li>
  );
};
