import React, { useRef, useState } from "react";
import { AddRecordLeftSide, AddRecordRightSide, CloseModel } from "./index";
import { Transaction_Function } from "./function";
import { format } from "date-fns/format";

type propsType = {
  ToggleModel: () => void;
};

export const AddRecordModel = ({ ToggleModel }: propsType) => {
  const [income, setIncome] = useState("INC");
  const [expense, setExpense] = useState("EXP");

  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const inputRef = useRef<HTMLInputElement>(null);

  const [payBy, setPayBy] = useState("By Cash");
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async () => {
    const categoryId = localStorage.getItem("categoryId");
    const date = format(startDate, "MMM dd, yyyy");
    const time = format(selectedTime, "h:mm aa");
    try {
      const categoryId = localStorage.getItem("categoryId");
      const date = format(startDate, "MMM dd, yyyy");
      const time = format(selectedTime, "h:mm aa");

      await Transaction_Function(
        inputRef.current?.value!,
        categoryId!,
        date,
        time,
        payBy,
        descriptionRef.current?.value!,
        income
      );
    } catch (error) {
      console.error("Error submitting transaction:", error);
      throw new Error("error occured during creation of transaction");
    }
  };

  return (
    <main
      className="w-screen absolute top-0 h-screen flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
    >
      <section
        className="w-[792px] h-[512px] flex flex-col bg-white rounded-xl shadow-lg"
        style={{ border: "1px solid #ccc" }}
      >
        <CloseModel name="Add Records" ToggleModel={ToggleModel} />
        <main className="w-full h-full flex flex-row">
          <AddRecordLeftSide
            {...{
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
            }}
          />
          <AddRecordRightSide {...{ payBy, setPayBy, descriptionRef }} />
        </main>
      </section>
    </main>
  );
};
