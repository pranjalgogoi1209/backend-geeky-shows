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

// create single doc
const createDoc = async (nm, ag, sl, hob, isAc, comt, jo) => {
  try {
    // creating new document
    const teacherDoc = new teacherModel({
      name: nm,
      age: ag,
      salary: sl,
      hobbies: hob,
      isActive: isAc,
      comments: comt,
      join: jo,
    });

    // saving document

    // for singleDoc
    const result = await teacherDoc.save();

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// create multi doc
const createMultiDoc = async () => {
  try {
    const studentDoc = new teacherModel({
      name: "pranjal Student",
      age: 25,
      salary: 40000,
      hobbies: ["singing", "coding"],
      isActive: false,
      comments: { value: "fantastinc", publish: new Date() },
      join: new Date(),
    });

    const teacherDoc = new teacherModel({
      name: "Akshay Teacher",
      age: 25,
      salary: 45000,
      hobbies: ["dancing", "coding"],
      isActive: false,
      comments: { value: "awesome", publish: new Date() },
      join: new Date(),
    });

    // saving document
    // for multipleDocs
    const result = await teacherModel.insertMany([teacherDoc, studentDoc]);
  } catch (err) {
    console.log(err);
  }
};

export { createDoc, createMultiDoc };
