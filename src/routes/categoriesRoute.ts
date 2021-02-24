import express from "express";
const categoriesRouter = express.Router();

categoriesRouter.use("/", (_, response) => {
  response.send("Some data for categories");
});

export { categoriesRouter };
