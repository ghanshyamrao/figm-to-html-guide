// codefiles/ColorPicker.tsx
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import styles from "./ColorPicker.module.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#fff");
  const [copyMessage, setCopyMessage] = useState("");

  const handleChangeComplete = (color: any) => {
    setColor(color.hex);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(color).then(() => {
      setCopyMessage("Color copied");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  return (
    <div className={styles.colorPickerWrapper}>
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      <div
        className={styles.colorDisplay}
        style={{ backgroundColor: color }}
        onClick={handleCopyToClipboard}
      >
        Selected Color: {color}
      </div>
      {copyMessage && <div className={styles.copyMessage}>{copyMessage}</div>}
    </div>
  );
};

export default ColorPicker;
