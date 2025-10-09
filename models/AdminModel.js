import mongoose from "mongoose"

const AdminShcema = new mongoose.Schema({
  email: {type: String, required:true, unique:true},
  password:{type: String, required:true},
  isSuperAdmin:{type: Boolean, default:false}
}) 

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminShcema);

export default Admin;