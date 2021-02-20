import { Category } from "../../database/models";
import { Product } from "./productsInterfaces";

const addProduct = (name: String): Product => {
  const category = new Category({
    displayName: "displayName",
  });
  category.save();

  const latestProduct: Product = {
    name: category,
  };

  return latestProduct;
};

export { addProduct };
