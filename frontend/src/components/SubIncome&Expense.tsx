import { decode } from "jsonwebtoken";
import { ControlDateButton } from "./ControlDateButton";
import { DropDownRecord } from "./DropDown";
import { Title } from "./Title";
import useSWR from "swr";
import { GetUserWithInfo, SecondStep_Func } from "./function";
import WarningModal from "./WarningModel";
import { LoadingPage } from "./Loading/Loading";
interface SubIncomeExpenseProps {
  income: number;
  expenses: number;
}

export const Sub_Income_Expense: React.FC<SubIncomeExpenseProps> = ({
  income,
  expenses,
}) => {
  const userToken = localStorage.getItem("token");

  if (!userToken) {
    return <div>Please log in to see your transactions.</div>;
  }

  const user = decode(userToken);

  if (!user || typeof user === "string") {
    return <div>Invalid user token.</div>;
  }

  const { data, error } = useSWR(["userWithInfo", user.id], () =>
    GetUserWithInfo({ userId: user.id })
  );

  if (error) {
    console.error("Error fetching user info:", error);
    return <div>Error fetching data.</div>;
  }

  if (!data) {
    return <LoadingPage/>;
  }

  return (
    <div className="flex flex-col gap-2">
      <section className="flex justify-between flex-row w-full h-fit items-center">
        <ControlDateButton />
        <DropDownRecord />
      </section>
      <Title name="All Records" />
      <div
        className="w-full h-[48px] flex justify-between bg-white items-center"
        style={{
          padding: "12px 24px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#E2E8F0",
          borderRadius: "12px",
        }}
      >
        <span className="text-base font-semibold leading-6 text-[#84cc16] flex flex-row gap-2">
          <div className="text-black">{`Income ->`}</div>
          {SecondStep_Func({ quantity: income, currency: data.info.currency })}
        </span>
        <span className="text-base font-semibold leading-6 text-[#F54948] flex flex-row gap-2">
          <div className="text-black">{`Expenses ->`}</div>
          {SecondStep_Func({
            quantity: expenses,
            currency: data.info.currency,
          })}
        </span>
      </div>
      {!userToken && (
        <WarningModal
          name="You have not logged in"
          path="/Login"
          instruction="It is not good to look secretly"
        />
      )}
    </div>
  );
};
