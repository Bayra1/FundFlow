import { useContext } from "react";
import { TransactionContext } from "./context/allTransactions";
import { TransactionType } from "./Interface";
import { RecordNotesNoCheckBox } from "./Record_NoCheckbox";

export const LastRecords = () => {
  const transContext = useContext(TransactionContext);

  if (!transContext) {
    throw new Error(
      "LastRecords must be used within a TransactionContextProvider"
    );
  }

  const { filteredData } = transContext;

  return (
    <section className="w-[1200px] h-fit mt-[20px] bg-white rounded-xl">
      <div
        className="w-full h-[56px]"
        style={{
          padding: "16px 24px",
          borderStyle: "solid",
          borderBottomWidth: "2px",
          borderColor: "#E2E8F0",
        }}
      >
        <span className="text-base leading-6 font-semibold text-black">
          Last Records
        </span>
      </div>
      <div className="w-full h-fit" style={{ padding: "0px 24px 24px 24px" }}>
        {filteredData ? (
          filteredData.slice(-5).map((transaction: TransactionType, index) => (
            <div key={index}>
              <RecordNotesNoCheckBox
                description={transaction.description}
                transaction_type={transaction.transaction_type}
                IconIndex={transaction.categoryId?.selectedIconIndex}
                amount={transaction.amount}
                time={transaction.time}
              />
            </div>
          ))
        ) : (
          <span className="loading loading-spinner loading-md"></span>
        )}
      </div>
    </section>
  );
};
