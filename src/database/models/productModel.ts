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

const ProductModel = getModelForClass(ProductSchema);

export default mongoose.model("Product", ProductModel);
