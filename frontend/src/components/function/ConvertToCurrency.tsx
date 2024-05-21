export const ConvertToCurrency = () => {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let MNTugrik = new Intl.NumberFormat("mn-MN", {
    style: "currency",
    currency: "MNT",
  });
};
