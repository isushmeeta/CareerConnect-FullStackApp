import express from 'express';

const app = express();
const PORT = 5001;

app.get('/api/careerconnect', (req, res) => {
  res.status(200).send('Hello from Dhaka!');
}); //api code 

app.post("/api/notes",(req,res)=>{
    res.status(201).json({message:"post created successfully"})
})

app.put("/api/notes:id",(req,res)=>{
    res.status(200).json({message:"post updated successfully"})
})

app.delete("/api/notes:id",(req,res)=>{
    res.status(200).json({message:"post deleted successfully"})
})
http://localhost:5001/api/notes/21
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
