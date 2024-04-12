import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'
import { NextApiHandler } from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { verifyPassword } from '../../../lib/auth'
// import EmailProvider from "next-auth/providers/email"
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const prismaAdapter = PrismaAdapter(prisma)

// @ts-ignore
prismaAdapter.createUser = (data) => {
  console.log('Data: ', data)
  return prisma.user.create({ 
    data: {
      ...data, 
      role: {
        connectOrCreate: {
          create: {
            name: 'user'
          },
          where: {
            name: 'user'
          }
        }
      }
    }
  })
}

const options: AuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        password: { label: 'Password', type: 'password' },
        email: {
          label: 'Username',
          type: 'text',
          placeholder: 'jsmith@mail.ru',
        },
      },
      async authorize(credentials, req) {
        // prisma get user by mail
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        if (!user) {
          throw new Error('No user found!')
        }

        // compare given password with hashed password from database
        const isValid = await verifyPassword(
          credentials?.password!,
          user.password,
        )

        if (!isValid) {
          throw new Error('Could not log you in!')
        }
        console.log('user id', user.id)
        if (user) {
          console.log('user', user)
          // Any object returned will be saved in `user` property of the JWT
          return { email: user.email, id: user.id }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.log('errrrr')
          return null
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  adapter: prismaAdapter,
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {},
  debug: true,
  pages: {
    signIn: '/auth/signin',
  },
}
