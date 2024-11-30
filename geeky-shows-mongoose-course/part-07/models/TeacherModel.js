import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  salary: { type: mongoose.Decimal128, required: true },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

const teacherModel = mongoose.model("teacher", teacherSchema);

// delete document
const deleteDocById = async (id) => {
  try {
    const result = await teacherModel.findByIdAndDelete(id);

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// delete one doc
const deleteOneDoc = async (id) => {
  try {
    const result = await teacherModel.deleteOne({ _id: id });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const delelteManyDoc = async () => {
  try {
    const result = await teacherModel.deleteMany({ name: "Pranjal Gogoi" });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export { deleteDocById, deleteOneDoc, delelteManyDoc };
