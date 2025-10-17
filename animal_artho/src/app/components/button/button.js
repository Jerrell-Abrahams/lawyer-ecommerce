import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const base =
    "rounded border border-[#217f7f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-sm";

  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const defaultStyle =
    "bg-[#217f7f] text-gray-100 hover:bg-white hover:text-gray-600 text-center cursor-pointer transition-all duration-300";
  const inverseStyle =
    "bg-white text-[#217f7f] text-gray-600 hover:bg-[#217f7f] hover:text-gray-100 border-[#217f7f] cursor-pointer transition-all duration-300";

  const variantClass =
    variant === "inverse" ? inverseStyle : defaultStyle;

  return (
    <button
      type={type}
      className={`${base} ${sizeClasses[size] || sizeClasses.md} ${variantClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };