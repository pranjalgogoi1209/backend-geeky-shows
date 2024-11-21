import express from "express";
import { allStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/all/:id([0-9]{3})", allStudent);

export default router;
