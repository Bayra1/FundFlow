"use client"
import { LineOne } from "./LineOne";
import { SubTitle } from "./SubTitle";
import { CurrencyIcon } from "./icons";
import { useFormik } from "formik";
import { OptionValiation } from "./validation";
import { Select } from "./Select";
import WarningModal from "./WarningModel";
import "./styles/submitButton.css";

type PropsType = {
  nextPage: () => void;
};

export const FirstStep = ({ nextPage }: PropsType) => {
  const formik = useFormik({
    initialValues: {
      currencyOption: "",
    },
    validationSchema: OptionValiation,
    onSubmit: async (values) => {
      localStorage.setItem("currency", values.currencyOption);
      if (
        !formik.errors.currencyOption ||
        formik.values.currencyOption === "Choose currency"
      ) {
        nextPage();
      }
    },
  });

  return (
    <main className="flex flex-col">
      <section className="flex flex-col gap-[20px] mt-[20px] mb-[40px]">
        <SubTitle />
        <LineOne />
      </section>
      <section className="flex flex-col justify-center items-center gap-8 mt-[20px]">
        <div className="flex flex-col gap-[20px] justify-center items-center mb-[40px] text-8xl">
          <CurrencyIcon />
          <b className="text-black font-bold text-xl">Select Base Currency</b>
        </div>
        <Select
          error={formik.errors.currencyOption!}
          name="currencyOption"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.currencyOption}
        />
        <p className="w-[384px] text-center text-[#475569]">
          Your base currency should be the one you use most often. All
          transactions in other currencies will be calculated based on this one.
        </p>
      </section>
      <div className="w-full flex-col flex justify-center items-center mt-[40px]">
        <button
          disabled={formik.isSubmitting}
          type="submit"
          onClick={() => {
            formik.handleSubmit();
          }}
          id="login-button"
          className="w-[384px] h-[48px] bg-[#0166FF] text-white rounded-2xl"
        >
          Confirm
        </button>
      </div>
    </main>
  );
};
