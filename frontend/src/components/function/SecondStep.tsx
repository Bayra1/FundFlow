export const SecondStep_Func = (quantity: any) => {
  var currency = localStorage.getItem("currency");
  let formattedAmount = "";

  if (currency === "Dollar $") {
    formattedAmount = Number(quantity).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else if (currency === "Tugrik ₮") {
    formattedAmount = Number(quantity).toLocaleString("mn-MN", {
      style: "currency",
      currency: "MNT",
    });
  }

  localStorage.setItem("budget", formattedAmount);
};