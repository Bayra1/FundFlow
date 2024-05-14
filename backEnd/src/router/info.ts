import express from "express";
import { createInfo } from "../controller/info";

export const createInformation = express.Router();

createInformation.route("/createInfo").post(createInfo);
