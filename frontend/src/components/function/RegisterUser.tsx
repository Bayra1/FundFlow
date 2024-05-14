import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/user/postUser";

export const Register_Client = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post(backEnd, {
      name: name,
      email: email,
      password: password,
    });

    if (response.status === 201) {
      return toast.success("You are successfully registered", {
        position: "top-center",
        style: {
          opacity: 1,
          transition: "opacity 0.5s ease",
        },
        duration: 5000,
      });
    } else {
      return toast.error("Failed to register");
    }
  } catch (error: any) {
    if (error.response) {
      const responseData = error.response.data;
      if (responseData.message === "User with this email already exists") {
        return toast.error(responseData.message);
      } else {
        return toast.error("Server error: " + responseData.message);
      }
    } else if (error.request) {
      return toast.error(
        "Network error: Please check your internet connection"
      );
    } else {
      console.log("Error:", error.message);
      return toast.error("An unexpected error occurred");
    }
  }
};
