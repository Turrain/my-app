import { getToken } from 'next-auth/jwt'
import  prisma  from '@/lib/prisma'

export default async function handler(req, res) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === 'production',
  })

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const userId = session.sub
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { role: { include: { permissions: true } } },
  })

  return res.status(200).json(user)
}