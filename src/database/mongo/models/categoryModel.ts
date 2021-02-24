import { Document } from "mongoose";
import { Category } from "../../models/category";
import { prop, getModelForClass } from "@typegoose/typegoose";
import * as mongoose from "mongoose";

class CategorySchema {
  @prop()
  public displayName?: string;

  @prop()
  public collection?: string;
}

const model = getModelForClass(CategorySchema);

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
