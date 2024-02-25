import express from 'express';
const app = express();
const Port = 5000;


// 1. Database 
import "./config database/database.js"

// 2. Models 
import User from './user credential/user_model.js';
import Blog from './Blog Post/blog_model.js';

// 3.Routes 
import userRouter from './user credential/user_router.js';
import blogRouter from './Blog Post/blog_router.js';


app.use(express.json());
app.use(userRouter)
app.use(blogRouter)


app.listen(Port,()=>{
    console.log(`Server is running at ${Port}`)
})