import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/user/logIn";

export const Log_In_Function = async (email: string, password: string) => {
  try {
    const response = await axios.post(backEnd, { email, password });
    const token = response.data.token;

    if (response.status === 200) {
      localStorage.setItem("token", token);
      toast.success("Login successful", {
        position: "top-center",
        style: { opacity: 1, transition: "opacity 0.5s ease" },
        duration: 5000,
      });
      return token;
    } else {
      toast("Failed to perform", { icon: "💀" });
      return null;
    }
  } catch (error: any) {
    if (error.response) {
      const responseData = error.response.data;
      const errorMessage =
        responseData.message === "user with this email does not exist" ||
        responseData.message === "Password does not match"
          ? responseData.message
          : "An unexpected error occurred";

      toast.error(errorMessage);
    } else if (error.request) {
      toast.error("Network error: Please check your internet connection");
    } else {
      console.error("Error during login:", error);
      toast.error("An unexpected error occurred");
    }
    return null;
  }
};
