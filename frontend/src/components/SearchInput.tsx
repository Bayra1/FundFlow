import { ChangeEvent, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { TransactionContext } from "./context/allTransactions";
import { TransactionType } from "./Interface";

export const SearchInput = () => {
  const [value, setValue] = useState("");
  const transContext = useContext(TransactionContext);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  if (!transContext) {
    throw new Error(
      "SelectAllRecords must be used within a TransactionContextProvider"
    );
  }

  const { setFilteredData, allTransactions } = transContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setValue(searchTerm);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const filteredItems = allTransactions?.filter((item: TransactionType) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredData(filteredItems);
    }, 500); 
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  return (
    <input
      value={value}
      onChange={handleChange}
      style={{
        width: "250px",
        height: "32px",
        borderRadius: "10px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#E5E7EB",
        backgroundColor: "#F3F4F6",
        padding: "10px",
        color: "black",
      }}
      placeholder="search"
    />
  );
};
