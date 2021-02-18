const mongoose = require("mongoose");

const Category = new mongoose.Schema(
  {
    displayName: String,
  },
  {
    collection: "categories",
  }
);

const Products = new mongoose.Schema(
  {
    categoryIds: [mongoose.Schema.Types.ObjectId],
    createdAt: Date,
    displayName: String,
    totalRating: Number,
    price: Number,
  },
  {
    collection: "products",
  }
);

module.exports = {
  Category,
  Products,
};
