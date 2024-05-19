import { useState } from "react";
import { FirstRow } from "./Row1";
import { Colors } from "./Colors";

export const OptionForCategory = () => {
  const [selectedIconIndex, setSelectedIconIndex] = useState<
    number | undefined
  >(0);
  const [selectedColor, setSelectedColor] = useState("#343330");

  const handleColor = (color: string) => {
    setSelectedColor(color);
    storeColor(color);
  };

  const storeColor = (color: string) => {
    localStorage.setItem("selectedColor", color);
  };

  return (
    <details className="dropdown">
      <summary
        style={{ borderColor: "#D1D5D8" }}
        className="m-1 btn bg-[#F9FAFB] hover:bg-white flex justify-between w-[84px] border h-[48px]"
      >
        {selectedIconIndex !== undefined && (
          <>{FirstRow[selectedIconIndex].icon}</>
        )}
      </summary>
      <ul className="rounded-lg p-0 flex-row w-[300px] h-fit flex shadow menu dropdown-content z-[1] bg-white">
        {FirstRow.map((el, index) => (
          <li
            className={`w-[50px] h-[50px] ${
              selectedIconIndex === index ? "selected" : ""
            }`}
            key={index}
            onClick={() => setSelectedIconIndex(index)}
          >
            <a>{el.icon}</a>
          </li>
        ))}
        <ul className="w-full gap-[16px] p-0 h-fit flex justify-center items-center mb-2">
          {Colors.map((color, index) => (
            <li
              key={index}
              className={`w-[24px] h-[24px] rounded-full ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColor(color)}
            >
              <button className="w-full p-[5px] flex justify-center items-center text-white h-full hover:rounded-full">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </ul>
    </details>
  );
};
