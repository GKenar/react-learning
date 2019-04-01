import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({name, href}) => {
  return (
    <div style={{ marginRight: 20 }}>
      <h1>
        <RouterLink to={href}>{name}</RouterLink>
      </h1>
    </div>
  );
};
