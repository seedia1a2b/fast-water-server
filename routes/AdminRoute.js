import express from 'express'
import { 
  addNewAdmin, 
  adminLogin, 
  getAdminDetails, 
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

adminRouter.post('/adminData', authAdmin, getAdminDetails)

adminRouter.get('/darshboardData', authAdmin, getDarshboardData);

export default adminRouter;

