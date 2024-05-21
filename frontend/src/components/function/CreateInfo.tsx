import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/info/createInfo";

export const Create_Info_Func = async (
  currency: string,
  budget: string,
  readiness: boolean,
  userId: string
) => {
  try {
    const response = await axios.post(backEnd, {
      currency,
      budget,
      readiness,
      userId,
    });

    const InfoToken = response.data.token;
    localStorage.setItem("InfoToken", InfoToken);

    if (response.status === 201) {
      toast.success(response.data.message, {
        position: "top-center",
        style: {
          opacity: 1,
          transition: "opacity 0.5s ease",
        },
        icon: "🐦‍🔥",
        duration: 5000,
      });

      return InfoToken;
    } else {
      toast.error("Failed to register");
      return null;
    }
  } catch (error: any) {
    if (error.response) {
      const responseData = error.response.data;
      if (responseData.status === 400) {
        toast(responseData.message, {
          icon: "🧟‍♀️",
        });
        return null;
      } else if (responseData.status === 400) {
        toast(responseData.message, {
          icon: "🧟‍♀️",
        });
        return null;
      }
    } else {
      console.log("Error:", error.message);
      toast.error("An unexpected error occurred");
      return null;
    }
  }
};
