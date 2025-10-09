import express from 'express'
import { addNewAdmin, adminLogin } from '../controllers/adminController.js'

const adminRouter = express.Router()


adminRouter.post('/login', adminLogin);

adminRouter.post('/created-new-admin', addNewAdmin)


export default adminRouter;

