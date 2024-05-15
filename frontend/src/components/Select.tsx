import React, { ChangeEvent, FocusEvent } from "react";
import { HelperText } from "./HelperText";

type PropsType = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
  value: string;
  error: string;
};

export const Select = ({ name, onChange, onBlur, value, error }: PropsType) => {
  return (
    <div className="flex flex-col gap-1">
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="select select-bordered w-[384px] bg-[#F3F4F6] text-black"
      >
        <option>Choose Currency</option>
        <option value="Tugrik ₮">Tugrik ₮</option>
        <option value="Dollar $">Dollar $</option>
      </select>
      {error && value === "" ? (
        <div className="w-full flex justify-center items-center">
          <HelperText error={error || "plese choose one of the currencies"} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
