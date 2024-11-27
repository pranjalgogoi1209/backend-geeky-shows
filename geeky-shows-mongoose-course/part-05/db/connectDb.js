import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  const DATABASE_OPTIONS = {
    dbName: "schooldb",
  };

  try {
    await mongoose.connect(DATABASE_URL, DATABASE_OPTIONS);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
