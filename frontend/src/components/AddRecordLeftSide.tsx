import { ArrowDown } from "./icons";

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
          <div className="flex flex-col w-full h-[76px] gap-1">
            <span className="text-base font-normal text-[#171717]">Amount</span>
            <input
              type="text"
              placeholder="$ 000.0"
              style={{
                backgroundColor: "#F3F4F6",
                height: "100%",
                padding: "10px",
                borderRadius: "16px",
                color: "black",
                border: "1px solid #D1D5DB",
              }}
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col w-full h-[76px] gap-1">
            <span className="text-base font-normal text-[#171717]">
              Category
            </span>
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

          <div className="flex flex-row w-full h-[76px] gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-base font-normal text-[#171717]">Date</span>
              <input
                type="text"
                style={{
                  width: "168px",
                  height: "48px",
                  backgroundColor: "F9FAFB",
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-normal text-[#171717]">Date</span>
              <input
                type="text"
                style={{
                  width: "168px",
                  height: "48px",
                  backgroundColor: "F9FAFB",
                }}
              />
            </div>
          </div>
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
