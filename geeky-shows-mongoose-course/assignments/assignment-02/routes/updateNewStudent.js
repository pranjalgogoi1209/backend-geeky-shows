import express from "express";
import updateNewStudentController from "../controllers/updateNewStudentController.js";

const router = express.Router();

router.patch("/update-new-student", updateNewStudentController);

export default router;
