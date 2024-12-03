import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router();

router.get("/", StudentController.get_session_info);

export default router;
