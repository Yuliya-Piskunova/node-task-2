import express, { Response } from "express";
import { Request } from "express/lib/request";

const catRouter = express.Router();

catRouter.use("/", (request: Request, response: Response) => {
  response.send("data for cat");
});

export default catRouter;
