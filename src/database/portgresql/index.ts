import { createConnection } from "typeorm";
import "reflect-metadata";
import { Category } from "./models/category";
import { Products } from "./models/product";

export const init = async (connectionString: string) => {
  const connection = await createConnection({
    type: "postgres",
    url: connectionString,
    entities: [Category, Products],
  });
  const categoryGetById = async (id: string) =>
    await connection.getRepository("categories").findOne(id);
  const addCategory = async (data: Omit<Category, "id">) => {
    const category = new Category();
    Object.assign(category, data);

    await connection.manager.save(category);

    return category.id;
  };

  const productGetById = async (id: string) =>
    await connection.getRepository("product").findOne(id);
  const addProduct = async (data: Omit<Products, "id">) => {
    const product = new Products();
    Object.assign(product, data);

    await connection.manager.save(product);

    return product.id;
  };

  return {
    category: {
      getById: categoryGetById,
      add: addCategory,
    },
    product: {
      getById: productGetById,
      add: addProduct,
    },
  };
};
