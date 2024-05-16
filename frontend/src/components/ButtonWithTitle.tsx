import { Plus } from "./icons";

type propsType = {
  ToggleModel: () => void;
};

export const ButtonWithTitle = ({ ToggleModel }: propsType) => {
  return (
    <div className="w-[250px] h-[88px] flex flex-col gap-[24px]">
      <h2 className="font-semibold leading-8 text-2xl text-black">Records</h2>
      <button
        onClick={ToggleModel}
        className="w-full h-[32px] bg-[#0166FF] flex justify-center items-center gap-1 text-white"
        style={{ borderRadius: "20px" }}
      >
        <Plus />
        <span>Add</span>
      </button>
    </div>
  );
};
