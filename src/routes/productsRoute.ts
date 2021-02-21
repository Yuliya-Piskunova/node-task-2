import express from "express";
import * as productsService from "../services/productsService";
const productRouter = express.Router();

productRouter.use("/", async (request, response) => {
  const product = await productsService.addProduct(request.params["name"]);
  response.send(product.displayName);
});

export { productRouter };
