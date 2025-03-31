import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { email, firstName, lastName, phoneNumber, role, id } = data

    const user = await prisma.user.upsert({
      where: { email },
      create: {
        id,
        email,
        password: '', // We don't store the actual password
        firstName,
        lastName,
        phoneNumber,
        role,
      },
      update: {
        firstName,
        lastName,
        phoneNumber,
        role,
      },
    })

    return NextResponse.json({ user })
  } catch (error) {
    console.error('Error in user API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 