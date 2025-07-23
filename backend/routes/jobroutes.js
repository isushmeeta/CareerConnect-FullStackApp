import express from "express"
import {getAlljobs} from "../controllers/jobController.js";
const router = express.Router();

router.get("/",  getAlljobs);
router.post("/",(req,res)=>{
    res.status(201).json({message:"post created successfully"})
 });

router.put("/:id",(req,res)=>{
    res.status(200).json({message:"post updated successfully"})
 });

router.delete("/:id",(req,res)=>{
     res.status(200).json({message:"post deleted successfully"})
});
export default router;


