// models/Job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  city: { type: String, required: true },
  salary: { type: String }, // optional
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },

});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
