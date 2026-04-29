import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoggedIn = req.cookies.get("skillsphere_session");

  if (
    !isLoggedIn &&
    (req.nextUrl.pathname.startsWith("/courses/") ||
     req.nextUrl.pathname.startsWith("/my-profile"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}