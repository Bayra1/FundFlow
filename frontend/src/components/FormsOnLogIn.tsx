"use client";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";
import { CubeIcon, EmailIcon, KeyIcon } from "./icons";
import { useFormik } from "formik";
import { LoginValidation } from "./validation";
import { Log_In_Function } from "./function";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const FormsOnLogin = () => {
  const storedToken = localStorage.getItem("token");
  const [currentToken, setCurrentToken] = useState(storedToken);

  const router = useRouter();

  useEffect(() => {
    if (currentToken) {
      localStorage.setItem("token", currentToken);
    }
  }, [currentToken]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: async (values) => {
      try {
        const token = await Log_In_Function(values.email, values.password);
        if (token) {
          setCurrentToken(token);
          setTimeout(() => {
            router.push("/Dashboard");
          }, 2000);
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  return (
    <section className="w-1/2 bg-[#FFF]">
      <div className="w-[384px] h-[426px] absolute top-[250px] left-[222px] gap-[40px]">
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
          <SubmitButton onClick={formik.handleSubmit} />
        </div>
        <div className="flex flex-row gap-[5px] w-full justify-center items-center mt-[40px]">
          <h5 className="text-black">Don't have any account ?</h5>
          <a
            href="/SignUp"
            className="text-[#0166FF] underline hover:underline-offset-2"
          >
            Sign Up
          </a>
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
};
