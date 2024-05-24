export const SelectAllCheckBox = () => {
  return (
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
  );
};
