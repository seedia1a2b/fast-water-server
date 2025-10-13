import express from 'express'
import { addNewAdmin, adminLogin } from '../controllers/adminController.js'
import authAdmin from '../middlewares/adminAuth.js';
import upload from '../config/multer.js';

const adminRouter = express.Router()


adminRouter.post('/login', adminLogin);

adminRouter.post('/create-new-admin', authAdmin , addNewAdmin);

adminRouter.post('/create-blog', upload.single('image'), )

export default adminRouter;

