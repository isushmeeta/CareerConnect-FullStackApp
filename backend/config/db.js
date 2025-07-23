import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error not connected successfully", error);
    process.exit(1)//exit with failure
}
};
