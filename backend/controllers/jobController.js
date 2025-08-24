// controllers/jobController.js
const Job = require("../models/Job");

// Create a job
exports.createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ error: "Failed to post job", details: err.message });
  }
};

// Get all jobs with optional search
exports.getJobs = async (req, res) => {
  try {
    const { title, city } = req.query;
    let filter = {};
    if (title) filter.title = { $regex: title, $options: "i" };
    if (city) filter.city = { $regex: city, $options: "i" };

    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch jobs", details: err.message });
  }
};

// Get a single job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch job", details: err.message });
  }
};

// Update a job by ID
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: "Failed to update job", details: err.message });
  }
};

// Delete a job by ID
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete job", details: err.message });
  }
};

