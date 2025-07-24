// db.js
const mongoose = require("mongoose");
require("dotenv").config(); // Make sure to load environment variables

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error not connected successfully", error);
    process.exit(1);
  }
};

module.exports = connectDB;

