import { useContext } from "react";
import { RecordNotesType } from "./Interface";
import { SelectedIconComp } from "./SelectedIcon";
import { FirstRow } from "./utils/Categories";
import { UserWithInfoContext } from "./context/user";

export const RecordNotesNoCheckBox = ({
  IconIndex,
  transaction_type,
  description,
  amount,
  time,
}: RecordNotesType) => {
  const isValidIndex = IconIndex >= 0 && IconIndex < FirstRow.length;
  const userContext = useContext(UserWithInfoContext);

  if (!userContext) {
    throw new Error("userContext must be used withing userContextProvider");
  }

  const { user } = userContext;

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
      <div
        style={{ color: transaction_type === "INC" ? "#23E01F" : "#F54949" }}
        className="text-base font-semibold leading-6 text-[#94A3B8] flex flex-row gap-1"
      >
        {transaction_type === "INC" ? "+" : "-"}
        <div className="flex flex-row gap-1">
          <div>
          {amount}
          </div>
          {/* {user?.info.currency === "Dollar $" ? "$" : "₮"} */}
        </div>
      </div>
    </div>
  );
};
