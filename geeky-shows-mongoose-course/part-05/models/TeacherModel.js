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
  // const result = await teacherModel.find({}, "name age comments");

  // exclude => we want to exclude specific fields only

  const result = await teacherModel.find().select("-name -age -comments");

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

// retrieve single document
const getSingleDoc = async () => {
  const result = await teacherModel.findById("67461d546abacf174741959a");
  // console.log(result);
  console.log(result.age);
  console.log(result._id.getTimestamp());
};

// retrieve single document with specific field

const getSingleDocSpecificField = async () => {
  const result = await teacherModel.findById(
    "67461d546abacf174741959a",
    "name age"
  );
  console.log(result);
};

// retrieve document by field

const getDocByField = async () => {
  /* const result = await teacherModel.find({
    name: "pranjal Student",
  }); */
  const result = await teacherModel.find({
    age: 25,
  });
  // console.log(result);
  console.log(result[0].salary.toString());
};

//  retrieve document by specific field
const getDocBySpecificField = async () => {
  const result = await teacherModel
    .find({
      age: 25,
    })
    .select("name age");

  console.log(result);
};

// retrieve limited doc
const getLimitedDoc = async () => {
  // const result = await teacherModel.find().limit(2);
  /*   const result = await teacherModel
    .find({
      age: 25,
    })
    .select("name age")
    .limit(2); */

  const result = await teacherModel.find({ age: 23 }, "name salary", {
    limit: 1,
  });
  console.log(result[0].name, result[0].salary.toString());
};

// retrieve skip document
const getSkipDoc = async () => {
  // const result = await teacherModel.find().select("name").skip(10);
  const result = await teacherModel.find({}, null, { skip: 10 });
  console.log(result);
};

// count documents

const getDocCount = async () => {
  const result = await teacherModel.find().countDocuments();
  console.log(result);
};

// sort documents
const getSortDoc = async () => {
  // 1 means ascending order
  // -1 means descending order
  const result = await teacherModel.find().sort({ age: 1 });
  console.log(result);
};

const mixDoc = async () => {
  const result = await teacherModel.find(
    { age: 25 },
    { name: 1, age: 1 },
    { limit: 5 },
    { skip: 1 }
  );
  console.log(result);
};

const compDoc = async () => {
  // $eq => equal
  // $gte => greater than
  // $gte => greater than equal
  // $lt => less than
  // $lte => less than equal
  // $ne => not equal
  // $in => something in the array
  // $nin => something not in the array
  /*  const result = await teacherModel.find(
    { age: { $gte: 23 } },
    { name: 1, age: 1 }
  ); */
  /*  const result = await teacherModel.find(
    { age: { $in: [23, 25] } },
    { name: 1, age: 1 }
  ); */
  const result = await teacherModel.find(
    { age: { $nin: [25] } },
    { name: 1, age: 1 }
  );
  console.log(result);
};

// logical query operator

// $and => all conditions should be true
// $or => any one condition should be true
// $nor => any one condition should be false
// $not => opposite
const logDoc = async () => {
  /* const result = await teacherModel.find({
    $or: [{ age: 25 }, { salary: { $gt: 40000 } }],
  }); */

  /*   const result = await teacherModel.find({ age: { $not: { $gt: 23 } } }); */

  const result = await teacherModel.find({
    $nor: [{ age: 25 }, { salary: 49000 }],
  });

  console.log(result);
};

export {
  getAllDoc,
  getAllDocSpecificField,
  getSingleDoc,
  getSingleDocSpecificField,
  getDocByField,
  getDocBySpecificField,
  getLimitedDoc,
  getSkipDoc,
  getDocCount,
  getSortDoc,
  mixDoc,
  compDoc,
  logDoc,
};
