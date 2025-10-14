import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
  blog:{type: mongoose.Schema.Types.ObjectId, ref: 'Blog', requred:true},
  name:{type:String, requred: true},
  content:{type:String, requred: true},
  isApproved:{type:Boolean, default: false}
},{timestamps: true})

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;