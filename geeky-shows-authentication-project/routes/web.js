import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router.get("/", UserController.home);

router.get("/login", UserController.login);

router.get("/registration", UserController.registration);

// create user doc
router.post("/create-user", UserController.createUserDoc);

export default router;
