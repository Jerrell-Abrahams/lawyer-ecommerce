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
    "rounded font-semibold border border-[#217f7f] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-sm";

  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const defaultStyle =
    "bg-[#217f7f] text-white hover:bg-white hover:text-black text-center";
  const inverseStyle =
    "bg-white text-[#217f7f] hover:bg-[#217f7f] hover:text-white border-[#217f7f]";

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