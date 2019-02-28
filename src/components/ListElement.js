import React from "react";

export const ListElement = ({ id, content }) => {
  return <li key={id}>{content}</li>;
};
