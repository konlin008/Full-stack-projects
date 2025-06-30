import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const cnn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${cnn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDb;
