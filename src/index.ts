import { Express, Server } from "express";
import router from "./routes";

const db = require("./database");
const express: Express = require("express");
const server: Server = express();
const PORT: Number = 5000;

server.use(router);

server.listen(PORT, () => {
  console.log(`The server has been launched at port: ${PORT}`);
});
