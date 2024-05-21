import axios from "axios";
import toast from "react-hot-toast";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  id: string;
}

const backEnd = "http://localhost:8000/transaction/postTransaction";

export const Transaction_Function = async (
  amount: string,
  categoryId: string,
  date: string,
  time: string,
  paymentBy: string,
  description: string,
  transaction_type: string
) => {
  const userToken = localStorage.getItem("token");

  if (!userToken) {
    console.error("No token found in local storage");
    return;
  }

  let user: CustomJwtPayload;
  try {
    user = jwt.decode(userToken) as CustomJwtPayload;
    if (!user || !user.id) {
      console.error("ID not found in the token payload");
      return;
    }
  } catch (error) {
    console.error("Failed to decode token:", error);
    return;
  }

  const userId = user.id;

  try {
    const response = await axios.post(backEnd, {
      amount,
      categoryId,
      date,
      time,
      paymentBy,
      description,
      transaction_type,
      userId,
    });

    if (response.status === 201) {
      return toast.success("You successfully made a record", {
        position: "top-center",
        style: {
          opacity: 1,
          transition: "opacity 0.5s ease",
        },
        duration: 5000,
        icon: "🔥",
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
      return toast.error("An unexpected error occurred");
    }
  }
};
