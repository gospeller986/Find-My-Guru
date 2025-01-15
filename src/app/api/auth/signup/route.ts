import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import User from "@/models/user.model";
import { dbConnect } from "@/db/database";

// Validation schema for sign-up
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();

    // Validate request body
    const validatedData = signupSchema.parse(body);
    const { name, email, password } = validatedData;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data: { id: newUser._id, name: newUser.name, email: newUser.email },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
