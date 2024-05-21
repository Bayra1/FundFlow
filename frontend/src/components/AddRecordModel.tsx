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
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = () => {
    const categoryId = localStorage.getItem('categoryId')
    const date = format(startDate, "MMM dd, YYYY")
    const time = format(selectedTime, "h:mm aa")
    try {
      Transaction_Function(
        inputRef.current?.value!,
        categoryId!,
        date as any,
        time as any,
        payBy,
        descriptionRef.current?.value!,
        income
      );
      // Clear form fields after successful submission
      inputRef.current && (inputRef.current.value = "");
      descriptionRef.current && (descriptionRef.current.value = "");
    } catch (error) {
      console.error("Error submitting transaction:", error);
      // Handle error (e.g., show error message to the user)
    }
    
  }

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
              handleSubmit
            }}
          />
          <AddRecordRightSide {...{payBy, setPayBy, descriptionRef}}/>
        </main>
      </section>
    </main>
  );
};
