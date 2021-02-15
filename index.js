const express = require("express");

const server = express();
const port = 5000;

const { productsRouter, catRouter } = require("./routes");

server.use("/products", productsRouter);
server.use("/categories", catRouter);

server.listen(port, () => {
  console.log(`The server has been launched at port: ${port}`);
});
