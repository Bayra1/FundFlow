"use client";
import { useState, createContext, useEffect, ReactNode } from "react";
import useSWR from "swr";
import { GetUserWithInfo } from "../function";
import { decode } from "jsonwebtoken";
import WarningModal from "../WarningModel";
import { LoadingPage } from "../Loading/Loading";

interface userCntextProptype {
  children: ReactNode;
}

type userType = {
  id: string | null;
  info:{
    currency:string
  }
};

interface UserContextType {
  user: userType | null | undefined;
}

export const UserWithInfoContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserWithInfoContextProvider = ({
  children,
}: userCntextProptype) => {
  const [user, setUser] = useState<userType | null | undefined>();

  const userToken = localStorage.getItem("token");

  if (!userToken) {
    return (
      <WarningModal
        name="You have not logged in"
        path="/Login"
        instruction="Go To Login"
      />
    );
  }

  const userData = decode(userToken);

  if (!userData || typeof userData === "string") {
    return <div>Invalid user token.</div>;
  }

  const { data, error } = useSWR(["userWithInfo", userData.id], () =>
    GetUserWithInfo({ userId: userData.id })
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  if (error) {
    console.error("Error fetching user info:", error);
    return <div>Error fetching data.</div>;
  }

  if (!data) {
    return <LoadingPage/>;
  }

  return (
    <UserWithInfoContext.Provider value={{ user }}>
      {children}
    </UserWithInfoContext.Provider>
  );
};
