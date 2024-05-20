import express from "express";
import { CreateCategory, GetAllCategories } from "../controller";

export const category = express.Router();

category.route("/postCategory").post(CreateCategory);
category.route("/getAllCategories").get(GetAllCategories);
