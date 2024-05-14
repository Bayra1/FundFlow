import { LineOne } from "./LineOne";
import { LineThree } from "./LineThree";
import { LineTwo } from "./LineTwo";
import { SubTitle } from "./SubTitle";
import { CurrencyIcon, IncomeIcon } from "./icons";
import "./styles/submitButton.css";

export const ThirdStep = () => {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col gap-[20px] mt-[20px] mb-[40px]">
        <SubTitle />
        <LineThree />
      </section>
      <section className="flex flex-col justify-center items-center gap-8 mt-[20px]">
        <div className="flex flex-col gap-[20px] justify-center items-center mb-[30px] text-8xl">
          <IncomeIcon />
          <b className="text-black font-bold text-xl">
            Wishing you success in your future financial endeavors.
          </b>
        </div>        
        <input id="login-button" type="checkbox" className="checkbox checkbox-info" />
        <p className="w-[384px] text-center text-[#475569]">
          To confirm your readiness, please check above the checkbox
        </p>
      </section>
      <div className="w-full flex-col flex justify-center items-center mt-[40px]">
        <button
          id="login-button"
          className="w-[384px] h-[48px] bg-[#0166FF] text-white rounded-2xl"
        >
          Go To Dashboard
        </button>
      </div>
    </main>
  );
};
