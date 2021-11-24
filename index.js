import express from "express";
import apiRoutes from "./routes/index.js";

const app = express();
const port = "3001";

app.use(apiRoutes);

  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });