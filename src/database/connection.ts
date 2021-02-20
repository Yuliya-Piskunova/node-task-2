import { Connection, Mongoose } from "mongoose";

const mongoose: Mongoose = require("mongoose");
const db: Connection = mongoose.connection;

const PASS = require("dotenv").config().parsed.MONGO_DB_PASSWORD;
const NAME = require("dotenv").config().parsed.MONGO_DB_DB_NAME;
const USERNAME = require("dotenv").config().parsed.MONGO_DB_USERNAME;

mongoose.connect(
  `mongodb+srv://${USERNAME}:${PASS}@cluster0.l1zle.mongodb.net/${NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

db.on("connected", () => {
  console.log("db was successfully connected");
});
db.on("disconnected", () => {
  console.log("db was disconnected");
});
db.on("error", (err) => {
  console.log(`Error: ${err}`);
});
process.on("SIGIN", () => {
  db.close(() => {
    console.log("db connection was closed due to process termination");
    process.exit(0);
  });
});

export default db;
