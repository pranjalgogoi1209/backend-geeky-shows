import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
