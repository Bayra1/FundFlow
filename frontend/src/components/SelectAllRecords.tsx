import { useEffect, useState } from "react";
import useSWR from "swr";
import { GetAllTransactions } from "./function";
import { TransactionType } from "./Interface";
import { RecordNotes } from "./RecordNotes";
import { Toaster } from "react-hot-toast";

export const SelectAllRecords = () => {
  const [allTransactions, setAllTransactions] = useState<TransactionType[]>([]);
  const [checkedTransactions, setCheckedTransactions] = useState<{ [key: string]: boolean }>({});
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

  const handleCheckBox = (id: string) => {
    setCheckedTransactions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectAll = () => {
    const newCheckedState = allTransactions.reduce((acc, transaction) => {
      acc[transaction.id] = true; // Assuming each transaction has a unique 'id' field
      return acc;
    }, {} as { [key: string]: boolean });
    setCheckedTransactions(newCheckedState);
  };

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
        <div className="flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            className="checkbox border-2"
            style={{ borderColor: "#D2D4D7" }}
            onChange={handleSelectAll}
          />
          <div className="flex flex-col gap-1">
            <span className="text-base font-normal leading-6 text-black">
              Select All
            </span>
          </div>
        </div>
        <span className="text-base font-semibold leading-6 text-[#94A3B8]">
          - 1000
        </span>
      </div>
      <div className="flex flex-col w-full gap-1">
        {allTransactions.map((transaction: TransactionType) => (
          <div key={transaction.id}>
            <RecordNotes
              handleCheckBox={() => handleCheckBox(transaction.id)}
              isChecked={checkedTransactions[transaction.id] || false}
              description={transaction.description}
              transaction_type={transaction.transaction_type}
              IconIndex={transaction.categoryId?.selectedIconIndex}
              amount={transaction.amount}
              time={transaction.time}
            />
          </div>
        ))}
      </div>
      <Toaster position="top-center" />
    </main>
  );
};
