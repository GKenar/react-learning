import React, { Component } from "react";

export const ListCard = ({ id, name, age, avatar, description, onClick }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={onClick}>Назад</button>
      <div style={{ margin: 10, padding: 5, border: "2px solid black" }}>
        <img
          src={avatar}
          style={{ width: 100, height: 100, borderRadius: 20, marginLeft: 10 }}
          alt="avatar"
        />
        <h2>{`${name} ${age}`}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};
