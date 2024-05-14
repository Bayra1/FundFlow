import { LineOne } from "./LineOne";
import { SubTitle } from "./SubTitle";
import WarningModal from "./WarningModel";
import { CurrencyIcon } from "./icons";
import "./styles/submitButton.css";

type propsType = {
  nextPage: () => void;
};

const currentToken: string | null = localStorage.getItem("token");

export const FirstStep = ({ nextPage }: propsType) => {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col gap-[20px] mt-[20px] mb-[40px]">
        <SubTitle />
        <LineOne />
      </section>
      <section className="flex flex-col justify-center items-center gap-8 mt-[20px]">
        <div className="flex flex-col gap-[20px] justify-center items-center mb-[40px] text-8xl">
          <CurrencyIcon />
          <b className="text-black font-bold text-xl">Select Base Crrency</b>
        </div>
        <select className="select select-bordered w-[384px] bg-[#F3F4F6] text-black">
          <option disabled selected>
            Choose Currency
          </option>
          <option>Tugrik ₮</option>
          <option>Dollar $</option>
        </select>
        <p className="w-[384px] text-center text-[#475569]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
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
      {currentToken ? "" : <WarningModal />}
    </main>
  );
};
