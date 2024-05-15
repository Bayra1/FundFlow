import * as yup from "yup";

export const BudgetValidation = yup.object({
  budget: yup
    .number()
    .typeError("Please enter only numbers")
    .required("Please state your budget"),
});
