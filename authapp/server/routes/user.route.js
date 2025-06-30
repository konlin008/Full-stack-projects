import express from "express";
import authenticate from "../middlewares/auth.middleware.js";
import { getUserName } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authenticate, getUserName);

export default router;
