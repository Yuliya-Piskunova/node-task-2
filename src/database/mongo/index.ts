import { Connection, Mongoose } from "mongoose";

const mongoose: Mongoose = require("mongoose");

export const init = (connectionString: string) => {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db: Connection = mongoose.connection;

  db.on("connected", () => {
    console.log("The DB was successfully connected");
  });

  db.on("disconnected", () => {
    console.log("The DB was disconnected");
  });

  db.on("error", (err) => {
    console.log(`Error during DB connection attempts: ${err}`);
  });

  process.on("SIGINT", () => {
    db.close(() => {
      console.log("The DB connection was closed due to process termination");
      process.exit(0);
    });
  });
};
