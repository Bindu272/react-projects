import React, { useState } from 'react';
import './colorGenarator.css';
import { getRgb, rgbToHex } from './ColorUtils';

const ColorGenerator = () => {
  const [color, setColor] = useState('#000');

  const handleGenerate = () => {
    const newColor = {
      r: getRgb(),
      g: getRgb(),
      b: getRgb(),
    };
    setColor(rgbToHex(newColor.r, newColor.g, newColor.b));
  };

  return (
    <div style={{ background: color }} className="colorContainer">
      <button style={{ color: color }} onClick={handleGenerate} className="buttonColorGenerator">
        {color}
      </button>
    </div>
  );
};

export default ColorGenerator;
