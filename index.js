import express from "express";
import path from "path";
import { config } from "dotenv";
config("../.env");

const app = express();
const port = "3001";

app.use(require('./route').default);

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });