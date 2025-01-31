import { dbConnect } from "@/db/database";
import TutorProfile from "@/models/tutor.model";
import { NextRequest, NextResponse } from "next/server";

// Connect to the database


/**
 * @desc Create a new Tutor Profile
 * @method POST /api/tutors
 */
export async function POST(req: NextRequest) {
    await dbConnect();
    try {
        const { userId, name, email, country, state, city, subjects, experience, availability, hourlyRate } = await req.json();
        const existingTutor = await TutorProfile.findOne({ userId });
        if (existingTutor) {
            return NextResponse.json({ error: "Tutor profile already exists for this user" }, { status: 400 });
        }

        const tutor = await TutorProfile.create({ userId, name, email, country, state, city, subjects, experience, availability, hourlyRate });

        return NextResponse.json({ message: "Tutor profile created successfully", tutor }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error creating tutor profile" }, { status: 500 });
    }
}

/**
 * @desc Update an existing Tutor Profile
 * @method PUT /api/tutors
 */
export async function PUT(req: NextRequest) {
    await dbConnect();
    try {
        const { tutorProfileId,name, email, country, state, city, subjects, experience, availability, hourlyRate } = await req.json();

        const updatedTutor = await TutorProfile.findByIdAndUpdate(
            tutorProfileId,
            { subjects, experience, availability, hourlyRate , name, email, country, state, city, },
            { new: true, runValidators: true }
        );

        if (!updatedTutor) {
            return NextResponse.json({ error: "Tutor profile not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Tutor profile updated successfully", tutor: updatedTutor }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error updating tutor profile" }, { status: 500 });
    }
}
