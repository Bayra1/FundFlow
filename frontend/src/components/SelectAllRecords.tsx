import { useEffect, useState } from "react";
import useSWR from "swr";
import { DeleteTransaction_Func, GetAllTransactions } from "./function";
import { TransactionType } from "./Interface";
import { RecordNotes } from "./RecordNotes";
import { Toaster } from "react-hot-toast";
import { SelectAllCheckBox } from "./SelectAllCheckBox";

export const SelectAllRecords = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [isCheckedOneTransaction, setIsCheckedOneTransaction] = useState(false);
  const { data, error } = useSWR("allTransactionsactions", GetAllTransactions);

  useEffect(() => {
    if (data) {
      setAllTransactions(data);
    }
  }, [data]);

  if (error) {
    console.error("error fetching today transaction", error);
    return;
  }

  if (!data) {
    return <div>Loading ... 🙅‍♂️</div>;
  }

  return (
    <main className="flex flex-col gap-2">
      <div
        className="w-full h-[48px] flex justify-between bg-white items-center mt-[20px]"
        style={{
          padding: "12px 24px 12px 24px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#E2E8F0",
          borderRadius: "12px",
        }}
      >
        <SelectAllCheckBox />
        <span className="text-base font-semibold leading-6 text-[#94A3B8]">
          - 1000
        </span>
      </div>
      <div className="flex flex-col w-full gap-1">
        {allTransactions &&
          allTransactions.map((transaction: TransactionType, index: number) => {
            return (
              <div key={index}>
                <RecordNotes
                  description={transaction.description}
                  transaction_type={transaction.transaction_type}
                  IconIndex={transaction.categoryId?.selectedIconIndex}
                  amount={transaction.amount}
                  time={transaction.time}
                  isChecked={isCheckedOneTransaction}
                  // handleCheckBox={() => DeleteTransaction_Func(transaction._id)}
                />
              </div>
            );
          })}
      </div>
      <Toaster position="top-center" />
    </main>
  );
};
