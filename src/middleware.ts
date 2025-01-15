import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Public routes don't require authentication
  const publicRoutes = ["/auth/signin", "/auth/signup", "/"];
  if (publicRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Protect specific routes
};
