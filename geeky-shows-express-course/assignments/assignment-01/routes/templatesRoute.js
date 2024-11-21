import express from "express";
import { templatesController } from "../controllers/templatesController.js";

const router = express.Router();

router.get("/templates", templatesController);

export default router;
