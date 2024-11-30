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

// update document
const updateDocById = async (id) => {
  try {
    const result = await teacherModel.findByIdAndUpdate(
      id,
      {
        name: "Rizwan Ahmed",
        comments: [{ value: "toofani", publish: new Date() }],
      },
      { returnDocument: "after" }
    );

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// update one document
const updateOneDoc = async (id) => {
  try {
    const result = await teacherModel.updateOne(
      { _id: id },
      { name: "New One" },
      { upsert: true }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// update many document
const updateManyDoc = async () => {
  try {
    const result = await teacherModel.updateMany({ age: 23 }, { age: 24 });

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

export { updateDocById, updateOneDoc, updateManyDoc };
