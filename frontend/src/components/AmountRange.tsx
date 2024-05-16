"use client";
import { useState } from "react";
import { Title } from "./Title";

export const AmountRange = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinValue = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    setMinValue(value);
  };

  const handleMaxValue = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    setMaxValue(value);
  };

  return (
    <div className="w-[245px] h-[150px] flex flex-col gap-4">
      <Title name="Amount Range" />
      <div className="w-fit h-[48px] flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <input
            value={minValue}
            onChange={handleMinValue}
            style={{
              width: "114px",
              height: "48px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              backgroundColor: "#F3F4F6",
              padding: "10px",
              color: "black",
              borderRadius: "8px",
            }}
            type="text"
          />
          <input
            value={maxValue}
            onChange={handleMaxValue}
            style={{
              width: "114px",
              height: "48px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#E5E7EB",
              backgroundColor: "#F3F4F6",
              padding: "10px",
              color: "black",
              borderRadius: "8px",
            }}
            type="text"
          />
        </div>
        <input
          value={minValue}
          onChange={handleMinValue}
          type="range"
          min={0}
          max="100"
          className="bg-blue-400"
        />
      </div>
    </div>
  );
};
