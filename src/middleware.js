import { NextResponse } from "next/server";

export function middleware(req) {
  const sessionCookie =
    req.cookies.get("better-auth.session_token") ||
    req.cookies.get("__Secure-better-auth.session_token");

  const isLoggedIn = !!sessionCookie;

  // 🔥 ONLY protect profile
  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/my-profile")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth).*)"],
};