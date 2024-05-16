import { IncomeSymbol } from "./IncomeSymbol";

export const RecordNotes = () => {
  return (
    <div
      className="w-full h-[48px] flex justify-between bg-white items-center mt-[20px]"
      style={{
        padding: "30px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#E2E8F0",
        borderRadius: "12px",
      }}
    >
      <div className="flex flex-row gap-4 items-center">
        <input
          type="checkbox"
          className="checkbox border-2"
          style={{ borderColor: "#D2D4D7" }}
        />
        <IncomeSymbol />
        <div className="flex flex-col gap-1">
          <span className="text-base font-normal leading-6 text-black">
            Food & Renting
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "16px",
              color: "#6B7280",
            }}
          >
            14:00
          </span>
        </div>
      </div>
      <span className="text-base font-semibold leading-6 text-[#94A3B8]">
        - 1000
      </span>
    </div>
  );
};
