import express from "express";

import StudentController from "../controllers/studentController.js";

const router = express.Router();

router.get("/get-cookie", StudentController.get_cookie);
router.get("/set-cookie", StudentController.set_cookie);
router.get("/delete-cookie", StudentController.delete_cookie);

export default router;
