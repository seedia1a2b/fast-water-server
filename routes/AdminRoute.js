import express from 'express'
import { 
  addNewAdmin, 
  adminLogin, 
  getAllBlogsAdmins 
} from '../controllers/adminController.js'
import authAdmin from '../middlewares/adminAuth.js';

const adminRouter = express.Router()


adminRouter.post('/login', adminLogin);

adminRouter.post('/create-new-admin', authAdmin , addNewAdmin);

adminRouter.post('/blogs', authAdmin, getAllBlogsAdmins);

export default adminRouter;

