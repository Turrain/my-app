import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const users = await prisma.shapeGroup.findMany({
    where: {
        shapeType: "ADM1"
    }
  })
  res.json(users)
}