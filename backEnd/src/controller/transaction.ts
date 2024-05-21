import { Request, Response } from "express";
import { TransactionModel } from "../model/transaction";
import mongoose from "mongoose";
import { format } from "date-fns";

const CreateTransaction = async (req: Request, res: Response) => {
  try {
    const {
      amount,
      categoryId,
      date,
      time,
      paymentBy,
      description,
      userId,
      transaction_type,
    } = req.body;

    if (!amount || !paymentBy || !description || !userId) {
      return res.status(400).json({
        success: false,
        message: "Some fields are empty",
      });
    }
    const newTransaction = new TransactionModel({
      amount,
      categoryId: new mongoose.Types.ObjectId(categoryId),
      date,
      time,
      paymentBy,
      description,
      userId: new mongoose.Types.ObjectId(userId),
      transaction_type,
    });

    await newTransaction.save();

    return res.status(201).json({
      success: true,
      message: "record is created prosperously",
    });
  } catch (error) {
    console.error("Error during Creating transaction:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getAllTransactions = async (_: Request, res: Response) => {
  try {
    const getAll = await TransactionModel.find()
      .populate("userId")
      .populate("categoryId");

    return res.status(200).json({
      success: true,
      message: "This is All transactions",
      data: getAll,
    });
  } catch (error) {
    console.error("Error during getting all transaction:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getTodayTransactions = async (_: Request, res: Response) => {
  try {
    const date = new Date();
    const today = format(date, "MMM dd, yyyy");

    const allTransactions = await TransactionModel.find({}).populate(
      "categoryId"
    );
    const todayTransactions = allTransactions.filter(
      (transaction) => transaction.date === today
    );

    if (allTransactions.length === 0) {
      return res.status(400).json({
        success: true,
        message: "there is no transactions availabale",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "This is today transactions",
      data: todayTransactions,
    });
  } catch (error) {
    console.error("Error during getting today transaction:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getYestedayTransactions = async (_: Request, res: Response) => {
  try {
    const yesterday = () => {
      let date = new Date();
      date.setDate(date.getDate() - 1);
      return date;
    };
    const yesterDayExact = format(yesterday(), "MMM dd, yyyy");

    const allTransactions = await TransactionModel.find({}).populate(
      "categoryId"
    );
    const yesterdayTransactions = allTransactions.filter(
      (transaction) => transaction.date === yesterDayExact
    );

    if (yesterdayTransactions.length === 0) {
      return res.status(400).json({
        success: true,
        message: "there is no transactions availabale",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "This is yesterday transactions",
      data: yesterdayTransactions,
    });
  } catch (error) {
    console.error("Error during getting today transaction:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export {
  CreateTransaction,
  getAllTransactions,
  getTodayTransactions,
  getYestedayTransactions,
};
