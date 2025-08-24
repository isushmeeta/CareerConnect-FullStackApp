// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const jobRoutes = require("./routes/jobroutes");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// DB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/jobs", jobRoutes); // Jobs route
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes); 


app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
