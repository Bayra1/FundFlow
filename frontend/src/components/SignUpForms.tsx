"use client";
import { useFormik } from "formik";
import { CubeIcon, EmailIcon, KeyIcon, UserIcon } from "./icons";
import { Input } from "./Input";
import { RegisterValidation } from "./validation";
import { SubmitButton } from "./SubmitButton";
import { Register_Client } from "./function";
import { Toaster } from "react-hot-toast";

export const SignUpForms = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterValidation,
    onSubmit: async (values) => {
      Register_Client(values.name, values.email, values.password);
    },
  });
  return (
    <section className="w-1/2 bg-[#FFF]">
      <div className="w-[384px] h-[426px] absolute top-[150px] left-[222px] gap-[40px]">
        <div className="flex flex-row gap-1 justify-center items-center mb-[40px]">
          <CubeIcon />
          <b className="text-black font-bold text-xl">Geld</b>
        </div>

        <div className="flex flex-col gap-1 justify-center items-center mb-[40px]">
          <b className="text-black font-bold text-xl">Welcome Back</b>
          <h5 style={{ color: "#334155" }}>
            Welcome Back, please enter your details
          </h5>
        </div>

        <div className="flex flex-col gap-[16px]">
          <Input
            touched={formik.touched.name}
            error={formik.errors.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            placeholder={"Name"}
            svg={<UserIcon />}
          />
          <Input
            touched={formik.touched.email}
            error={formik.errors.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="text"
            placeholder="Email"
            svg={<EmailIcon />}
          />
          <Input
            touched={formik.touched.password}
            error={formik.errors.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type={"password"}
            placeholder={"Password"}
            svg={<KeyIcon />}
          />
          <Input
            touched={formik.touched.confirmPassword}
            error={formik.errors.confirmPassword}
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            type={"password"}
            placeholder={"Re-Password"}
            svg={<KeyIcon />}
          />
          <SubmitButton onClick={formik.handleSubmit} />
        </div>

        <div className="flex flex-row gap-[5px] w-full justify-center items-center mt-[40px]">
          <h5 className="text-black">Already have account ?</h5>
          <a
            href="/Login"
            className="text-[#0166FF] underline hover:underline-offset-2"
          >
            Log In
          </a>
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};
