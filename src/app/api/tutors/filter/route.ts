import { dbConnect } from "@/db/database";
import Review from "@/models/review.model";
import TutorProfile from "@/models/tutor.model";
import { NextRequest, NextResponse } from "next/server";


/**
 * @desc Get tutors based on filters (location, rating, subjects)
 * @method POST /api/tutors/filter
 */
export async function POST(req: NextRequest) {
    await dbConnect();
  try {
    const { city, state, country, minRating, subjects } = await req.json();

    // Fetch all tutors
    let tutors = await TutorProfile.find();

    // Filter tutors based on location from TutorProfile schema
    if (city || state || country) {
      tutors = tutors.filter((tutor) => {
        return (
          (!city || tutor.city === city) &&
          (!state || tutor.state === state) &&
          (!country || tutor.country === country)
        );
      });
    }

    // Filter tutors based on subjects
    if (subjects && subjects.length > 0) {
      tutors = tutors.filter((tutor) => {
        // Check if at least one of the provided subjects matches the tutor's subjects
        return subjects.some((subject : string) => tutor.subjects.includes(subject));
      });
    }

    // Calculate average rating for each tutor
    const tutorsWithRatings = await Promise.all(
      tutors.map(async (tutor) => {
        const reviews = await Review.find({ tutorId: tutor._id });
        const averageRating =
          reviews.length > 0
            ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
            : 0;

        return { ...tutor.toObject(), averageRating };
      })
    );

    // Filter tutors based on minimum rating
    const filteredTutors = tutorsWithRatings.filter(
      (tutor) => tutor.averageRating >= (minRating || 0) // Default rating = 0
    );

    return NextResponse.json({ tutors: filteredTutors }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching tutors" }, { status: 500 });
  }
}
