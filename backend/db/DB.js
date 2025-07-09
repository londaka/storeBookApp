import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const dataBase = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dataBase);
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
