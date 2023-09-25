import React, { useState } from "react";

const ColorPalette = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="colorPalette">
  
      {colors.map((color,i) => (
        <div
          key={color}
          onClick={() => handleColor(color)}
          className={`color_div ${selectedColor == color ? "selected" : ""}`}
          style={{ backgroundColor: color }}
        >
          <div className="text">
            {selectedColor == color ? <div>#{i+1} {color}</div> : ""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
