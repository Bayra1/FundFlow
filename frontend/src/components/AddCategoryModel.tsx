import { useState } from "react";
import { CloseModel } from "./CloseModel";
import { ArrowDown, BlackHouse } from "./icons";
import { Colors, FirstRow } from "./utils/Categories";

type propsType = {
  handleCategoryModel: () => void;
};

export const AddCategoryModel = ({ handleCategoryModel }: propsType) => {
  const [selectedIcon, setSelectedIcon] = useState(<BlackHouse />);
  const [selectedColor, setSelectedColor] = useState("#343330");
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
            <details className="dropdown">
              <summary
                style={{ borderColor: "#D1D5D8" }}
                className="m-1 btn bg-[#F9FAFB] hover:bg-white flex justify-between w-[84px] border h-[48px]"
              >
                {selectedIcon}
                <ArrowDown />
              </summary>
              <ul className="rounded-lg p-0 flex-row w-[300px] h-fit flex shadow menu dropdown-content z-[1] bg-white">
                {FirstRow.map((el, index) => (
                  <li
                    className="w-[50px] h-[50px]"
                    key={index}
                    onClick={() => setSelectedIcon(el.icon)}
                  >
                    <a>{el.icon}</a>
                  </li>
                ))}
                <ul className="flex flex-row justify-between ml-4">
                  {Colors.map((el, index) =>{
                    return <li className="w-[50px] h-[50px]" key={index}>{el}</li>
                  })}
                </ul>
              </ul>
            </details>
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
