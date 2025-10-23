import jwt from 'jsonwebtoken';


export const generateToken = ({email}) => {
  console.log(email)
  const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: 24 * 60 * 60 * 1000})
  return token
}
