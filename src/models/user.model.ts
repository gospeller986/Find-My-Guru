import mongoose, { Document, Model, Schema } from "mongoose";

// Define the User interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role?: "student" | "tutor"; // Optional during signup
  country?: string; // Optional during signup
  state?: string; // Optional during signup
  city?: string; // Optional during signup
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the User schema
const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "tutor"] }, // Optional
    country: { type: String }, // Optional
    state: { type: String }, // Optional
    city: { type: String }, // Optional
  },
  { timestamps: true }
);

// Define the User model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;