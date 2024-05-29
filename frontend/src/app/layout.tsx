import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TransactionContextProvider } from "@/components/context/allTransactions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransactionContextProvider>{children}</TransactionContextProvider>
      </body>
    </html>
  );
}
