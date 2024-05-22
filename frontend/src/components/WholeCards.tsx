import { FirstCard, SecondCard, ThirdCard } from "@/components";
import useSWR from "swr";
import { GetUserWithInfo } from "./function";
import { TransactionType } from "./Interface";

export const WholeCards = () => {
  const userId = "664bf98c8bb47ccef95ad478";
  const { data, error } = useSWR(["userWithInfo", userId], () =>
    GetUserWithInfo({ userId })
  );

  if (error) {
    console.error("error fetching today transaction", error);
    return <div>Error fetching data.</div>;
  }

  if (!data) {
    return <div>Loading ... 🫠</div>;
  }

  const TotalExpense = () => {
    if (!data || !data.transactions) {
      console.log("there is no data");
      return 0;
    }

    const expTransactions = data.transactions.filter(
      (transaction: TransactionType) => transaction.transaction_type === "EXP"
    );

    let sum = 0;
    expTransactions.forEach((el: TransactionType) => {
      sum += Number(el.amount);
    });

    return sum;
  };

  console.log(TotalExpense(), "a");

  return (
    <div className="w-[1200px] mt-[20px] flex justify-between flex-row">
      <FirstCard currency={data.info?.currency ?? ""} />
      <SecondCard income={data.info?.budget ?? ""} />
      <ThirdCard currency={data.info?.currency ?? 0} expense={TotalExpense()} />
    </div>
  );
};
