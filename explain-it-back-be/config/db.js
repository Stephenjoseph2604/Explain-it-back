import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Recommended options for production
      autoIndex: false,          // Disable auto index creation
      maxPoolSize: 10,           // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
      socketTimeoutMS: 45000,    // Close sockets after 45s of inactivity
    });

    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection failed");
    console.error(error.message);

    // Exit process with failure
    process.exit(1);
  }
};
