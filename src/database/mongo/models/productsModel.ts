import { Document } from "mongoose";
import { Product } from "../../models/product";

import { prop, getModelForClass } from "@typegoose/typegoose";
import * as mongoose from "mongoose";

class ProductSchema {
  @prop()
  public displayName?: string;

  @prop()
  public categoryIds?: [mongoose.Schema.Types.ObjectId];

  @prop()
  public createdAt?: Date;

  @prop()
  public totalRating?: number;

  @prop()
  public price?: number;
}

const model = getModelForClass(ProductSchema);

export const getById = async (id: string) => {
  const data = (await model.findById(id).exec()) as Document<
    Omit<Product, "id">
  >;
  if (!data) {
    throw new Error(`Object with id ${id} doesn't exist`);
  }
  return {
    id: data._id,
    displayName: data.displayName,
    categoryIds: data.categoryIds,
    totalRating: data.totalRating,
    price: data.price,
  };
};

export const add = async (data: Product) => {
  const product = new model(data);

  await product.save();

  return product._id;
};
