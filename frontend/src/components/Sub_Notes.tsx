import { PlainEye, RightArrow } from "./icons";

export const Sub_Notes = ({ name }: { name: string }) => {
  return (
    <div className="w-[250px] h-[32px] flex flex-col gap-2">
      <div className="flex justify-between flex-row items-center">
        <div className="flex flex-row items-center gap-2">
          <PlainEye />
          <span className="text-base leading-6 font-normal text-[#1F2937]">{name}</span>
        </div>
        <RightArrow />
      </div>
    </div>
  );
};
