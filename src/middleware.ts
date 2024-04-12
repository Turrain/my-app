import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import  prisma  from '@/lib/prisma'


async function handleProtectedRoutes(req, user, config) {
  const { pathname } = req.nextUrl;
  const role = user?.role;
  const permissions = role?.permissions.map((p) => p.name);
  const { protectedRoutes, redirectPath, requiredPermission } = config;

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtectedRoute && (!role || !permissions?.includes(requiredPermission))) {
    const url = req.nextUrl.clone();
    url.pathname = redirectPath;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  })

  const { pathname, origin } = req.nextUrl
  const isAuthRoute = pathname.startsWith('/auth')

  if (isAuthRoute) {
    return NextResponse.next()
  }

  const response = await fetch(`${origin}/api/session`, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: req.headers.get('Cookie') || '',
    },
  })

  if (response.status === 401) {
    const url = req.nextUrl.clone()
    url.pathname = '/auth/signin'
    return NextResponse.rewrite(url)
  }

  const user = await response.json()
  const config = {
    protectedRoutes: ['/admin', '/settings'],
    redirectPath: '/403',
    requiredPermission: 'admin',
  }

  return handleProtectedRoutes(req, user, config)
}

export const config = {
  matcher: ['/dashboard', '/admin', '/settings', '/auth/:path*'],
}