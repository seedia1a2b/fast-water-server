import express from 'express'
import { addNewAdmin, adminLogin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/adminAuth.js';
import upload from '../config/multer.js';
import { addBlog, getAllBlog, getBlog } from '../controllers/blogController.js';
import Blog from '../models/blog.js';

const adminRouter = express.Router()


adminRouter.post('/login', adminLogin);

adminRouter.post('/create-new-admin', authAdmin , addNewAdmin);

export default adminRouter;

