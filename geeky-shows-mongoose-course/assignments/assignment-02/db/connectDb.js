import mongoose from "mongoose";

const connectDb = async (DB_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "crud",
    };
    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log(e);
  }
};

export default connectDb;
