import React from "react";

interface TagProps {
  label: string;
  selected: boolean;
  className?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  selectedClassName?: string;
}

const Tag: React.FC<TagProps> = ({
  icon,
  label,
  onClick,
  selected,
  className,
  selectedClassName,
}) => {
  return (
    <button
      className={`px-4 py-2 my-1 rounded-full flex items-center gap-2 ${
        selected
          ? `${selectedClassName || "bg-blue-500 text-white"}`
          : "bg-blue-200 text-blue-500 hover:bg-blue-300 hover:text-white"
      } ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Tag;
