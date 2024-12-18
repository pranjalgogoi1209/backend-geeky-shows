import express from "express";
import StudentController from "../controllers/studentController.js";

const router = express.Router();

router.get("/get-session", StudentController.get_session_info);

router.get("/delete-session", StudentController.delete_session);

router.get("/regenerate-session", StudentController.regenerate_session);

router.get("/session-example", StudentController.session_example);

router.get("/get-session-data", StudentController.get_session_data);

export default router;
