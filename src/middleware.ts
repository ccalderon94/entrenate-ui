import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware';
import { getToken } from 'next-auth/jwt';


const authRoutes = ["/dashboard"];
const verifyRoutes = ["/request-email-verification", "/verify-email"];
const guestRoutes = ["/forgot-password", "/login", "/password-reset", "/register"];

export const config = {
    matcher: ['/persona'],
  }

  export default withAuth(
    async function middleware(req: NextRequest) {
    const token = await getToken({ req: req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  },

);

  