import newStudentModel from "./../models/NewStudentModel.js";

const getAllNewStudentsController = async (req, res) => {
  try {
    let result = await newStudentModel.find().lean();
    result = result.map((item) => ({
      ...item,
      fees: item.fees.toString(),
    }));

    // console.log(result);

    res.status(200).json({
      message: "All students fetched successfully",
      statusMessage: "success",
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      message: "Internal server error",
      statusMessage: "failed",
      data: result,
    });
  }
};

export default getAllNewStudentsController;
