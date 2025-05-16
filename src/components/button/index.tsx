import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties; // Added style prop
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  style,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        document
          .getElementById("presale")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      style={style} // Apply inline styles
      className={`bg-pink-700 font-bold px-4 py-3 rounded-lg shadow-md hover:bg-pink-700 transition-all ${className}`}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default Button;
