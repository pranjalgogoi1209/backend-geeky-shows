import mongoose from "mongoose";

const connectDb = async (DB_URL) => {
  const DB_OPTIONS = {
    dbName: "schooldb",
  };
  try {
    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
