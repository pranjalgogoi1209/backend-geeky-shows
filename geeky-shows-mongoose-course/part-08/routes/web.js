import express from "express";
import EmployeeController from "../controllers/employeeController.js";

const router = express.Router();

router.post("/create", EmployeeController.createEmployee);
router.get("/all", EmployeeController.getAllEmployees);
router.patch("/update", EmployeeController.updateEmployee);
router.delete("/delete", EmployeeController.deleteEmployee);

export default router;
