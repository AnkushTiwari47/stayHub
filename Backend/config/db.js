import mongoose from "mongoose";       

const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.mongodbURI);

    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" Database Connection Failed");
    console.error(error);
    process.exit(1);
  }
  
}; 


export default connectDB;