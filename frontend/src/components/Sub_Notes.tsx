import React from "react";
import { FirstRow } from "./utils/Categories";
import { RightArrow } from "./icons";
import { SelectedIconComp } from "./SelectedIcon";

type SubNotesProps = {
  name: string;
  selectedIconIndex: number | undefined;
  selectedColor: string;
};

export const Sub_Notes: React.FC<SubNotesProps> = ({
  name,
  selectedIconIndex,
  selectedColor,
}) => {
  
  return (
    <div className="w-[250px] h-[32px] flex flex-col gap-2">
      <div className="flex justify-between flex-row items-center">
        <div className="flex flex-row items-center gap-2">
          <SelectedIconComp
            propColor={selectedColor}
            propIndex={selectedIconIndex!}
          />
          <span className="text-base leading-6 font-normal text-[#1F2937] hover:text-black">
            {name}
          </span>
        </div>
        <RightArrow />
      </div>
    </div>
  );
};
