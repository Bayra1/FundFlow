"use client";
import { useContext, useState } from "react";
import { ArrowDown } from "./icons";
import { TransactionContext } from "./context/allTransactions";

export const DropDownRecord = () => {
  const [state, setState] = useState("");

  const transContext = useContext(TransactionContext);

  if (!transContext) {
    throw new Error(
      "SelectAllRecords must be used within a TransactionContextProvider"
    );
  }

  const { setFilteredData, allTransactions } = transContext;

  const handleDayState = (express: string) => {
    setState(express);
  };

  return (
    <details className="dropdown">
      <summary
        style={{ borderColor: "#D1D5D8" }}
        className="m-1 btn bg-white hover:bg-white flex justify-between w-[180px] h-[48px]"
      >
        <span className="leading-6 font-semibold text-base text-[#1F2937]">
          {state ? state : "Choose Day"}
        </span>
        <ArrowDown />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-white">
        <li onClick={() => handleDayState("Today")}>
          <a className="leading-6 font-semibold text-base text-[#1F2937]">
            Today
          </a>
        </li>
        <li onClick={() => handleDayState("YesterDay")}>
          <a className="leading-6 font-semibold text-base text-[#1F2937]">
            YesterDay
          </a>
        </li>
      </ul>
    </details>
  );
};
