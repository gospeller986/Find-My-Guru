import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TutorProfile interface
export interface ITutorProfile extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  name : string ;
  email : string ;
  country?: string; // Optional during signup
  state?: string; // Optional during signup
  city?: string; // Optional during signup
  subjects: string[];
  experience?: number; // Optional in years
  availability?: string; // Optional, e.g., "Weekends", "Evenings"
  hourlyRate?: number; // Optional
  averageRating ?: number ;
  totalReviews ?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the TutorProfile schema
const tutorProfileSchema: Schema<ITutorProfile> = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    subjects: [{ type: String, required: true }],
    name : { type : String , required : true },
    email : { type : String, required: true} ,
    country: { type: String }, // Optional
    state: { type: String }, // Optional
    city: { type: String }, // Optional
    experience: { type: Number }, // Optional
    availability: { type: String }, // Optional
    hourlyRate: { type: Number }, // Optional
    averageRating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Define the TutorProfile model
const TutorProfile: Model<ITutorProfile> =
  mongoose.models.TutorProfile ||
  mongoose.model<ITutorProfile>("TutorProfile", tutorProfileSchema);

export default TutorProfile;
