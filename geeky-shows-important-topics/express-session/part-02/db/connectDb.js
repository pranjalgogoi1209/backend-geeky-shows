import mongoose from "mongoose";

const connectDb = async (DB_NAME) => {
  try {
    const DB_OPTIONS = {
      dbName: "schooldb",
    };

    await mongoose.connect(DB_NAME, DB_OPTIONS);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
