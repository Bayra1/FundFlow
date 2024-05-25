import express from "express";
import {
  CreateCategory,
  DeleteCategory,
  GetAllCategories,
} from "../controller";

export const category = express.Router();

category.route("/postCategory").post(CreateCategory);
category.route("/getAllCategories").get(GetAllCategories);
category.route("/deleteCategory/:id").delete(DeleteCategory);
