import { LineOne } from "./LineOne";
import { LineTwo } from "./LineTwo";
import { SubTitle } from "./SubTitle";
import { CurrencyIcon, IncomeIcon } from "./icons";
import "./styles/submitButton.css";

type propsType = {
  nextPage: () => void;
};

export const SecondStep = ({nextPage}:propsType) => {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col gap-[20px] mt-[20px] mb-[40px]">
        <SubTitle />
        <LineTwo />
      </section>
      <section className="flex flex-col justify-center items-center gap-8 mt-[20px]">
        <div className="flex flex-col gap-[20px] justify-center items-center mb-[30px] text-8xl">
          <IncomeIcon />
          <b className="text-black font-bold text-xl">
            Please specify your budget amount
          </b>
        </div>
        <input
          className="w-[384px] h-[48px] bg-[#F3F4F6] p-[10px] rounded text-black border-2 border-solid"
          type="text"
          placeholder="budget amount ?"
        />
        <p className="w-[384px] text-center text-[#475569]">
          How much cash do you have in your budget ?
        </p>
      </section>
      <div className="w-full flex-col flex justify-center items-center mt-[40px]">
        <button
        onClick={nextPage}
          id="login-button"
          className="w-[384px] h-[48px] bg-[#0166FF] text-white rounded-2xl"
        >
          Confirm
        </button>
      </div>
    </main>
  );
};
