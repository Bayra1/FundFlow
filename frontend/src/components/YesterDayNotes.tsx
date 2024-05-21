import { useEffect, useState } from "react";
import { RecordNotes, Title } from "./index";
import useSWR from "swr";
import { FetchYesterdayTrans } from "./function";
import { TransactionType } from "./Interface";

export const YesterDayNotes = () => {
  const [yesterdayTrans, setYesterdayTrans] = useState([]);

  const { data, error } = useSWR("YesterDayTransactions", FetchYesterdayTrans);

  useEffect(() => {
    if (data) {
      setYesterdayTrans(data);
    }
  }, [data]);

  if (error) {
    console.error("error fetching today transaction", error);
    return <div>Error fetching data.</div>;
  }

  if (!data) {
    return <div>Loading ... 🙅‍♂️</div>;
  }
  return (
    <div className="flex w-full flex-col mt-[20px]">
      <Title name="Yesterday" />
      {yesterdayTrans &&
        yesterdayTrans.map((transaction: TransactionType, index: number) => {
          return (
            <div key={index}>
              <RecordNotes
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
