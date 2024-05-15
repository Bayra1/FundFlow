import * as yup from "yup";

export const OptionValiation = yup.object({
  currencyOption: yup.string().required("plese choose one of the currencies"),
});
