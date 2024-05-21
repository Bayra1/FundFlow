type PropsType = {
  income: string;
  expense: string;
  setIncome: (value: string) => void;
  setExpense: (value: string) => void;
};

export const StatesOfTransaction = ({
  income,  
  setIncome,
  setExpense,
}: PropsType) => {
  const handleIncome = () => {
    setIncome("INC");
    setExpense("EXP");
  };

  const handleExpense = () => {
    setIncome("EXP");
    setExpense("INC");
  };

  return (
    <div className="w-full h-[40px] rounded-3xl bg-[#F3F4F6] flex">
      <button
        onClick={handleIncome}
        style={{
          backgroundColor: income === "INC" ? "#0166FF" : "",
          color: income === "INC" ? "white" : "",
        }}
        className="w-1/2 h-full rounded-3xl text-black"
      >
        Income
      </button>
      <button
        onClick={handleExpense}
        style={{
          backgroundColor: income === "EXP" ? "#16A34A" : "",
          color: income === "EXP" ? "white" : "black",
        }}
        className="w-1/2 h-full rounded-3xl text-black"
      >
        Expense
      </button>
    </div>
  );
};
