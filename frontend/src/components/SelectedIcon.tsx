import { useState } from "react";
import { FirstRow } from "./utils/Categories";

const TestIconTest = ({ defaultIndex }: { defaultIndex: number }) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const [selectedColor, setSelectedColor] = useState("#343330");

  const handleIconClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="selected-icon-container">
      <ul className="icon-list">
        {FirstRow.map((el, index) => (
          <li
            key={index}
            className={`icon-item ${selectedIndex === index ? "selected" : ""}`}
            onClick={() => handleIconClick(index)}
          >
            {el.icon}
          </li>
        ))}
      </ul>
      <div className="color-picker">
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
        />
      </div>
      <div className="selected-icon-preview" style={{ color: selectedColor }}>
        {FirstRow[selectedIndex].icon}
      </div>
    </div>
  );
};

export default TestIconTest;
