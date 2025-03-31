import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define protected routes and their required roles
const protectedRoutes = {
  '/dashboard/owner': ['OWNER'],
  '/dashboard/tenant': ['TENANT'],
  '/properties/create': ['OWNER'],
  '/properties/edit': ['OWNER'],
  '/dashboard': ['OWNER', 'TENANT']
}

// Define public routes that don't require authentication
const publicRoutes = ['/', '/login', '/signup', '/forgot-password', '/properties']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const path = req.nextUrl.pathname

  // Allow access to public routes
  if (publicRoutes.includes(path)) {
    return res
  }

  // Check if user is authenticated
  if (!session) {
    const redirectUrl = new URL('/login', req.url)
    redirectUrl.searchParams.set('redirect', path)
    return NextResponse.redirect(redirectUrl)
  }

  // Check role-based access for protected routes
  const userRole = session.user?.user_metadata?.role
  const requiredRoles = protectedRoutes[path as keyof typeof protectedRoutes]

  if (requiredRoles && !requiredRoles.includes(userRole)) {
    // Redirect to appropriate dashboard based on role
    const redirectPath = userRole === 'OWNER' ? '/dashboard/owner' : '/dashboard/tenant'
    return NextResponse.redirect(new URL(redirectPath, req.url))
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
} 