import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { globalRatelimit } from "@/lib/ratelimit";

export const proxy = auth(async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/") && !pathname.startsWith("/api/auth")) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "anonymous";
    const { success, reset } = await globalRatelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests" },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((reset - Date.now()) / 1000).toString(),
          },
        },
      );
    }
  }

  const session = await auth();

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
  matcher: ["/dashboard/:path*", "/signin", "/api/:path*"],
};
