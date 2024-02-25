import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },

    content:{
        type:String,
        require:true
    },
})

const Blog = mongoose.model("Blog",blogSchema);
export default Blog;