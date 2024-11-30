import express from "express";
import deleteNewStudentController from "../controllers/deleteNewStudentController.js";

const router = express.Router();

router.delete("/delete-new-student", deleteNewStudentController);

export default router;
