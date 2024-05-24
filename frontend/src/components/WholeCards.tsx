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

  const calculateInc_Exp = () => {
    if (!data || !data.transactions) {
      console.log("there is no data");
      return { income: 0, expenses: 0 };
    }

    let income = 0;
    let expenses = 0;

    data.transactions.forEach((transaction: TransactionType) => {
      if (transaction.transaction_type === "EXP") {
        expenses += Number(transaction.amount);
      } else if (transaction.transaction_type === "INC") {
        income += Number(transaction.amount);
      }
    });

    return { income, expenses };
  };

  const calculateTotalMoney = () => {
    const initialBudget = Number(data.info.budget);
    const { income, expenses } = calculateInc_Exp();
    const totalMoney = initialBudget - expenses + income;
    return totalMoney;
  };

  return (
    <div className="w-[1200px] mt-[20px] flex justify-between flex-row gap-2">
      <FirstCard
        currency={data.info?.currency ?? "$"}
        budget={calculateTotalMoney()}
      />
      <SecondCard
        currency={data.info?.currency ?? "$"}
        income={calculateInc_Exp().income ?? ""}
      />
      <ThirdCard
        currency={data.info?.currency ?? "$"}
        expense={calculateInc_Exp().expenses}
      />
    </div>
  );
};
