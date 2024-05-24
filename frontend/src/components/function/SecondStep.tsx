type TypeBudget = {
  quantity: number;
  currency: string;
};

export const SecondStep_Func = ({ quantity, currency }: TypeBudget): string => {
  let formattedAmount = "";

  if (currency === "Dollar $") {
    formattedAmount = quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else if (currency === "Tugrik ₮") {
    formattedAmount = quantity.toLocaleString("mn-MN", {
      style: "currency",
      currency: "MNT",
    });
  } else {
    console.warn("Currency not recognized. Please check the currency setting.");
    formattedAmount = quantity.toLocaleString();
  }

  return formattedAmount;
};
