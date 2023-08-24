import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login',
  },
  // 利用callback在session裡面加入自定義的資料
  callbacks: {
    jwt: ({ token, user }) => {
      const isSignIn = !!user
      if (isSignIn) {
        token.subscribed = user ? (user as any).subscribed || true : false
      }
      token.test = 'test'
      return Promise.resolve(token)
    },
    // 把token裡面添加的資料傳到session
    session: ({ session, token }) => {
      ;(session as any).subscribed = token.subscribed
      ;(session as any).test = token.test
      return Promise.resolve(session)
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.public.GITHUB_CLIENT_ID,
      clientSecret: runtimeConfig.GITHUB_CLIENT_SECRET,
    }),
    // @ts-expect-error
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize(credentials: any) {
        console.log(credentials)

        const user = {
          email: 'test@gmail.com',
          password: 'password',
        }

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user
        }
      },
    }),
  ],
})
