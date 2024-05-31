import React from "react";

const ColorCard = ({ color, title }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 m-2 border rounded shadow-lg"
      style={{ backgroundColor: color }}
    >
      <div
        className="w-16 h-16 rounded-full border border-gray-300"
        style={{ backgroundColor: color }}
      ></div>
      <h2 className="mt-2 text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-1 text-gray-600">{color}</p>
    </div>
  );
};

export default ColorCard;
