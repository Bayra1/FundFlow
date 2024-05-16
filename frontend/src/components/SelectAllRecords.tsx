export const SelectAllRecords = () => {
  return (
    <div
      className="w-full h-[48px] flex justify-between bg-white items-center mt-[20px]"
      style={{
        padding: "12px 24px 12px 24px",
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
        <div className="flex flex-col gap-1">
          <span className="text-base font-normal leading-6 text-black">
            Select All
          </span>
        </div>
      </div>
      <span className="text-base font-semibold leading-6 text-[#94A3B8]">
        - 1000
      </span>
    </div>
  );
};
