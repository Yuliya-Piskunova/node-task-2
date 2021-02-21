import "reflect-metadata";
import express from "express";
import router from "./routes";
import { getConfig } from "./services/config";

import "./database";

const app = express();
const PORT = Number(getConfig().DB) || 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`The server has been launched at port: ${PORT}`);
});
