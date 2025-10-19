import Comment from "../models/comment.js"

export const addComment = async (req, res) => {
  try {
    const {blog, name, content} = req.body;

    if(!blog || !name || !content){
      return res.json({success:false, message: 'Missing details'});
    }

    const comment = new Comment({
      blog,
      name, 
      content
    });

    await comment.save();

    console.log(comment);
    res.json({success:true, message: 'Comment sent for approval!'});
  } catch (error) {
    console.log(error);
    res.json({success:false, message:error.message});
  }
}

export const deleteComment = async (req, res) => {
  try {

    const {id} = req.body;

    if(!id){
      res.json({success:false, message:'Id not found'})
    }

    const comment = await Comment.findById(id)

    if(!comment){
      res.json({success:false, message:'Comment not found'})
    }

    await Comment.findByIdAndDelete(id);

    res.json({success: true, message:'Comment deleted successfully'})
    
  } catch (error) {
    console.log(error)
    res.json({success:false, message: error.message})
  }
}

export const toggleComment = async (req, res) => {
  try {

    const {id} = req.body;

    const comment = await Comment.findById(id);
    if(!comment){
      return res.json({success:false, message:'Comment not found!'});
    }
    comment.isApproved = !comment.isApproved;
    await comment.save();
    return res.json({success:true, message:`${comment.isApproved ? 'Comment approved' : 'Comment Unapproved'}`});
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}

export const editComment = async (req, res) => {
  try {
    const {id, content} = req.body;

    if(!id){
      return res.json({success:false, message:'Id not found'})
    }
    const comment = await Comment.findByIdAndUpdate(id,
      {content: content},
      {new:true, runValidators:true}
    )
    
  } catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})
  }
}

