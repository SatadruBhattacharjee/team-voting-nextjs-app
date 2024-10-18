import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function DashboardRouter() {
  const { userId } = auth()
  const user = await currentUser()

  if (!userId || !user) {
    redirect('/sign-in')
  }

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  })

  if (!dbUser) {
    // Create user in the database if they don't exist
    await prisma.user.create({
      data: {
        clerkId: userId,
        email: user.emailAddresses[0].emailAddress,
        name: `${user.firstName} ${user.lastName}`,
        role: 'EMPLOYEE', // Default role
      },
    })
    redirect('/dashboard/employee')
  }

  if (dbUser.role === 'ADMIN') {
    redirect('/dashboard/admin')
  } else {
    redirect('/dashboard/employee')
  }
}