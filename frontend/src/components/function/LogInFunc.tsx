import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/user/logIn";

export const Log_In_Function = async (email: string, password: string) => {
  try {
    const response = await axios.post(backEnd, {
      email: email,
      password: password,
    });

    const token = response.data.token;
    localStorage.setItem("token", token);

    if (response.status === 200) {
      toast.success("Login successful", {
        position: "top-center",
        style: {
          opacity: 1,
          transition: "opacity 0.5s ease",
        },
        duration: 5000,
      });
    } else {
      return toast("Failed to perform", {
        icon: "💀",
      });
    }
  } catch (error: any) {
    if (error.response) {
      const responseData = error.response.data;
      if (
        responseData.message === "user with this email does not exist" ||
        responseData.message === "Password does not match"
      ) {
        return toast.error(responseData.message);
      } else {
        return toast.error("An unexpected error occurred");
      }
    } else if (error.request) {
      return toast.error(
        "Network error: Please check your internet connection"
      );
    } else {
      console.error("Error during login:", error);
      return toast.error("An unexpected error occurred");
    }
  }
};
