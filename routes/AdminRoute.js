import express from 'express'
import { 
  addNewAdmin, 
  adminLogin, 
  getAllBlogsAdmins, 
  getAllCommentsAdmins,
  getDarshboardData
} from '../controllers/adminController.js'
import authAdmin from '../middlewares/adminAuth.js';

const adminRouter = express.Router()


adminRouter.post('/login', adminLogin);

adminRouter.post('/create-new-admin', authAdmin , addNewAdmin);

adminRouter.get('/blogs', authAdmin, getAllBlogsAdmins);

adminRouter.get('/comments', authAdmin, getAllCommentsAdmins);

adminRouter.get('/darshboardData', authAdmin, getDarshboardData);

export default adminRouter;

