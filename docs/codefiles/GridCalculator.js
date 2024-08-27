import React, { useState } from 'react';
import './GridCalculator.css'; // Import the CSS file for styling

const GridCalculator = () => {
  const [canvasWidth, setCanvasWidth] = useState(1440);
  const [numGrids, setNumGrids] = useState(12);
  const [gridSize, setGridSize] = useState(canvasWidth / numGrids);

  const handleWidthChange = (e) => {
    const width = parseInt(e.target.value, 10);
    setCanvasWidth(width);
    setGridSize(width / numGrids);
  };

  const handleGridsChange = (e) => {
    const grids = parseInt(e.target.value, 10);
    setNumGrids(grids);
    setGridSize(canvasWidth / grids);
  };

  return (
    <div className="grid-calculator">
      <div className="input-group">
        <label>
          Canvas Width (px):
          <input
            type="number"
            value={canvasWidth}
            onChange={handleWidthChange}
            className="input-field"
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Number of Grids:
          <input
            type="number"
            value={numGrids}
            onChange={handleGridsChange}
            className="input-field"
          />
        </label>
      </div>
      <p className="result">Grid Size: {gridSize.toFixed(2)}px</p>
    </div>
  );
};

export default GridCalculator;
