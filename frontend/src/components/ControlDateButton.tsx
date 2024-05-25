"use client";
import { useContext, useEffect, useState } from "react";
import { LeftSideArrowIcon, RightSideArrowIcon } from "./icons";
import { TransactionContext } from "./context/allTransactions";
import { format } from "date-fns";
import { TransactionType } from "./Interface";

const getDateFormatted = (daysAgo = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return format(date, "MMM dd, yyyy");
};

const formattedDay = (day: number) => {
  if (day === 0) {
    return `Today`;
  } else if (day > 0) {
    return `${day} day${day > 1 ? "s" : ""} next`;
  } else {
    return `${Math.abs(day)} day${Math.abs(day) > 1 ? "s" : ""} ago`;
  }
};

export const ControlDateButton = () => {
  const [lastDays, setLastDays] = useState(0);
  const transContext = useContext(TransactionContext);

  if (!transContext) {
    throw new Error(
      "Control Date button must be used within a TransactionContextProvider"
    );
  }

  const { setFilteredData, allTransactions } = transContext;

  const IncreaseDay = () => {
    setLastDays(lastDays + 1);
  };

  const DecReaseDay = () => {
    setLastDays(lastDays - 1);
  };

  const filterDataBasedOnDate = (day: number) => {
    const targetDate = getDateFormatted(day);

    const filteredTransactions = allTransactions?.filter(
      (item: TransactionType) => item.date === targetDate
    );
    setFilteredData(filteredTransactions);
  };

  return (
    <div className="w-[188px] h-[32px] flex flex-row justify-between">
      <button className="hover:rounded-full hover:bg-slate-400 transition-transform transform active:scale-95 hover:scale-110 duration-300 ease-in-out "
        onClick={() => {
          DecReaseDay();
          filterDataBasedOnDate(lastDays);
        }}
      >
        <LeftSideArrowIcon />
      </button>
      <span className=" leading-6 font-base text-black font-normal">
        {formattedDay(lastDays)}
      </span>
      <button className="hover:rounded-full hover:bg-slate-400 transition-transform transform active:scale-95 hover:scale-110 duration-300 ease-in-out "
        onClick={() => {
          IncreaseDay();
          filterDataBasedOnDate(lastDays);
        }}
      >
        <RightSideArrowIcon />
      </button>
    </div>
  );
};
