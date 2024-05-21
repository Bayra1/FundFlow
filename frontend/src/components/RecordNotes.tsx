import { RecordNotesType } from "./Interface";
import { SelectedIconComp } from "./SelectedIcon";
import { FirstRow } from "./utils/Categories";

export const RecordNotes = ({
  IconIndex,
  transaction_type,
  description,
  amount,
  time,
}: RecordNotesType) => {
  const isValidIndex = IconIndex >= 0 && IconIndex < FirstRow.length;

  if (!isValidIndex) {
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
          <span>Error: Invalid IconIndex</span>
        </div>
      </div>
    );
  }

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
        <div
          style={{
            backgroundColor: transaction_type === "INC" ? "#0166FF" : "#FF4545",
          }}
          className="flex justify-center items-center rounded-full w-10 h-10"
        >
          <SelectedIconComp propIndex={IconIndex} propColor={"white"} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-normal leading-6 text-black">
            {description}
          </span>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "16px",
              color: "#6B7280",
            }}
          >
            {time}
          </span>
        </div>
      </div>
      <span
        style={{ color: transaction_type === "INC" ? "#23E01F" : "#F54949" }}
        className="text-base font-semibold leading-6 text-[#94A3B8] flex flex-row gap-1"
      >
        {transaction_type === "INC" ? "+" : "-"}
        {amount}
      </span>
    </div>
  );
};
