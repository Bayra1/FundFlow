import { AmountAddRecord, CategoryAddRecord, Date_Time } from "./index";

export const AddRecordLeftSide = () => {
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
          <Date_Time />
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
