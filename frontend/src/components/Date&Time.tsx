import ReactDatePicker from "react-datepicker";
import { ArrowDown } from "./icons";
import "react-datepicker/dist/react-datepicker.css";

type DatesType = {
  startDate: Date;
  selectedTime: Date;
  setStartDate: (date: Date) => void;
  setSelectedTime: (date: Date) => void;
};

export const Date_Time = ({
  startDate,
  setStartDate,
  selectedTime,
  setSelectedTime,
}: DatesType) => {
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
