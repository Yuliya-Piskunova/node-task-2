import mongoose, { Document } from "mongoose";
import { Product } from "../../models/product";

const ProductsSchema = new mongoose.Schema(
  {
    displayName: String,
    categoryIds: [mongoose.Schema.Types.ObjectId],
    createdAt: Date,
    totalRating: Number,
    price: Number,
  },
  {
    collection: "products",
  }
);

const model = mongoose.model("Products", ProductsSchema);

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
