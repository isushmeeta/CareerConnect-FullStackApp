// import express from "express"
// import {getAlljobs} from "../controllers/jobController.js";
// const router = express.Router();

// router.get("/",  getAlljobs);
// router.post("/",(req,res)=>{
//     res.status(201).json({message:"post created successfully"})
//  });

// router.put("/:id",(req,res)=>{
//     res.status(200).json({message:"post updated successfully"})
//  });

// router.delete("/:id",(req,res)=>{
//      res.status(200).json({message:"post deleted successfully"})
// });
// export default router;


// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

// Create job
router.post("/", createJob);

// Get all jobs (with optional search)
router.get("/", getJobs);

// Get single job by ID
router.get("/:id", getJobById);

// Update job
router.put("/:id", updateJob);

// Delete job
router.delete("/:id", deleteJob);

module.exports = router;






