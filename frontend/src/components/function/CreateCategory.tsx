import axios from "axios";
import toast from "react-hot-toast";

const backEnd = "http://localhost:8000/category/postCategory";

export const Create_Category_Func = async (
  selectedColor: string,
  selectedIconIndex: number | undefined,
  name: any
) => {
  try {
    const response = await axios.post(backEnd, {
      name,
      selectedIconIndex,
      selectedColor,
    });

    if (response.status === 201) {
      return toast.success(response.data.message, {
        position: "top-center",
        style: {
          opacity: 1,
          transition: "opacity 0.5 ease",
        },
        icon: "🎢",
        duration: 3000,
      });
    } else {
      return toast.error("Cannot create a new category");
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
      console.log("Error during creating category:", error);
      return toast.error("An unexpecred error occured");
    }
  }
};
