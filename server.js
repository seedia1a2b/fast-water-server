import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/connectDB.js';
import adminRouter from './routes/AdminRoute.js';
import connectCloudinary from './config/cloudinary.js';
import blogRouter from './routes/blogRoutes.js';
import commentRouter from './routes/commentRoutes.js';

const app = express()


//configuring the config files
await connectDb();
await connectCloudinary();


const PORT = process.env.PORT || 4000

//middlwares
app.use(express.json())
app.use(cors({origin:'*', credentials:true}))

//routes 
app.get('/', (req, res)=> {
  res.send("Api working....")
})

//all api routes
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/blog', blogRouter);
app.use('/api/v1/comment', commentRouter);


app.listen(PORT, ()=> {
  console.log(`App working on http://localhost:${PORT}`)
})


export default app;