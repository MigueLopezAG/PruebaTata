//imports
import express from "express";
import apiRoutes from "./routes/index.js";

//Define the port of our server and import the routes, also we print a message if the server is running
const app = express();

const port = "3001";


app.use(express.json());

app.use(apiRoutes);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});