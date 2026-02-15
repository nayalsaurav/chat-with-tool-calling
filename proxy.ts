import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export const proxy = auth(async (request: NextRequest) => {
  const session = await auth();
  const { pathname } = request.nextUrl;

  if (session?.user) {
    if (pathname === "/signin") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (!session?.user) {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/signin"],
};
