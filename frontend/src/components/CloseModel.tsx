import { XiCon } from "./icons";

type propsType = {
  ToggleModel: () => void;
};

export const CloseModel = ({ ToggleModel }: propsType) => {
  return (
    <div
      className="w-full h-[56px] justify-between flex flex-row gap-[8px] items-center"
      style={{
        padding: "20px 24px",
        borderBottomWidth: "2px",
        borderStyle: "solid",
        borderColor: "#E2E8F0",
      }}
    >
      <span className="text-black font-semibold text-base leading-6">
        Add Record
      </span>
      <button onClick={ToggleModel}>
        <XiCon />
      </button>
    </div>
  );
};
