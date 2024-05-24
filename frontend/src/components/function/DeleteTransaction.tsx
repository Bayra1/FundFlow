import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/transaction/deleteTransaction";

export const DeleteTransaction_Func = async (id: string) => {
  try {
    const response = await axios.post(backEnd, { id });
    toast.success(response.data.message);
  } catch (error: any) {
    if (error.response) {
      const responseData = error.response.data;
      if (responseData.status === 400) {
        toast(responseData.message, {
          icon: "💀",
        });
      } else {
        toast.error(responseData.message);
      }
    } else {
      console.log("Error during deleting transaction:", error);
      toast.error("An unexpected error occurred");
    }
  }
};
