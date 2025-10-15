import mongoose from "mongoose";
import Admin from "../models/AdminModel.js";
import bcrypt from 'bcryptjs'
import { generateToken } from "../utiles.js";
import Blog from '../models/blog.js'
import Comment from "../models/comment.js";

export const adminLogin =  async (req, res) => {
  try {
    const {email, password} = req.body;

    if(!email || !password){
      return res.json({success: false, message:'Missing details, email and password required!'})
    }
    const admin = await Admin.findOne({email});

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      console.log('entered')
      if(!admin){

        const hashedPassword = await bcrypt.hash(password,10)

        const admin = new Admin({
          email,
          password:hashedPassword
        })

        await admin.save()
        const token = generateToken(admin.email);
        res.json({success:true, token})
      }else {
        const token = generateToken(email)
        return res.json({success:true, token})
      }
    }else {
      return res.json({success:false, message:'Admin not found'})
    }

  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}



export const addNewAdmin = async (req, res) => {

  try {

    const {email, password} = req.body;

    if(!email || !password){
      res.json({success:false, message:'Emial and password required!!'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      email,
      password: hashedPassword
    })

    await admin.save();

    res.json({success:true, message: `Admin ${email} created successfully!`})
    
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message});
  }
}


export const getAllBlogsAdmins = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({createdAt: -1});

    if(blogs.length < 1){
      return res.json({success:false, message: "No Blogs found"})
    }
    res.json({success:true, data:blogs});
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}

export const getAllCommentsAdmins = async (req, res) => {
  try {
    const comments = await Comment.find({}).populate('Blog').sort({createdAt: -1});

    if(!comments){
      return res.json({success:false, message:'No comments found'})
    }
    res.json({success:true, data: comments})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}