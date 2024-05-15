"use client";

import { useRef, createContext } from "react";
import { string } from "yup";

type InfoType = {
  currency: string;
  budget: string;
  readiness: boolean;
};

export const InfoContext = createContext({});

export const InfoContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const InfoRef = useRef<InfoType>({
    currency: "",
    budget: "",
    readiness: false,
  });

  return (
    <InfoContext.Provider value={InfoRef}>{children}</InfoContext.Provider>
  );
};
