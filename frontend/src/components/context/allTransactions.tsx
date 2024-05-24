"use client";
import { useState, createContext, useEffect, ReactNode } from "react";
import useSWR from "swr";
import { GetAllTransactions } from "../function";
import { TransactionType } from "../Interface";

interface TransactionContextType {
  allTransactions: TransactionType[] | undefined;
}

interface TransactionContextProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);

export const TransactionContextProvider = ({ children }: TransactionContextProviderProps) => {
  const [allTransactions, setAllTransactions] = useState<TransactionType[] | undefined>(undefined);
  const { data, error } = useSWR("allTransactions", GetAllTransactions);

  useEffect(() => {
    if (data) {
      setAllTransactions(data);
    }
  }, [data]);

  if (error) {
    console.warn("error fetching transactions", error);
    return null;
  }

  if (!data) {
    return <span className="loading loading-spinner loading-md"></span>;
  }

  return (
    <TransactionContext.Provider value={{ allTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};
