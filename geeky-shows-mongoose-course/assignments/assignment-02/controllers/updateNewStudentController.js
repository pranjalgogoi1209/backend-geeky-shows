import newStudentModel from "./../models/NewStudentModel.js";

const updateNewStudentController = async (req, res) => {
  try {
    const { name, age, fees, id } = req.body;

    const result = await newStudentModel.findByIdAndUpdate(
      id,
      { name: name, age: age, fees: fees },
      { returnDocument: "after" }
    );

    console.log(result);

    res.status(200).json({
      message: "New student updated successfully",
      statusMessage: "success",
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      message: "Internal server error",
      statusMessage: "error",
      data: result,
    });
  }
};

export default updateNewStudentController;
