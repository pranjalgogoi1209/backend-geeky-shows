import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "auth",
    };

    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
