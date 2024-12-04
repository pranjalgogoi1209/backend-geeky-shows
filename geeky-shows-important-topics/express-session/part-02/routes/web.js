import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router();

router.get("/session-example", StudentController.session_example);

router.get("/get-session-data", StudentController.get_session_data);

export default router;
