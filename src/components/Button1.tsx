import React from "react";

interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button1 = ({ children, onClick, color }: Props) => {
  return (
    <button
      className="bg-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      style={{ backgroundColor: color }}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button1;
