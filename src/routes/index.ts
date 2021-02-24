import express from "express";
import { productRouter } from "./productsRoute";
import { categoriesRouter } from "./categoriesRoute";

const router = express.Router();

router.use("/products", productRouter);
router.use("/categories", categoriesRouter);

export default router;
