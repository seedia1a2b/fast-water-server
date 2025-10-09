import mongoose from "mongoose";

const connectDb = async () => {

  try {
    mongoose.connection.on('connected', ()=>{
      console.log('Database connected successfully!!')
    })
    mongoose.connection.on('diconnected', ()=> {
      console.log('Database disconnected!!')
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`)
  } catch (error) {
    console.log(error.message)
  }
}

export default connectDb;