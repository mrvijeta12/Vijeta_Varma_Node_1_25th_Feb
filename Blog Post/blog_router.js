import mongoose from "mongoose";
import express from "express";
import Blog from "./blog_model.js";

const blogRouter = express.Router();

blogRouter.post("/posts",async(req,res)=>{
    const{title,content} = req.body;
    if(!title || !content){
        return res.json({error:"Please fill all fields"})
    }
    try {
        const newPost = new Blog({title,content})
        const resp = await newPost.save();
        res.json({message:"Blog is posted successfully",resp});
    } catch (error) {
        res.json({error:"Some error occur"})
    }
})

export default blogRouter;