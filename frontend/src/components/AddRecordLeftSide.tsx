"use client";
import {
  AmountAddRecord,
  CategoryAddRecord,
  Date_Time,
  StatesOfTransaction,
} from "./index";

type PropsType = {
  startDate: Date;
  selectedTime: Date;
  setStartDate: (date: Date) => void;
  setSelectedTime: (date: Date) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  income: string;
  expense: string;
  setIncome: (value: string) => void;
  setExpense: (value: string) => void;
  handleSubmit: () => void;
};

export const AddRecordLeftSide = ({
  income,
  setIncome,
  expense,
  setExpense,
  startDate,
  setStartDate,
  selectedTime,
  setSelectedTime,
  inputRef,
  handleSubmit,
}: PropsType) => {
  return (
    <section
      style={{ padding: "20px 24px 24px 24px" }}
      className="w-1/2 h-full flex flex-col gap-5"
    >
      <StatesOfTransaction
        income={income}
        setIncome={setIncome}
        expense={expense}
        setExpense={setExpense}
      />

      <div className="w-full h-[340px] flex flex-col gap-[32px]">
        <div className="w-full h-[268px] flex flex-col gap-8">
          <AmountAddRecord inputRef={inputRef} />
          <CategoryAddRecord />
          <Date_Time
            startDate={startDate}
            setStartDate={setStartDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </div>

        <button
          onClick={handleSubmit}
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
