import express from 'express';
import jobroutes from "./routes/jobroutes.js"

const app = express();
const PORT = 5001;

app.use("/api/jobs", jobroutes);


http://localhost:5001/api/notes/21
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
