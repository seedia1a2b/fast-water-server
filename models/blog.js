import mongoose from "mongoose";  

const blogSchema = new mongoose.Schema({
  title: {type: String, requred:true},
  subTitle: {type: String},
  description: {type: String, requred:true},
  category: {type: String, requred:true},
  image: {type: String, requred:true},
  isPublished: {type: Boolean, default:false},
},{timestamps: true})


const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);


export default Blog;