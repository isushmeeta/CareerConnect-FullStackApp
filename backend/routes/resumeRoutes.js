//resumeRoutes.js 
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const pdfParse = require("pdf-parse");
const Resume = require("../models/Resume");  

const router = express.Router();


const conn = mongoose.connection;

let gfsBucket;
conn.once("open", () => {
  gfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "resumes",
  });
});

// Multer storage for GridFS
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => ({
    filename: file.originalname,
    bucketName: "resumes",
  }),
});
const upload = multer({ storage });

// Upload + parse resume
router.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ msg: "No file uploaded" });

    // Read the file from GridFSBucket
    const downloadStream = gfsBucket.openDownloadStreamByName(req.file.filename);

    let chunks = [];
    downloadStream.on("data", (chunk) => chunks.push(chunk));
    downloadStream.on("error", (err) =>
      res.status(500).json({ msg: "Stream error", error: err })
    );

    downloadStream.on("end", async () => {
      const buffer = Buffer.concat(chunks);
      try {
        const parsedData = await pdfParse(buffer);

        // 👉 Save parsed resume into MongoDB collection
        const savedResume = new Resume({
          filename: req.file.filename,
          text: parsedData.text,
        });
        await savedResume.save();

        // Send response
        res.json({
          msg: "File uploaded & parsed successfully",
          text: parsedData.text,
          resumeId: savedResume._id, 
        });
      } catch (err) {
        res.status(500).json({ msg: "PDF parse error", error: err });
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err });
  }
});

module.exports = router;
