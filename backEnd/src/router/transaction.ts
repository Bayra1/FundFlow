import express from "express";
import {
  CreateTransaction,
  deleteTransactions,
  getAllTransactions,
  getTodayTransactions,
  getYestedayTransactions,
} from "../controller";

export const transaction = express.Router();

transaction.route("/postTransaction").post(CreateTransaction);
transaction.route("/getAllTransactions").get(getAllTransactions);
transaction.route("/getTodayTransaction").get(getTodayTransactions);
transaction.route("/getYesterdayTransaction").get(getYestedayTransactions);
transaction.route("/deleteTransaction").post(deleteTransactions);
