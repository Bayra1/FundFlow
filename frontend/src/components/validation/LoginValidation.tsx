import * as yup from "yup";

export const LoginValidation = yup.object({
  email: yup
    .string()
    .test("must be valid email", function (value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const isEmail = emailRegex.test(value as string);

      return isEmail;
    })
    .required("email cannot be empty"),
  password: yup
    .string()
    .min(6, "at least 6 characters")
    .matches(/[A-Z]/, "one uppercase")
    .matches(/^(?=.*[!@#$%^&*])/, "special characters must be included")
    .required("password cannot be empty"),
});

