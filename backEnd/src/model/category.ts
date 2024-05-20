import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: String,
  selectedIconIndex: Number,
  selectedColor: String,
});

const CategoryModel = mongoose.model("category", CategorySchema);

export { CategoryModel };
