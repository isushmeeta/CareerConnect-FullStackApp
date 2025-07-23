import express from 'express';
import jobroutes from "./routes/jobroutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001
 
connectDB();
app.use("/api/jobs", jobroutes);


http://localhost:5001/api/jobs/21
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

