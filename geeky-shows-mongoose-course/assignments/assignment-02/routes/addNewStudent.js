import express from "express";
import addNewStudentController from "../controllers/addNewStudentController.js";

const router = express.Router();

router.post("/add-new-student", addNewStudentController);

export default router;
