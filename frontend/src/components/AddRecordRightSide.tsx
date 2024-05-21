"use client";
import { ArrowDown } from "./icons";

type PaymentType = {
  payBy: string;
  setPayBy: (value: string) => void;
  descriptionRef: React.RefObject<HTMLTextAreaElement>;
};

export const AddRecordRightSide = ({
  payBy,
  setPayBy,
  descriptionRef,
}: PaymentType) => {
  const manageByCash = (state: string) => {
    setPayBy(state);
  };

  return (
    <section
      className="w-1/2 h-full flex flex-col"
      style={{ padding: "20px 24px 24px 24px" }}
    >
      <div className="flex flex-col gap-1 h-fit">
        <span className="w-1/2 h-full rounded-3xl text-black">Payment By</span>
        <details className="dropdown">
          <summary
            style={{ borderColor: "#D1D5D8" }}
            className="m-1 btn bg-[#F9FAFB] hover:bg-white flex justify-between w-full h-[48px]"
          >
            <span className="leading-6 font-semibold text-base text-[#94A3B8]">
              {payBy}
            </span>
            <ArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-white">
            <li onClick={() => manageByCash("By Card 💳")}>
              <a className="leading-6 font-semibold text-base text-[#1F2937]">
                By Card 💳
              </a>
            </li>
            <li onClick={() => manageByCash("By Cash 💸")}>
              <a className="leading-6 font-semibold text-base text-[#1F2937]">
                By Cash 💸
              </a>
            </li>
          </ul>
        </details>
      </div>
      <div className="flex flex-col gap-1 w-full h-fit mt-[8px]">
        <span className="rounded-3xl text-black">Note</span>
        <textarea
          ref={descriptionRef}
          className="bg-[#F3F4F6] w-full h-[280px] p-[15px] text-black rounded-lg"
          placeholder="write here"
          style={{ border: "1px solid #D1D5Db" }}
        ></textarea>
      </div>
    </section>
  );
};
