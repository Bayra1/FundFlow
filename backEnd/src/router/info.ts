import express from "express";
import { createInfo, getAllInfo } from "../controller/info";

export const createInformation = express.Router();

createInformation.route("/createInfo").post(createInfo);
createInformation.route("/AllInfo").get(getAllInfo);
