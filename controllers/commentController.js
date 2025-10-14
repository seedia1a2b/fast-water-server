import Comment from "../models/comment.js"

export const addComment = async (req, res) => {
  try {
    const {blog, name, content} = req.body

    if(!blog || !name || !content){
      return res.json({success:false, message: 'Missing details'})
    }

    const comment = new Comment({
      blog,
      name, 
      content
    })

    await comment.save();

    res.json({success:true, message: 'Comment sent for approval!'});
  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
  }
}