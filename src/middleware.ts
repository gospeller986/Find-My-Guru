import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your_secret_key");

export async function middleware(req: NextRequest) {
  console.log("Middleware triggered for:", req.nextUrl.pathname);

  const token = req.cookies.get("token")?.value;
  console.log(token)

  // Public routes don't require authentication
  const publicRoutes = ["/auth/signin", "/auth/signup", "/" , "/api"];
  if(req.nextUrl.pathname === "/") return NextResponse.next();
  if (publicRoutes.some((route) => route!== "/" && req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.next();
  }

  if (!token) {
    console.log("No token found, redirecting to /auth/signin");
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  try {
    // Verify the token using jose
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (error) {
    console.error("Invalid token, redirecting to /auth/signin:", error);
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/profile"], // Protect specific routes
};