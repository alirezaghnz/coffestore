import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //get cookie for identify user
  const token = request.cookies.get("better-auth.session_token")?.value;
  //protected path for better security
  const protectedPath = ["/checkout", "/profile"];
  const isProtectedPath = protectedPath.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !token) {
    const loginUrl = new URL("/authentication", request.url);
    loginUrl.searchParams.set("redirect", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (token && request.nextUrl.pathname === "/authentication") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// add matcher for better performance
export const config = {
  matcher: ["/checkout/:path*", "/profile/:path*", "/authentication"],
};
