import { useState } from "react";
import { CloseModel } from "./CloseModel";
import { ArrowDown, BlackHouse } from "./icons";
import { Colors, FirstRow, OptionForCategory } from "./utils/Categories";

type propsType = {
  handleCategoryModel: () => void;
};

export const AddCategoryModel = ({ handleCategoryModel }: propsType) => {
  const [selectedIconIndex, setSelectedIconIndex] = useState<number | undefined>(0);
  const [selectedColor, setSelectedColor] = useState("#343330");

  const handleColor = (color: string) => {
    setSelectedColor(color);
  };
  console.log(selectedColor, "s");

  return (
    <div
      className="w-full absolute top-0 h-full flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
    >
      <section
        className="w-[494px] h-[236px] flex flex-col bg-white rounded-xl shadow-lg"
        style={{ border: "1px solid #ccc" }}
      >
        <CloseModel name="Add Category" ToggleModel={handleCategoryModel} />
        <div className="flex flex-col gap-5 w-full justify-between p-[24px] items-center">
          <div className="flex flex-row items-center w-full">
            <OptionForCategory/>
            <input
              type="text"
              placeholder="name"
              style={{
                backgroundColor: "#F3F4F6",
                height: "48px",
                padding: "10px",
                borderRadius: "4px",
                color: "black",
                border: "1px solid #D1D5DB",
                width: "350px",
              }}
              name=""
              id=""
            />
          </div>
          <button
            className="w-full h-[40px] bg-[#16A34A] flex justify-center items-center gap-1 text-white"
            style={{ borderRadius: "20px" }}
          >
            <span>Add Records</span>
          </button>
        </div>
      </section>
    </div>
  );
};
