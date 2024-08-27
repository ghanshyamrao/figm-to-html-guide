import React from 'react';
import './FontUnitsExample.css';

const FontUnitsExample: React.FC = () => {
  return (
    <div className="font-units-example">
      <h2>Font Units Examples</h2>
      <p className="font-point">Font size in points (pt): 16pt</p>
      <p className="font-pixel">Font size in pixels (px): 16px</p>
      <p className="font-em">Font size in em: 2em</p>
      <p className="font-rem">Font size in rem: 2rem</p>
      <p className="font-vw">Font size in viewport width (vw): 4vw</p>
      <p className="font-vh">Font size in viewport height (vh): 4vh</p>
    </div>
  );
};

export default FontUnitsExample;
