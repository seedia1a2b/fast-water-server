import express from 'express';

const blogRouter = express.Router();



blogRouter.post('/create-blog', upload.single('image'),authAdmin, addBlog);

blogRouter.get('/Blogs', getAllBlog);

blogRouter.get('/blog', getBlog);

export default blogRouter;