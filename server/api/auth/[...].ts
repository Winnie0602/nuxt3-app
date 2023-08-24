import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/login',
  },
  // callbacks: {
  //   jwt: ({ token, user }) => {
  //     const isSignIn = !!user
  //     if (isSignIn) {
  //       token.subscribed = user ? (user as any).subscribed || true : false
  //     }
  //     return Promise.resolve(token)
  //   },
  //   session: ({ session, token }) => {
  //     ;(session as any).subscribed = token.subscribed
  //     return Promise.resolve(session)
  //   },
  // },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: 'c51a4b0b96c097491ca9',
      clientSecret: '290239d49d616abfeeee0a2e62f47545ad125952',
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
