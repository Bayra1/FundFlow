import { ArrowDown } from "./icons";

export const DropDownRecord = () => {
  return (
    <details className="dropdown">
      <summary
        style={{ borderColor: "#D1D5D8" }}
        className="m-1 btn bg-white hover:bg-white flex justify-between w-[180px] h-[48px]"
      >
        <span className="leading-6 font-semibold text-base text-[#1F2937]">
          Newest First
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
            Oldest First
          </a>
        </li>
      </ul>
    </details>
  );
};
