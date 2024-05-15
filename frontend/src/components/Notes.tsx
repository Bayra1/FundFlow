import { IncomeSymbol } from "./IncomeSymbol";

export const Notes = () => {
  return (
    <div
      className="w-full h-[80px] flex justify-between items-center"
      style={{
        padding: "20px 0px 20px 0px",
        borderStyle: "solid",
        borderBottomWidth: "2px",
        borderColor: "#E2E8F0",
      }}
    >
      <div className="flex flex-row gap-4">
        <IncomeSymbol />
        <div className="flex flex-col gap-1">
          <span className="text-base font-normal leading-6 text-black">
            Lending % Rending
          </span>
          <span className="text-xs font-normal leading-4 text-[#6B7280]">
            3 hours ago
          </span>
        </div>
      </div>
      <span className="text-base font-semibold leading-6 text-[#84CC16]">
        - 1000
      </span>
    </div>
  );
};
