"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { TransactionType } from "../Interface";
import { GetAllTransactions } from "../function";
import useSWR from "swr";
import { LoadingPage } from "../Loading/Loading";

interface TransactionContextType {
  allTransactions: TransactionType[] | undefined;
  setFilteredData: React.Dispatch<
    React.SetStateAction<TransactionType[] | undefined>
  >;
  filterTransactions: (type: string) => TransactionType[];
  filteredData: TransactionType[] | undefined;
}

export const TransactionContext = createContext<
  TransactionContextType | undefined
>(undefined);

export const TransactionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [allTransactions, setAllTransactions] = useState<
    TransactionType[] | undefined
  >(undefined);

  const [filteredData, setFilteredData] = useState<
    TransactionType[] | undefined
  >(undefined);

  const { data, error } = useSWR("allTransactions", GetAllTransactions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAllTransactions(data);
        setFilteredData(data);
      } catch (error) {
        console.error("error:", error);
      }
    };
    fetchData();
  }, [data]);

  if (error) {
    console.warn("Error fetching transactions", error);
    return null;
  }

  if (!data) {
    return <LoadingPage />;
  }

  const filterTransactions = (type: string): TransactionType[] => {
    let filteredData;
    if (type === "All") {
      filteredData = allTransactions || [];
    } else {
      filteredData = (data || []).filter(
        (el: TransactionType) => el.transaction_type === type
      );
    }
    setFilteredData(filteredData);
    return filteredData;
  };

  return (
    <TransactionContext.Provider
      value={{
        allTransactions,
        setFilteredData,
        filterTransactions,
        filteredData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
