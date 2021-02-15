const express = require("express");
const productsRouter = express.Router();
const catRouter = express.Router();

const { Category } = require("../database/models");

productRouter.use("/", (req, response) => {
  const category = new Category({
    displayName: "new cat",
  });
  category.save();
  response.send(category.displayName);
});

catRouter.use("/", (req, response) => {
  response.send("data for cat");
});

module.exports = {
  productsRouter,
  catRouter,
};
