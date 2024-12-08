import employeeModel from "../models/EmployeeModel.js";

class EmployeeController {
  // create employee api
  static async createEmployee(req, res) {
    try {
      const { name, age, salary } = req.body;
      console.log(name, age, salary);

      const newEmployee = await employeeModel.create({
        name: name,
        age: age,
        salary: salary,
      });

      const result = await newEmployee.save();

      res.status(200).json({
        message: "Employee created successfully",
        statusMessage: "success",
        data: result,
      });
    } catch (err) {
      //   console.log(err);
      res
        .status(401)
        .json({ message: "Internal server error", statusMessage: "error" });
    }
  }

  // get all employees api
  static async getAllEmployees(req, res) {
    try {
      const result = await employeeModel.find();
      res.status(200).json({
        message: "All employees fetched successfully",
        statusMessage: "success",
        data: result,
      });
    } catch (err) {
      //   console.log(err);
      res.status(401).json({
        message: "Internal server error",
        statusMessage: "error",
      });
    }
  }

  // update employee api
  static async updateEmployee(req, res) {
    try {
      const { id, name, age, salary } = req.body;
      const result = await employeeModel.findByIdAndUpdate(
        { _id: id },
        { name: name, age: age, salary: salary },
        { returnDocument: "after" }
      );
      res.status(200).json({
        message: "Employee updated successfully",
        statusMessage: "success",
        data: result,
      });
    } catch (err) {
      //   console.log(err);
      res.status(401).json({
        message: "Internal server error",
        statusMessage: "error",
      });
    }
  }

  // delete employee api
  static async deleteEmployee(req, res) {
    try {
      const { id } = req.body;
      const result = await employeeModel.findByIdAndDelete({ _id: id });
      res.status(204).json({
        message: "Employee deleted successfully",
        statusMessage: "success",
        data: result,
      });
    } catch (err) {
      //   console.log(err);
      res
        .status(401)
        .json({ message: "Internal server error", statusMessage: "error" });
    }
  }
}

export default EmployeeController;
