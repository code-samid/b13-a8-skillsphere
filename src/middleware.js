

import { NextResponse } from "next/server";

export function middleware(req) {
  const isApi = req.nextUrl.pathname.startsWith("/api");
  if (isApi) return NextResponse.next();

  const sessionCookie = req.cookies.get("__Secure-better-auth.session_token");

  const isLoggedIn = !!sessionCookie;

  if (
    !isLoggedIn &&
    (req.nextUrl.pathname.startsWith("/courses") ||
     req.nextUrl.pathname.startsWith("/my-profile"))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}





// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const isLoggedIn = req.cookies.get("skillsphere_session");

//   if (
//     !isLoggedIn &&
//     (req.nextUrl.pathname.startsWith("/courses/") ||
//      req.nextUrl.pathname.startsWith("/my-profile"))
//   ) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }