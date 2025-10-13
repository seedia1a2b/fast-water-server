import jwt from 'jsonwebtoken';


export const generateToken = ({email}) => {
  console.log(email)
  const token = jwt.sign({email}, process.env.JWT_SECRET)
  return token
}
