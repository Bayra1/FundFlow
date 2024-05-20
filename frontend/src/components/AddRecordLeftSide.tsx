import React, { useState } from "react";
import { AmountAddRecord, CategoryAddRecord, Date_Time } from "./index";

export const AddRecordLeftSide = () => {
  const [income, setIncome] = useState("INC");
  const [expense, setExpense] = useState("EXP");

  const handleIncome = () => {
    setIncome("INC");
    setExpense("EXP");
  };

  const handleExpense = () => {
    setIncome("EXP");
    setExpense("INC");
  };

  return (
    <section
      style={{ padding: "20px 24px 24px 24px" }}
      className="w-1/2 h-full flex flex-col gap-5"
    >
      <div className="w-full h-[40px] rounded-3xl bg-[#F3F4F6]">
        <button
          onClick={handleIncome}
          style={{ 
            backgroundColor: income === "INC" ? "#0166FF" : "", 
            color: income === "INC" ? "white" : "" 

          }}
          className="w-1/2 h-full rounded-3xl text-black"
        >
          Income
        </button>
        <button
          onClick={handleExpense}
          style={{
            backgroundColor: income === "EXP" ? "#16A34A" : "",
            color: income === "EXP" ? "white" : "black",
          }}
          className="w-1/2 h-full rounded-3xl text-black"
        >
          Expense
        </button>
      </div>

      <div className="w-full h-[340px] flex flex-col gap-[32px]">
        <div className="w-full h-[268px] flex flex-col gap-8">
          <AmountAddRecord />
          <CategoryAddRecord />
          <Date_Time />
        </div>

        <button
          className="w-full h-[40px] flex justify-center items-center gap-1 text-white"
          style={{ 
            borderRadius: "20px",
            backgroundColor: income === "INC" ? "#0166FF" : "#16A34A",             
           }}
        >
          <span>Add Records</span>
        </button>
      </div>
    </section>
  );
};
