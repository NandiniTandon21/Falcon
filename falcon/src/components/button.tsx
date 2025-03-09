import React from "react";
import classNames from "classnames";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  selected?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconPosition = "left",
  hover = true,
  size = "medium",
  disabled = false,
  selected = false,
  className,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-small focus:outline-none transition-colors";

  const sizeStyles = {
    small: text ? "mx-1 my-1 text-sm" : "m-1.5",
    medium: text ? "mx-3 my-2 text-base" : "m-2.5",
    large: text ? "mx-4 my-3 text-lg" : "m-3.5",
  };

  const responsiveSizeStyles = {
    small: text ? "sm:px-2 sm:py-0.5 sm:text-sm" : "sm:p-2",
    medium: text ? "md:px-4 md:py-1 md:text-base" : "md:p-3",
    large: text ? "lg:px-5 lg:py-2 lg:text-lg" : "lg:p-3",
  };

  const colorStyles = disabled
    ? "bg-gray-300 text-gray-400 cursor-not-allowed"
    : "bg-blue-500 text-white";

  const hoverStyles = hover && !disabled ? "hover:bg-blue-400" : "";

  const selectedStyles = selected ? "outline outline-2 outline-blue-800" : "";

  // Ensuring icon-only buttons are always circular
  const shapeStyles =
    !text && icon
      ? "rounded-full"
      : size === "small" || size === "medium"
      ? "rounded-full"
      : "rounded-xl";

  const buttonClasses = classNames(
    baseStyles,
    sizeStyles[size],
    responsiveSizeStyles[size],
    colorStyles,
    hoverStyles,
    selectedStyles,
    shapeStyles,
    className // Allowing overriding classes
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {icon && iconPosition === "left" && (
        <span className={text ? "mr-2" : ""}>{icon}</span>
      )}
      {text}
      {icon && iconPosition === "right" && (
        <span className={text ? "ml-2" : ""}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
