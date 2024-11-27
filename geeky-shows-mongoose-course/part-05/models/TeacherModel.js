import mongoose from "mongoose";

// defining schema
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  salary: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v <= 50000,
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: {
    value: { type: String },
    publish: { type: Date, default: Date.now },
  },
  join: { type: Date, default: Date.now },
});

// compiling schema
const teacherModel = mongoose.model("teacher", teacherSchema);

// Retrieve all document
const getAllDoc = async () => {
  const result = await teacherModel.find();
  result.forEach((item) => {
    /*  console.log(
      item.name,
      item.age,
      item.salary.toString(),
      item.hobbies[0],
      item.hobbies[1],
      item.isActive,
      item.join,
      item.comments.value
    ); */
  });
};

// retrieve all document with specific field
const getAllDocSpecificField = async () => {
  // include => we want to include specific fields only

  // const result = await teacherModel.find().select("name age comments");

  //or

  // const result = await teacherModel.find().select(["name", "age", "commnets"]);

  //or

  /* const result = await teacherModel.find().select({
    name: 1,
    age: 1,
  }); */

  //or

  // that empty object is filter object
  const result = await teacherModel.find({}, "name age comments");

  // exclude => we want to exclude specific fields only

  // const result = await teacherModel.find().select("-name -age -comments");

  //or

  /* const result = await teacherModel
    .find()
    .select(["-name", "-age", "-comments"]); */

  // or

  /*  const result = await teacherModel.find().select({
    name: 0,
    age: 0,
    comments: 0,
  }); */
  console.log(result);
};

export { getAllDoc, getAllDocSpecificField };
