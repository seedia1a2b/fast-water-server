import mongoose from "mongoose"

const AdminShcema = new mongoose.Schema({
  adminEmail: {type: String, required:true, unique:true},
  adminPassword:{type: String, required:true},
  isSuperAdmin:{type: Boolean, default:false}
}) 

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminShcema);

export default Admin;