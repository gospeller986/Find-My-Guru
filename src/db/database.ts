import mongoose from "mongoose";

// Track the connection
let isConnected = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("DB connected already");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL || "", {
      dbName: "FINDMYGURU", // Specify the database name
    });
    isConnected = true;
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};