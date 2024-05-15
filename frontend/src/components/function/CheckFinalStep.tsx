import toast from "react-hot-toast";

type propsType = {
  currency: string;
  budget: string;
};

export const CheckFinalInfo_Func = (props: propsType) => {
  const { currency, budget } = props;

  if (!currency) {
    return toast("There is no currency. Please go back to the first step.", {
      style: {
        opacity: 1,
        transition: "opacity 0.5s ease",
      },
      icon: "🐲",
      duration: 5000,
    });
  } else if (!budget) {
    return toast("There is no budget. Please go back to the first step.", {
      style: {
        opacity: 1,
        transition: "opacity 0.5s ease",
      },
      icon: "🐲",
      duration: 5000,
    });
  }
  return null;
};
