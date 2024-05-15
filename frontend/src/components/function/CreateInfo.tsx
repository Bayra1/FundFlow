import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/createInformation/createInfo";

export const Create_Info_Func = async (
  currency: string,
  budget: string,
  readiness: boolean
) => {
  try {
    const response = await axios.post(backEnd, {
      currency,
      budget,
      readiness,
    });

    if (response.status === 201) {
      return toast.success(response.data.message, {
        position: "top-center",
        style: {
          opacity: 1,
          transition: "opacity 0.5s ease",
        },
        icon: "🐦‍🔥",
        duration: 5000,
      });
    } else {
      return toast.error("Failed to register");
    }
  } catch (error: any) {
    if (error.response) {
      const responseData = error.response.data;
      if (responseData.status === 400) {
        return toast(responseData.message, {
          icon: "🧟‍♀️",
        });
      }
    } else {
      console.log("Error:", error.message);
      return toast.error("An unexpected error occurred");
    }
  }
};
