// src/app/api/auth/user/route.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id:string , name: string; email: string; profilePicture?: string };
    return NextResponse.json({ id:decoded.id , name: decoded.name, email: decoded.email, profilePicture: decoded.profilePicture });
  } catch (err) {
    return NextResponse.json({ error: `Invalid token ${err}` }, { status: 401 });
  }
}
