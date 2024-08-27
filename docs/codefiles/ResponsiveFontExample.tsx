import React from "react";
import "./responsiveFontExamples.css";

const ResponsiveFontExample: React.FC = () => {
  return (
    <div className="responsive-example">
      <h1>Responsive Font Sizes</h1>
      <p className="font-size-1">
        This is a paragraph with a font size of 1em.
      </p>
      <p className="font-size-2">
        This is a paragraph with a font size of 2em.
      </p>
      <p className="font-size-3">
        This is a paragraph with a font size of 3em.
      </p>
    </div>
  );
};

export default ResponsiveFontExample;
