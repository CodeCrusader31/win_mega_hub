import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // ✅ Correct import

const JWT_SECRET = process.env.JWT_SECRET!;
const secret = new TextEncoder().encode(JWT_SECRET); // ✅ Required for Edge-compatible key

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret); // ✅ jose style
    const role = payload.role as string;
    const pathname = request.nextUrl.pathname;

    // console.log("Token found:", token);
    // console.log("Decoded JWT:", payload);
    // console.log("Request path:", pathname);

    if (pathname.startsWith('/admin') && role !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (pathname.startsWith('/user') && role !== 'user') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error('JWT verification failed in middleware:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
