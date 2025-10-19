import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
  try {
    const token = req.headers['token'];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    console.log(error)
    res.json({success:false, message: error.message})
  }
}

export default authAdmin;