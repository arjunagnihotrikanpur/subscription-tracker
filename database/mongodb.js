import mongoose, { mongo } from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define the MONGODB_URI enviornment variable inside .env<development/production>.local"
  );
}

const connectToDatabase = async () => {
  await mongoose.connect(DB_URI);

  console.log(`Connected to database in ${NODE_ENV} mode`);
  try {
  } catch (error) {
    console.error("Error connection to database: ", error);
    process.exit(1);
  }
};

export default connectToDatabase;
