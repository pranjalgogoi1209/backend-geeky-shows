import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      user: "pranjalgogoi",
      pass: "12345",
      dbName: "schooldb",
      authSource: "schooldb", // which db creates users
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected to schooldb");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
