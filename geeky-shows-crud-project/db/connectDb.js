import mongoose from "mongoose";

const connectDb = async (DB_URL) => {
  const DB_OPTIONS = {
    dbName: "crud",
  };
  try {
    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
