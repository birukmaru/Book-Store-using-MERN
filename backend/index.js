import express from "express";
const app = require("./app");
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
const port = 5000;

// Middleware for parsing request body

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);
app.listen(port, () => {
  console.log(`Server Listening on port http://localhost:${port}`);
});
