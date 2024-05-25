"use client";
import { useContext, useState } from "react";
import { ArrowDown } from "./icons";
import { TransactionContext } from "./context/allTransactions";
import { format } from "date-fns";
import { TransactionType } from "./Interface";

const getDateFormatted = (daysAgo = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return format(date, "MMM dd, yyyy");
};

export const DropDownRecord = () => {
  const [selectedDay, setSelectedDay] = useState("");

  const transContext = useContext(TransactionContext);

  if (!transContext) {
    throw new Error(
      "DropDownRecord must be used within a TransactionContextProvider"
    );
  }

  const { setFilteredData, allTransactions } = transContext;

  const handleDaySelection = (day: string) => {
    setSelectedDay(day);
    filterTransactionsByDay(day);
  };

  const filterTransactionsByDay = (day: string) => {
    if (day === "All") {
      setFilteredData(allTransactions);
      return;
    }

    const targetDate = day === "Today" ? getDateFormatted() : getDateFormatted(1);
    
    const filteredTransactions = allTransactions?.filter(
      (item: TransactionType) => item.date === targetDate
    );
    setFilteredData(filteredTransactions);
  };

  return (
    <details className="dropdown">
      <summary className="m-1 btn bg-white hover:bg-white flex justify-between w-[180px] h-[48px] border border-gray-300">
        <span className="leading-6 font-semibold text-base text-gray-800">
          {selectedDay || "Choose Day"}
        </span>
        <ArrowDown />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-white">
        <li onClick={() => handleDaySelection("Today")}>
          <a className="leading-6 font-semibold text-base text-gray-800">
            Today
          </a>
        </li>
        <li onClick={() => handleDaySelection("Yesterday")}>
          <a className="leading-6 font-semibold text-base text-gray-800">
            Yesterday
          </a>
        </li>
        <li onClick={() => handleDaySelection("All")}>
          <a className="leading-6 font-semibold text-base text-gray-800">All</a>
        </li>
      </ul>
    </details>
  );
};
