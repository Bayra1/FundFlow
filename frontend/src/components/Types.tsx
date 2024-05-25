"use client";
import { SetStateAction, useContext, useState } from "react";
import { Title } from "./Title";
import { SortTypesForTrans } from "./utils";
import { TransactionContext } from "./context/allTransactions";

export const Types = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const { filterTransactions }: any = useContext(TransactionContext);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    filterTransactions(selectedValue);
  };

  return (
    <div className="flex flex-col gap-4 w-[109px] h-[144px]">
      <Title name="Types" />

      {SortTypesForTrans.map((name, index) => {
        return (
          <label key={index} className="flex flex-row gap-2" htmlFor={name}>
            <input
              checked={selectedOption === name}
              onChange={handleChange}
              type="radio"
              id={name}
              name="type"
              value={name}
            />
            <span className=" leading-6 font-normal text-[#1F2937]">
              {name}
            </span>
          </label>
        );
      })}
    </div>
  );
};
