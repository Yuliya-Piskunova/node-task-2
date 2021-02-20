import { prop, getModelForClass } from "@typegoose/typegoose";
import * as mongoose from "mongoose";

class CatSchema {
  @prop()
  public displayName?: string;

  @prop()
  public collection?: string;
}

const CatModel = getModelForClass(CatSchema);

export default mongoose.model("Category", CatModel);
