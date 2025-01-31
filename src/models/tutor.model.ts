import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TutorProfile interface
export interface ITutorProfile extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  subjects: string[];
  experience?: number; // Optional in years
  availability?: string; // Optional, e.g., "Weekends", "Evenings"
  hourlyRate?: number; // Optional
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the TutorProfile schema
const tutorProfileSchema: Schema<ITutorProfile> = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    subjects: [{ type: String, required: true }],
    experience: { type: Number }, // Optional
    availability: { type: String }, // Optional
    hourlyRate: { type: Number }, // Optional
  },
  { timestamps: true }
);

// Define the TutorProfile model
const TutorProfile: Model<ITutorProfile> =
  mongoose.models.TutorProfile ||
  mongoose.model<ITutorProfile>("TutorProfile", tutorProfileSchema);

export default TutorProfile;
