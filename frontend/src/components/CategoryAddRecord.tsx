import { ArrowDown } from "./icons";

export const CategoryAddRecord = () => {
  return (
    <div className="flex flex-col w-full h-[76px] gap-1">
      <span className="text-base font-normal text-[#171717]">Category</span>
      <details className="dropdown">
        <summary
          style={{ borderColor: "#D1D5D8" }}
          className="m-1 btn bg-[#F9FAFB] hover:bg-white flex justify-between w-full h-[48px]"
        >
          <span className="leading-6 font-semibold text-base text-[#94A3B8]">
            Choose
          </span>
          <ArrowDown />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 bg-white">
          <li>
            <a className="leading-6 font-semibold text-base text-[#1F2937]">
              Newest First
            </a>
          </li>
          <li>
            <a className="leading-6 font-semibold text-base text-[#1F2937]">
              Newest First
            </a>
          </li>
        </ul>
      </details>
    </div>
  );
};
