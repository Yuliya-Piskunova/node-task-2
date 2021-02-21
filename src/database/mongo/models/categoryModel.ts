import mongoose, { Document } from "mongoose";
import { Category } from "../../models/category";

const CategorySchema = new mongoose.Schema(
  {
    displayName: String,
  },
  {
    collection: "categories",
  }
);

const model = mongoose.model("Category", CategorySchema);

export const getById = async (id: string) => {
  const data = (await model.findById(id).exec()) as Document<
    Omit<Category, "id">
  >;
  if (!data) {
    throw new Error(`Object with id ${id} doesn't exist`);
  }
  return {
    id: data._id,
    displayName: data.displayName,
  };
};

export const add = async (data: Category) => {
  const category = new model(data);

  await category.save();

  return category._id;
};
