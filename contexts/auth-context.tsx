'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { User } from '@supabase/auth-helpers-nextjs'

interface UserMetadata {
  first_name: string
  last_name: string
  phone_number: string
  role: 'OWNER' | 'TENANT'
}

interface UserData extends User {
  role: 'OWNER' | 'TENANT'
}

interface SignUpData {
  firstName: string
  lastName: string
  phoneNumber: string
  role: 'OWNER' | 'TENANT'
}

interface AuthContextType {
  user: UserData | null
  loading: boolean
  signUp: (email: string, password: string, data: SignUpData) => Promise<{ error: Error | null }>
  signIn: (email: string, password: string) => Promise<{ error: Error | null, user: UserData | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient()

  const syncUserToDatabase = async (userData: UserData, metadata: UserMetadata) => {
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userData.id,
          email: userData.email,
          firstName: metadata.first_name,
          lastName: metadata.last_name,
          phoneNumber: metadata.phone_number,
          role: userData.role,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to sync user to database')
      }
    } catch (error) {
      console.error('Error syncing user to database:', error)
    }
  }

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        // Get user metadata
        const userData = {
          ...session.user,
          role: session.user.user_metadata.role || 'TENANT'
        } as UserData

        setUser(userData)

        // Sync user to database
        await syncUserToDatabase(userData, session.user.user_metadata as UserMetadata)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const signUp = async (email: string, password: string, data: SignUpData) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: data.firstName,
          last_name: data.lastName,
          phone_number: data.phoneNumber,
          role: data.role
        }
      }
    })

    if (!error) {
      try {
        await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
            role: data.role,
          }),
        })
      } catch (dbError) {
        console.error('Error creating user in database:', dbError)
      }
    }

    return { error }
  }

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (data.user) {
      const userData: UserData = {
        ...data.user,
        role: data.user.user_metadata.role || 'TENANT'
      }
      return { error: null, user: userData }
    }

    return { error, user: null }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 