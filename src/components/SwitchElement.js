import React from "react";

export const SwitchElement = ({ children, onClick, active }) => {
  return (
    <button
      style={{ backgroundColor: active ? "red" : "white", padding: 10 }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
