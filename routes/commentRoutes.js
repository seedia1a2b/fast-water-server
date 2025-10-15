import express from 'express';
import { addComment, deleteComment, editComment, toggleComment } from '../controllers/commentController.js';
import authAdmin from '../middlewares/adminAuth.js';


const commentRouter = express.Router();


commentRouter.post('/add-comment', addComment);

commentRouter.post('/delete-comment', authAdmin, deleteComment);

commentRouter.post('/toggle-approve',authAdmin, toggleComment);

commentRouter.post('/edit-comment',authAdmin, editComment);

export default commentRouter;

