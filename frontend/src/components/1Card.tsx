import {
  CircleIcon,  
  NoiseBackIcon,
  WavesIcon,
  WhiteCubeIcon,
} from "./icons";

export const FirstCard = () => {
  return (
    <section
      className="w-[384px] h-[219px] bg-[#0166FF] pt-[32px] pl-[32px] relative"
      style={{ borderRadius: "18px" }}
    >
      <div
        className="w-[80px] h-[29px] flex gap-[8px]"
        style={{ padding: "4.7px 0px 0px 0px" }}
      >
        <WhiteCubeIcon />
        <span className="text-white font-bold">Geld</span>
      </div>

      <div className="w-[108px] h-[56px] absolute top-[128px] flex flex-col gap-1">
        <span className="font-normal text-base">Currency</span>
        <span className="font-semibold text-2xl text-white leading-8">
          Dollar $
        </span>
      </div>

      <div
        className="w-[40px] h-[40px] absolute top-[144px] left-[312px]"
        style={{ padding: "9.8px 14px 10px 14px" }}
      >
        <WavesIcon />
      </div>
      <div
        className="w-[384px] h-[219px] top-0 left-0 absolute opacity-40"
        style={{ borderRadius: "18px", opacity: "0.3" }}
      >
        <NoiseBackIcon />
      </div>

      <CircleIcon />
    </section>
  );
};
