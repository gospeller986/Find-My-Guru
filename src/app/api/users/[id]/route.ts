import { dbConnect } from "@/db/database";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

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
        return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
    }
}
