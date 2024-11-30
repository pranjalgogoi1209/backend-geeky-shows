import newStudentModel from "../models/NewStudentModel.js";

const addNewStudentController = async (req, res) => {
  console.log(req.body);

  const { name, age, fees } = req.body;
  try {
    const newStudentDoc = new newStudentModel({
      name: name,
      age: age,
      fees: fees,
    });

    const result = await newStudentDoc.save();
    console.log(result);
    res
      .status(200)
      .json({
        message: "New student added successfully",
        statusMessage: "success",
      });
  } catch (err) {
    console.log(err);
    res
      .status(401)
      .json({ message: "Internal server error", statusMessage: "error" });
  }
};

export default addNewStudentController;
