import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  salary: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000,
  },
});

const employeeModel = mongoose.model("employee", employeeSchema);

export default employeeModel;
