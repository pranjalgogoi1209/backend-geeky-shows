import express from "express";

import StudentController from "../controllers/studentController.js";

const router = express.Router();

// all students page route and api to find all students data
router.get("/all-students", StudentController.findAllDoc);

router.get("/edit/:id", StudentController.editController);

//apis
router.post("/create-student", StudentController.createDoc);
router.post("/update-student/:id", StudentController.updateDocById);
router.post("/delete/:id", StudentController.deleteDocById);

export default router;
