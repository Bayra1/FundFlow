import { XiCon } from "./icons";

type propsType = {
  ToggleModel: () => void;
  name: string;
};

export const CloseModel = ({ ToggleModel, name }: propsType) => {
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
        {name}
      </span>
      <button onClick={ToggleModel}>
        <XiCon />
      </button>
    </div>
  );
};
