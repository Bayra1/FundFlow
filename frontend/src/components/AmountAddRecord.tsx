export const AmountAddRecord = () => {
  return (
    <div className="flex flex-col w-full h-[76px] gap-1">
      <span className="text-base font-normal text-[#171717]">Amount</span>
      <input
        type="text"
        placeholder="$ 000.0"
        style={{
          backgroundColor: "#F3F4F6",
          height: "100%",
          padding: "10px",
          borderRadius: "4px",
          color: "black",
          border: "1px solid #D1D5DB",
        }}
        name=""
        id=""
      />
    </div>
  );
};
