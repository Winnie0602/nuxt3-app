import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: 'c51a4b0b96c097491ca9',
      clientSecret: '290239d49d616abfeeee0a2e62f47545ad125952',
    }),
  ],
})
