"use client";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import { ClosedEyeIcon, OpenEye } from "./icons";
import { HelperText } from "./HelperText";

type PropsType = {
  type: string;
  placeholder: string;
  svg: JSX.Element;
  onBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  value: string;
  name: string;
  touched?: Boolean | undefined;
  error: string | undefined;
};

export const Input = ({
  type,
  placeholder,
  svg,
  value,
  onChange,
  onBlur,
  name,
  touched,
  error,
}: PropsType) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="input input-bordered flex items-center gap-2 bg-[#f3f4f6] text-black relative">
        {svg}
        {type === "password" && (
          <button
            className="absolute right-0 mr-2 w-fit"
            onClick={toggleShowPassword}
          >
            {showPassword ? <OpenEye /> : <ClosedEyeIcon />}
          </button>
        )}
        <input
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
        />
      </label>
      {error && touched && <HelperText error={error!} />}
    </div>
  );
};
