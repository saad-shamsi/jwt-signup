import { NextRequest, NextResponse } from "next/server";

// This function can be marked "async" if using 'await
// isnide

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";
  const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}
// see "mathching paths" below to learn more

export const config = {
  matcher: ["/", "/login", "/signup", "/profile/(.*)"],
};
