"use client";
import { FirstStep, SecondStep, ThirdStep } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ThreeSteps = () => {
  const [currenStep, setCurrenStep] = useState(1);
  const router = useRouter();

  const GoToNextStep = () => {
    setCurrenStep(currenStep + 1);
  };

  const renderStep = () => {
    switch (currenStep) {
      case 1:
        return <FirstStep nextPage={GoToNextStep} />;
        break;
      case 2:
        return <SecondStep nextPage={GoToNextStep} />;
        break;
      case 3:
        return <ThirdStep />;
      default:
        return <FirstStep nextPage={GoToNextStep} />;
        break;
    }
  };

  return <div className="w-full h-screen bg-white">{renderStep()}</div>;
};
