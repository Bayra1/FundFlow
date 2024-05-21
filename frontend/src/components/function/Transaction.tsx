import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/transaction/postTransaction";

export const Transaction_Function = async (
  amount: string,
  categoryId: string,
  date: Date,
  time: Date,
  paymentBy: string,
  description: string,
  transaction_type: string
) => {
  try {
    const response = await axios.post(backEnd, {
      amount,
      categoryId,
      date,
      time,
      paymentBy,
      description,
      transaction_type,
    });
    if (response.status === 201) {
      return toast.success("You are successfully made record", {
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
      if (responseData.status === 400) {
        return toast(responseData.message, {
          icon: "💀",
        });
      }
    } else {
      console.log("Error during creating transaction:", error);
      return toast.error("An unexpecred error occured");
    }
  }
};
