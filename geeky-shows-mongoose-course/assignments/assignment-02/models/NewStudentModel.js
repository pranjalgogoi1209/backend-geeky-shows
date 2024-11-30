import mongoose from "mongoose";

const newStudentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 3, max: 60 },
  fees: { type: mongoose.Decimal128, required: true },
});

const newStudentModel = mongoose.model("newstudent", newStudentSchema);

export default newStudentModel;
