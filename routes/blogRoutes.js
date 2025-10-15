import express from 'express';
import authAdmin from '../middlewares/adminAuth.js';
import { addBlog, deleteBlog, editBlogDescription, getAllBlog, getBlog, toggleBlog } from '../controllers/blogController.js';
import upload from '../config/multer.js';

const blogRouter = express.Router();



blogRouter.post('/create-blog', upload.single('image'),authAdmin, addBlog);

blogRouter.get('/blogs', getAllBlog);

blogRouter.get('/:blogId', getBlog);

blogRouter.post('/delete', authAdmin, deleteBlog);

blogRouter.post('/toggle-publish', authAdmin, toggleBlog);

blogRouter.post('/edit-description', authAdmin, editBlogDescription);

export default blogRouter;