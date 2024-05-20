import { FirstRow } from "./Row1";
import { Colors } from "./Colors";
import { ArrowDown } from "@/components/icons";
import { SelectedIconComp } from "@/components/SelectedIcon";

type PropsType = {
  selectedIconIndex: number | undefined;
  setSelectedIconIndex: (index: number) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

export const OptionForCategory = ({
  selectedIconIndex,
  setSelectedIconIndex,
  selectedColor,
  setSelectedColor,
}: PropsType) => {
  const handleColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <details className="dropdown">
      <summary
        style={{ borderColor: "#D1D5D8" }}
        className="m-1 btn bg-[#F9FAFB] hover:bg-white flex justify-between w-[84px] border h-[48px]"
      >
        <SelectedIconComp
          propColor={selectedColor}
          propIndex={selectedIconIndex ?? 0}
        />
        <ArrowDown />
      </summary>
      <ul className="rounded-lg p-0 flex-row w-[300px] h-fit flex shadow menu dropdown-content z-[1] bg-white">
        {FirstRow.map((iconItem, index) => (
          <li
            className={`w-[50px] h-[50px] flex justify-center items-center ${
              selectedIconIndex === index ? "selected" : ""
            }`}
            key={index}
            onClick={() => setSelectedIconIndex(index)}
          >
            <a>{iconItem.icon}</a>
          </li>
        ))}
        <ul
          style={{ borderTop: "1px solid #E5E5E5", padding: "20px" }}
          className="w-full gap-[16px] p-0 h-fit flex justify-center items-center mb-2"
        >
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
