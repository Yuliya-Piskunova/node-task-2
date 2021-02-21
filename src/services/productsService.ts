import { category, product } from "../database";
import { Product } from "../database/models/product";

const addProduct = async (name: string) => {
  const categoryId = await category.add({
    displayName: "Some useless string for GET request",
  });

  const resultProduct: Omit<Product, "id"> = {
    categoryIds: [categoryId],
    createdAt: new Date(),
    displayName: name,
    price: Math.ceil(Math.random() * 1000000),
    totalRating: 5,
  };

  const productId = await product.add(resultProduct);

  return {
    ...resultProduct,
    id: productId,
  };
};

export { addProduct };
