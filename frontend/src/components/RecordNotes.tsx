import { RecordNotes_No_CheckBox_Type } from "./Interface";
import { SelectedIconComp } from "./SelectedIcon";
import { FirstRow } from "./utils/Categories";

export const RecordNotes = ({
  IconIndex,
  transaction_type,
  description,
  amount,
  time,
  handleCheckBox,
}: RecordNotes_No_CheckBox_Type) => {
  const isValidIndex = IconIndex >= 0 && IconIndex < FirstRow.length;

  if (!isValidIndex) {
    return (
      <div
        className="w-full h-[48px] flex justify-between bg-white items-center mt-[25px]"
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
        <button
          onClick={handleCheckBox}
          className="transition-transform transform active:scale-95 hover:scale-110 duration-300 ease-in-out"
        >
          <div className="group flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
            <div className="space-y-2">
              <span className="block h-1 w-[30px] origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
              <span className="block h-1 w-[20px] origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-[30px] group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
            </div>
          </div>
        </button>
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
