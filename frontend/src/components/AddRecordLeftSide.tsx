import { useState } from "react";
import { AmountAddRecord, CategoryAddRecord } from "./index";
import ReactDatePicker from "react-datepicker";
import { ArrowDown } from "./icons";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export const AddRecordLeftSide = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date())
  return (
    <section
      style={{ padding: "20px 24px 24px 24px" }}
      className="w-1/2 h-full flex flex-col gap-5"
    >
      <div className="w-full h-[40px] rounded-xl bg-[#F3F4F6]">
        <button className="w-1/2 h-full bg-[#0166FF] rounded-3xl text-white">
          Income
        </button>
        <button className="w-1/2 h-full rounded-3xl text-black">Expense</button>
      </div>

      <div className="w-full h-[340px] flex flex-col gap-[32px]">
        <div className="w-full h-[268px] flex flex-col gap-8">
          <AmountAddRecord />
          <CategoryAddRecord />
          <div className="flex flex-row w-full h-[76px] gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-base font-normal text-[#171717]">Date</span>
              <div className="flex flex-row relative">
                <ReactDatePicker
                  className="bg-[#F9FAFB] w-[168px] h-[48px] p-2 text-black border border-[#D1D5DB] rounded"
                  selected={startDate}
                  onChange={(date) => setStartDate(date!)}
                  dateFormat="MMM dd, YYYY"
                />
                <div className="absolute left-[150px] top-5">
                  <ArrowDown />
                </div>
              </div>             
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-normal text-[#171717]">Time</span>
              <div className="flex flex-row relative">
                <ReactDatePicker
                  className="bg-[#F9FAFB] w-[168px] h-[48px] p-2 text-black border border-[#D1D5DB] rounded"
                  selected={selectedTime}
                  onChange={(date) => setSelectedTime(date!)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                />
                <div className="absolute left-[150px] top-5">
                  <ArrowDown />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="w-full h-[40px] bg-[#0166FF] flex justify-center items-center gap-1 text-white"
          style={{ borderRadius: "20px" }}
        >
          <span>Add Records</span>
        </button>
      </div>
    </section>
  );
};
