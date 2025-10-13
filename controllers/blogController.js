import {v2 as cloudinary} from 'cloudinary';
import Blog from '../models/blog';


export const addBlog = async (req, res) => {
  try {
    
    const {title, subTitle, description, isPublished, category} = JSON.parse(req.body.blog);

    const imageFile = req.file;


    if(!title || !subTitle || description || isPublished || category){
      return res.json({success: false, message: "Missing required fields"})
    }

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const blog = new Blob({
      title,
      subTitle,
      description,
      isPublished,
      category,
      image: imageUpload
    })

    await blog.save()

    res.json({success:true, message:'Blog uploaded successfully!!'});

  } catch (error) {
    res.json({success:false, message:error.message})
  }
} 


const getAllBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({});

    if(blogs.length < 1){
      res.json({success:false, message:"No blogs found upload to view blogs"})
    }
    res.json({success:true, data: blogs})
  } catch (error) {
    res.json({success:false, message:error.message})
  }
}