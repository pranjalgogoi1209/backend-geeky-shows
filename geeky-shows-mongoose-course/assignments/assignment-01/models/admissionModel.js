import mongoose from "mongoose";

// defining schema
const admissionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 3, max: 18 },
  previousClass: { type: String, required: true, trim: true },
  previousClassScore: { type: Number, required: true, min: 0, max: 600 },
});

// compiling schema
const admissionModel = mongoose.model("admission", admissionSchema);

const createAdmissionDoc = async (data) => {
  try {
    const admission = new admissionModel({
      name: data.name,
      age: data.age,
      previousClass: data.previousClass,
      previousClassScore: data.previousClassScore,
    });

    const result = await admission.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export default createAdmissionDoc;
