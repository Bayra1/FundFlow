import express from "express";
import { CreateTransaction } from "../controller";

export const transaction = express.Router();

transaction.route("/postTransaction").post(CreateTransaction);


