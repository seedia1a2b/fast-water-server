import {v2 as cloudinary} from 'cloudinary';
import Blog from '../models/blog.js';
import Comment from '../models/comment.js';


export const addBlog = async (req, res) => {
  try {
    
    const {title, subTitle, description, isPublished, category} = JSON.parse(req.body.blog);

    const imageFile = req.file;


    if(!imageFile.path){
      return res.json({success:false, message:'Image must be uploaded'})
    }

    if(!title || !subTitle || !description || !isPublished || !category){
      return res.json({success: false, message: "Missing required fields"})
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const blog = new Blog({
      title,
      subTitle,
      description,
      isPublished,
      category,
      image: imageUpload.secure_url
    })
    await blog.save();

    res.json({success:true, message:'Blog uploaded successfully!!'});

  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message});
  }
} 


export const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({isPublished: true});

    if(blogs.length < 1){
      res.json({success:false, message:"No blogs found upload to view blogs"})
    }
    res.json({success:true, data: blogs})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}


export const getBlog = async (req, res) => {
  try {
    const {blogId} = req.params;

    if(!blogId){
      res.json({success:false, message:'Id for the blog not found'})
    }

    const blog = await Blog.findById(blogId);

    if(!blog){
      return res.json({success:false, message:"Blog not found"})
    }

    res.json({success:true, data:blog})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}



export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.body;

    if(!id){
      return res.json({success:false, message:'Id not found!'})
    }

    const blog = await Blog.findById(id);

    if(!blog){
      return res.json({success:false, message:'blog not found'})
    }

    await Blog.findByIdAndDelete(id)
    res.json({success:true, message:'Blog deleted successfully!!!'})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}

export const toggleBlog = async (req, res) => {
  try {
    const {id} = req.body;

    if(!id){
      return res.json({success:false, message:'Blog id not found'});
    }

    const blog = await Blog.findById(id);
    if(!blog){
      res.json({success:false, message:"Blog not found!"})
    }
    blog.isPublished = !blog.isPublished;

    blog.save()
    res.json({success:true, message:`Blog ${blog.isPublished ? 'published': 'UnPublished'}`})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}

export const editBlogDescription = async (req, res) => {
  try {

    const {id, description} = req.body;

    if(!id || !description){
      return res.json({success:false, message:'Missig id or description'});
    }

    const blog = await Blog.findById(id);

    if(!blog){
      return res.json({success:false, message:'Blog not found'})
    }

    await Blog.findByIdAndUpdate(id, {description:description}, {new:true, runValidators:true});

    return res.json({success:false, message:'Blog description Updated', data:blog});
    
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}

export const getBlogComment = async (req, res) => {
  try {

    const {blogId} = req.body;

    if(!blogId){
      return res.json({success:false, message: 'Blog id missing'})
    }

    const comments = await Comment.find({blog: blogId});

    if(!comments){
      return res.json({success:false, message:'No comments found'})
    }

    res.json({success:true, data:comments});
  } catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})
  }
}



