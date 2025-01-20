import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { z } from "zod";
import User from "@/models/user.model";
import { dbConnect } from "@/db/database";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Validation schema for sign-in
const signinSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();

    // Validate request body
    const validatedData = signinSchema.parse(body);
    const { email, password } = validatedData;

    // Check if the user exists
    const user = await User.findOne({ email });
    console.log("USERRRR", user)
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Generate a JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role , name : user.name },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      success: true,
      message: "Sign in successful",
      token,
      data: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Error signing in user" }, { status: 500 });
  }
}
