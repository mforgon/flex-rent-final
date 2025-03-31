'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Loader2 } from 'lucide-react'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: ('OWNER' | 'TENANT')[]
}

export default function ProtectedRoute({
  children,
  allowedRoles = ['OWNER', 'TENANT'],
}: ProtectedRouteProps) {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
      return
    }

    if (!loading && user && allowedRoles.length > 0) {
      const userRole = user.role as 'OWNER' | 'TENANT'
      if (!allowedRoles.includes(userRole)) {
        const redirectPath = userRole === 'OWNER' ? '/dashboard/owner' : '/dashboard/tenant'
        router.push(redirectPath)
      }
    }
  }, [user, loading, router, allowedRoles])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#4B6BFB]" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role as 'OWNER' | 'TENANT')) {
    return null
  }

  return <>{children}</>
} 