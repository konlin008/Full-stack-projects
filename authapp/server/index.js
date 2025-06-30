import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";

import "dotenv/config";
import connectDb from "./db.js";

const app = express();
const port = 8080;
connectDb();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Server Listning On Port ${port}`);
});
