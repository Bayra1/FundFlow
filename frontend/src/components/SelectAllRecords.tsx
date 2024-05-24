import { useContext } from "react";
import { DeleteTransaction_Func } from "./function";
import { TransactionType } from "./Interface";
import { RecordNotes } from "./RecordNotes";
import toast, { Toaster } from "react-hot-toast";
import { Sub_Income_Expense } from "./SubIncome&Expense";
import { TransactionContext } from "./context/allTransactions";

export const SelectAllRecords = () => {
  const transContext = useContext(TransactionContext);

  if (!transContext) {
    throw new Error(
      "SelectAllRecords must be used within a TransactionContextProvider"
    );
  }

  const { allTransactions } = transContext;

  const handleCheckBox = async (id: string) => {
    try {
      // await DeleteTransaction_Func(id);
    } catch (error) {
      toast.error("Failed to delete transaction");
    }
    console.log("id:", id);
  };

  const calculateInc_Exp = () => {
    let income = 0;
    let expenses = 0;

    if (!allTransactions) {
      toast.error("No data");
      return { income, expenses };
    }

    allTransactions.forEach((transaction: TransactionType) => {
      if (transaction.transaction_type === "EXP") {
        expenses += Number(transaction.amount);
      } else if (transaction.transaction_type === "INC") {
        income += Number(transaction.amount);
      }
    });

    return { income, expenses };
  };

  return (
    <main className="flex flex-col gap-2 mt-[20px]">
      <Sub_Income_Expense
        income={calculateInc_Exp().income}
        expenses={calculateInc_Exp().expenses}
      />
      <div className="flex flex-col w-full gap-1">
        {allTransactions ? (
          allTransactions.map((transaction: TransactionType) => (
            <div key={transaction._id}>
              <RecordNotes
                description={transaction.description}
                transaction_type={transaction.transaction_type}
                IconIndex={transaction.categoryId?.selectedIconIndex}
                amount={transaction.amount}
                time={transaction.time}
                handleCheckBox={() => handleCheckBox(transaction._id)}
              />
            </div>
          ))
        ) : (
          <span className="loading loading-spinner loading-md"></span>
        )}
      </div>
      <Toaster position="top-center" />
    </main>
  );
};
