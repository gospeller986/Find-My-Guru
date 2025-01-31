import mongoose, { Document, Model, Schema } from "mongoose";

// Define the Review interface
export interface IReview extends Document {
  tutorProfileId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the Review schema
const reviewSchema: Schema<IReview> = new mongoose.Schema(
  {
    tutorProfileId: { type: mongoose.Schema.Types.ObjectId, ref: "TutorProfile", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
  },
  { timestamps: true }
);

// Define the Review model
const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;
