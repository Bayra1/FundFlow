import { Title } from "./Title";

export const Types = () => {
  return (
    <div className="flex flex-col gap-4 w-[109px] h-[144px]">
      <Title name="Types" />
      <label className="flex flex-row gap-2" htmlFor="All">
        <input type="radio" id="All" name="type" value="All" />
        <span className=" leading-6 font-normal text-[#1F2937]">All</span>
      </label>
      <label className="flex flex-row gap-2" htmlFor="Income">
        <input type="radio" id="Income" name="type" value="Income" />
        <span className=" leading-6 font-normal text-[#1F2937]">Income</span>
      </label>
      <label className="flex flex-row gap-2" htmlFor="Expense">
        <input type="radio" id="Expense" name="type" value="Expense" />
        <span className=" leading-6 font-normal text-[#1F2937]">Expense</span>
      </label>
    </div>
  );
};
