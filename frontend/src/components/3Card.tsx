import { DownArrow, RedDot } from "./icons";

type PropsType = {
  expense: number;
  currency: string;
};

export const ThirdCard = ({ expense, currency }: PropsType) => {
  return (
    <section
      className="w-[384px] h-[219px] bg-white relative"
      style={{ borderRadius: "18px" }}
    >
      <div
        className="w-full h-[56px] flex flex-row gap-[8px] items-center"
        style={{
          padding: "16px 24px 16px 24px",
          borderBottomWidth: "2px",
          borderStyle: "solid",
          borderColor: "#E2E8F0",
        }}
      >
        <RedDot />
        <span className="text-black font-semibold text-base leading-6">
          Total Expenses
        </span>
      </div>
      <div
        className="w-full h-[160px] flex flex-col gap-[16px]"
        style={{ padding: "20px 24px 24px 24px" }}
      >
        <div className="w-full h-[72px] flex flex-col gap-1">
          <span className="text-3xl text-black font-semibold leading-10">
            - {expense} {currency === "Dollar $" ? "$" : "₮"}
          </span>
          <span className="text-lg font-normal leading-7 text-[#64748B]">
            Your Expenses Amount
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <DownArrow />
          <span className="text-lg font-normal leading-7 text-black">
            32% from last month
          </span>
        </div>
      </div>
    </section>
  );
};
