import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import { PrismaClient } from '@prisma/client'
import { NuxtAuthHandler } from '#auth'

const runtimeConfig = useRuntimeConfig()
// const prisma = new PrismaClient()

async function getMe(session: any) {
  return await $fetch('/api/me', {
    method: 'POST',
    body: {
      record: {
        email: session?.user?.email,
      },
    },
  })
}

export default NuxtAuthHandler({
  secret: 'my-superb-secret',
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login',
  },
  // adapter: PrismaAdapter(prisma),
  // 利用callback在session裡面加入自定義的資料
  callbacks: {
    jwt: ({ token, user }) => {
      const isSignIn = !!user
      token.isSignIn = isSignIn
      return Promise.resolve(token)
    },
    // 把token裡面添加的資料傳到session
    session: ({ session, token }) => {
      ;(session as any).isSignIn = token.test
      return Promise.resolve(session)
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials: any) {
        const user = {
          email: 'test@gmail.com',
          password: 'password',
        }
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
})
