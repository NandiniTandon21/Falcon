import React from "react";
import classNames from "classnames";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  selected?: boolean;
  hover?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  hover = true,
  size = "medium",
  disabled = false,
  selected = false,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-small focus:outline-none transition-colors";

  const sizeStyles = {
    small: text ? "px-2 py-1 text-sm" : "p-2",
    medium: text ? "px-3 py-2 text-base" : "p-3",
    large: text ? "px-4 py-3 text-lg" : "p-4",
  };

  const responsiveSizeStyles = {
    small: text ? "sm:px-4 sm:py-2 sm:text-base" : "sm:p-3",
    medium: text ? "md:px-5 md:py-3 md:text-lg" : "md:p-4",
    large: text ? "lg:px-6 lg:py-4 lg:text-xl" : "lg:p-5",
  };

  const colorStyles = disabled
    ? "bg-gray-300 text-gray-400 cursor-not-allowed"
    : "bg-blue-500 text-white";

  const hoverStyles = hover && !disabled ? "hover:bg-blue-400" : "";

  const selectedStyles = selected ? "outline outline-2 outline-blue-800" : "";

  // Ensuring icon-only buttons are always circular
  const shapeStyles = !text && icon ? "rounded-full" : "rounded-xl";

  const buttonClasses = classNames(
    baseStyles,
    sizeStyles[size],
    responsiveSizeStyles[size],
    colorStyles,
    hoverStyles,
    selectedStyles,
    shapeStyles
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {icon && <span className={text ? "mr-2" : ""}>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
