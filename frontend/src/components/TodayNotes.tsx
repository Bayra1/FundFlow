import { useEffect, useState } from "react";
import { RecordNotesNoCheckBox, Title } from "./index";
import { FetchTodayTransactions } from "./function";
import { TransactionType } from "./Interface";
import useSWR from "swr";

export const TodayNotes = () => {
  const [todayTransactions, setTodayTransactions] = useState([]);

  const { data, error } = useSWR("transactions", FetchTodayTransactions);

  useEffect(() => {
    if (data) {
      setTodayTransactions(data);
    }
  }, [data]);

  if (error) {
    console.error("error fetching today transaction", error);
    return <div>Error fetching data.</div>;
  }

  if (!data) {
    return <div>Loading ... 🫠</div>;
  }

  return (
    <div className="flex flex-col mt-[20px]">
      <Title name="Today" />
      {todayTransactions &&
        todayTransactions.map((transaction: TransactionType, index: number) => {
          return (
            <div key={index}>
              <RecordNotesNoCheckBox
                description={transaction.description}
                transaction_type={transaction.transaction_type}
                IconIndex={transaction.categoryId?.selectedIconIndex}
                amount={transaction.amount}
                time={transaction.time}
              />
            </div>
          );
        })}
    </div>
  );
};
