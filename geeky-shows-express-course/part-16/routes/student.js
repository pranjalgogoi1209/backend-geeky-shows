import express from "express";
import { studentController } from "../controllers/studentController.js";
import myLogger from "../middlewares/logger-middleware.js";

const router = express.Router();

// router level middleware
// router.use(myLogger)

// now it will run for only student page and also run for after student  /student/anything
router.use("/student", myLogger);

router.get("/student", studentController);
router.get("/event", (req, res, next) => {
  res.send("Event");
});

export default router;
