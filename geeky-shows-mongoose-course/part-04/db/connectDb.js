import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DATABASE_OPTIONS = {
      dbName: "schooldb",
    };

    await mongoose.connect(DATABASE_URL, DATABASE_OPTIONS);
    console.log(`MongoDB Connected at schooldb`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
