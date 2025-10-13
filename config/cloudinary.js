// In your application's configuration file (e.g., config.js or app.js)
import { v2 as cloudinary } from 'cloudinary';


const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true // Ensures URLs are always generated as HTTPS
  });
}


export default connectCloudinary;