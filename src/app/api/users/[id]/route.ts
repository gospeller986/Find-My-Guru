import { dbConnect } from "@/db/database";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    await dbConnect();

    try {
        const userId = (await params).id
        const user = await User.findById(userId).select("-password"); // Exclude password
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch user data ${error}` }, { status: 500 });
    }
}

/**
 * @desc Update user information
 * @method PUT /api/user/update
 */
export async function PUT(req: NextRequest) {
    await dbConnect();
    try {
        const { userId, name, email, country, state, city, role } = await req.json();
        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { name, email, country, state, city, role },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user: updatedUser }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error updating user" }, { status: 500 });
    }
}
