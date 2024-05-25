import { Request, Response } from "express";
import { CategoryModel } from "../model";

const CreateCategory = async (req: Request, res: Response) => {
  try {
    const { name, selectedIconIndex, selectedColor } = req.body;

    if (!name || !selectedIconIndex || !selectedColor) {
      return res
        .status(400)
        .json({ success: false, message: "some forms are missing" });
    }

    const newCategory = new CategoryModel({
      name,
      selectedIconIndex,
      selectedColor,
    });

    await newCategory.save();

    return res.status(201).json({
      success: true,
      message: "new category is created successfully",
      all: newCategory,
    });
  } catch (error) {
    console.error("error during creating a category:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const GetAllCategories = async (req: Request, res: Response) => {
  try {
    const allCategories = await CategoryModel.find({});
    return res.status(200).json({
      success: true,
      message: "This is all categories",
      data: allCategories,
    });
  } catch (error) {
    console.error("Error during getting all categories:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const DeleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id, "id");

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id is unavailable at the moment",
      });
    }

    const result = await CategoryModel.findByIdAndDelete(id);
    console.log(result, "result");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "the Category is not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "The Category is deleted successfully",
    });
  } catch (error) {
    console.error("Error during deleting Category:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { CreateCategory, GetAllCategories, DeleteCategory };
