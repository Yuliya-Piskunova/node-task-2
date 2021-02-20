import express from "express";
import { Router } from "express";
import productRouter from "./productRoute";
import catRouter from "./catRoute";

const router: Router = express.Router();

router.use("/products", productRouter);
router.use("/categories", catRouter);

export default router;
