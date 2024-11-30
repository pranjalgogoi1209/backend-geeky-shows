import newStudentModel from "./../models/NewStudentModel.js";

const deleteNewStudentController = async (req, res) => {
  try {
    const { id } = req.body;

    const result = await newStudentModel.findByIdAndDelete(id);

    console.log(result);

    res.status(200).json({
      message: "student is deleted successfully",
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

export default deleteNewStudentController;
