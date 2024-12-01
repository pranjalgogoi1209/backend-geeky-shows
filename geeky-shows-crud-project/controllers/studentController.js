import StudentModel from "../models/StudentModel.js";

class StudentController {
  // edit page controller
  static async editController(req, res) {
    try {
      const { id } = req.params;

      const result = await StudentModel.findById(id);

      res.render("edit", { result: result });
    } catch (err) {
      console.log(err);
    }
  }

  // find all doc (its a page controller and also an api to find all students data)
  static async findAllDoc(req, res) {
    try {
      console.log("document is found successfully");
      const result = await StudentModel.find();
      res.render("index", { data: result });
    } catch (err) {
      console.log(err);
    }
  }

  // crud apis

  // createDoc
  static async createDoc(req, res) {
    try {
      console.log("document created successfully");

      const { name, age, fees } = req.body;
      const newStudentDoc = new StudentModel({
        name: name,
        age: age,
        fees: fees,
      });

      const result = await newStudentDoc.save();
      console.log(result);
      res.redirect("/student/all-students");
    } catch (err) {
      console.log(err);
    }
  }

  // update doc by Id
  static async updateDocById(req, res) {
    try {
      console.log("document is updated successfully");
      const { name, age, fees } = req.body;
      const { id } = req.params;
      console.log(name, age, fees, id);

      const result = await StudentModel.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          name: name,
          age: age,
          fees: fees,
        },
        { returnDocument: "after" }
      );
      console.log(result);
      res.redirect("/student/all-students");
    } catch (err) {
      console.log(err);
    }
  }

  // delete doc by Id
  static async deleteDocById(req, res) {
    try {
      console.log("document is deleted successfully");

      const { id } = req.params;
      const result = await StudentModel.findByIdAndDelete({
        _id: id,
      });
      console.log(result);
      res.redirect("/student/all-students");
    } catch (err) {
      console.log(err);
    }
  }
}

// const studentController = new StudentController();

export default StudentController;
