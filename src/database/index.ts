import { Category } from "./models/category";
import {
  category as mongoCategory,
  products as mongoProducts,
} from "./mongo/models";
import * as mongo from "./mongo";
import * as portgresql from "./portgresql";
import { getConfig } from "../services/config";
import { Product } from "./models/product";

const notImplemented = () => {
  throw new Error("Not implemented");
};

const category: {
  getById: (id: string) => Promise<Category>;
  add: (data: Omit<Category, "id">) => Promise<string>;
} = {
  getById: (id: string) => notImplemented(),
  add: () => notImplemented(),
};

const product: {
  getById: (id: string) => Promise<Product>;
  add: (data: Omit<Product, "id">) => Promise<string>;
} = {
  getById: (id: string) => notImplemented(),
  add: () => notImplemented(),
};

const init = async () => {
  if (getConfig().DB === "mongo") {
    const PASSWORD = getConfig().MONGO_DB_PASSWORD;
    const DBNAME = getConfig().MONGO_DB_DB_NAME;
    mongo.init(
      `mongodb+srv://Yuliya:${PASSWORD}@cluster0.l1zle.mongodb.net/${DBNAME}?retryWrites=true&w=majority`
    );
    Object.assign(category, mongoCategory);
    Object.assign(product, mongoProducts);
  }

  if (getConfig().DB === "postgresql") {
    const conString = "postgres://username:password@ localhost/node_hero";
    const {
      category: postgresqlCategory,
      product: postgresqlProduct,
    } = await portgresql.init(conString);

    Object.assign(category, postgresqlCategory);
    Object.assign(product, postgresqlProduct);
  }
};

init();

export { category, product };
