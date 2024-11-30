import express from "express";
import getAllNewStudentsController from "./../controllers/getAllStudentsController.js";

const router = express.Router();

router.get("/get-all-students", getAllNewStudentsController);

export default router;
