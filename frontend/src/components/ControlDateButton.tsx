import { LeftSideArrowIcon, RightSideArrowIcon } from "./icons";

export const ControlDateButton = () => {
  return (
    <div className="w-[188px] h-[32px] flex flex-row justify-between">
      <LeftSideArrowIcon />
      <button className=" leading-6 font-base text-black font-normal">
        Last 30 Days
      </button>
      <RightSideArrowIcon />
    </div>
  );
};
