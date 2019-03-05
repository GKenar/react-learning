import React from "react";

export const Advertising = ({ adSource, text }) => {
  return (
    <div style={{ border: "2px solid black", borderRadius: 10, padding: 5, margin: 10 }}>
      <img
        src={adSource}
        alt="advertising"
        style={{ height: 120, width: 120 }}
      />
      <h3>{text}</h3>
    </div>
  );
};
