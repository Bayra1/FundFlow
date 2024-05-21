"use client";
import { useState } from "react";
import { LineThree } from "./LineThree";
import { SubTitle } from "./SubTitle";
import { IncomeIcon } from "./icons";
import { Create_Info_Func } from "./function";
import { CheckFinalInfo_Func } from "./function/CheckFinalStep";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import "./styles/submitButton.css";
import jwt from "jsonwebtoken";

type decodedTokenType = {
  id: string;
};

export const ThirdStep = () => {
  const [isState, setIsState] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setIsState((preV) => !preV);
  };

  const HandleSubmit = () => {
    var currency: any = localStorage.getItem("currency");
    var budget: any = localStorage.getItem("budget");
    var currentToken = localStorage.getItem("token");
    const decodedToken = jwt.decode(currentToken!) as decodedTokenType;

    CheckFinalInfo_Func({ currency, budget });
    Create_Info_Func(
      currency!,
      budget!,
      isState ? true : false,
      decodedToken.id
    );

    localStorage.removeItem("currency");
    localStorage.removeItem("budget");

    setTimeout(() => {
      router.push("/Dashboard");
    }, 2000);
  };

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
            Are you ready to unleash your inner peace of finance ?
          </b>
        </div>
        <input
          id="login-button"
          type="checkbox"
          checked={isState}
          onChange={handleToggle}
          className="checkbox checkbox-info"
        />
        <div className="text-blue-400">{isState ? "Yes" : "No"}</div>
        <p className="w-[384px] text-center text-[#475569]">
          To confirm your readiness, please check above the checkbox
        </p>
      </section>
      <div className="w-full flex-col flex justify-center items-center mt-[40px]">
        <button
          onClick={HandleSubmit}
          id="login-button"
          className="w-[384px] h-[48px] bg-[#0166FF] text-white rounded-2xl"
        >
          Go To Dashboard
        </button>
      </div>
      <Toaster position="top-center" />
    </main>
  );
};
