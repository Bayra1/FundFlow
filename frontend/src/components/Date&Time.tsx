import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ArrowDown } from "./icons";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export const Date_Time = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  return (
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
  );
};
