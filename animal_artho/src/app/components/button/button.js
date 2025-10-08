import React from "react";

const Button = ({ children, onClick, type = "button", className = "", ...props }) => (
  <button type={type} className={className} onClick={onClick} {...props}>
    {children}
  </button>
);

export { Button };