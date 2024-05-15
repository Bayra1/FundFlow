import { useFormik } from "formik";
import { LineTwo } from "./LineTwo";
import { SubTitle } from "./SubTitle";
import { IncomeIcon } from "./icons";
import "./styles/submitButton.css";
import { BudgetValidation } from "./validation";
import { HelperText } from "./HelperText";
import { SecondStep_Func } from "./function";

type propsType = {
  nextPage: () => void;
};

export const SecondStep = ({ nextPage }: propsType) => {
  const formik = useFormik({
    initialValues: {
      budget: "",
    },
    validationSchema: BudgetValidation,
    onSubmit: async (values) => {
      SecondStep_Func(values.budget);
      if (!formik.errors.budget) {
        nextPage();
      }
    },
  });

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
          name="budget"
          value={formik.values.budget}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-[384px] h-[48px] bg-[#F3F4F6] p-[10px] rounded text-black border-2 border-solid"
          type="text"
          placeholder="budget amount ?"
        />
        <HelperText error={formik.errors.budget!} />
        <p className="w-[384px] text-center text-[#475569]">
          How much cash do you have in your budget ?
        </p>
      </section>
      <div className="w-full flex-col flex justify-center items-center mt-[40px]">
        <button
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
