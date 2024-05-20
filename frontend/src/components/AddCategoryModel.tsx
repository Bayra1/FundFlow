"use client";
import { useRef, useState } from "react";
import { CloseModel } from "./CloseModel";
import { OptionForCategory } from "./utils/Categories";
import { Create_Category_Func, Create_Info_Func } from "./function";
import { Toaster } from "react-hot-toast";

type propsType = {
  handleCategoryModel: () => void;
};

export const AddCategoryModel = ({ handleCategoryModel }: propsType) => {
  const [selectedIconIndex, setSelectedIconIndex] = useState<
    number | undefined
  >(0);
  const [selectedColor, setSelectedColor] = useState("#343330");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    Create_Category_Func(
      selectedColor,
      selectedIconIndex,
      inputRef.current?.value
    );
  };

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
            <OptionForCategory
              selectedIconIndex={selectedIconIndex}
              setSelectedIconIndex={setSelectedIconIndex}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <input
              ref={inputRef}
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
              name="name"
              id="name"
            />
          </div>
          <button
            onClick={() => {
              handleCategoryModel();
              handleSubmit();
            }}
            className="w-full h-[40px] bg-[#16A34A] flex justify-center items-center gap-1 text-white"
            style={{ borderRadius: "20px" }}
          >
            <span>Add Records</span>
          </button>
        </div>
      </section>
      <Toaster position="top-center"/>
    </div>
  );
};
