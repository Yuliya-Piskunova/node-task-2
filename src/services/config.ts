import { config } from "dotenv";

const parsed = config().parsed;

if (!parsed) {
  throw new Error("Can't parse config");
}

type KnownConfig = {
  DB: string;
  MONGO_DB_PASSWORD: string;
  MONGO_DB_DB_NAME: string;
  PORT: string;
};

export const getConfig = (): Partial<KnownConfig> => parsed;
