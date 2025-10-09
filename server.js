import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/connectDB.js';

const app = express()

await connectDb()


const PORT = process.env.PORT || 4000

//middlwares
app.use(express.json())
app.use(cors({origin:'*', credentials:true}))

//routes 
app.get('/', (req, res)=> {
  res.send("Api working....")
})


app.listen(PORT, ()=> {
  console.log(`App working on http://localhost:${PORT}`)
})


export default app;