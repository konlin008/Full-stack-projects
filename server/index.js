import express from "express";
import noteRoute from "./routes/noteRoute.js";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("MongoDb connected Successfully");
});

app.use("/api/notes", noteRoute);

app.listen(port, () => {
  console.log("Listing on Port 8080");
});
