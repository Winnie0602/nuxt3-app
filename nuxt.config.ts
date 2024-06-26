// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  auth: {
    globalAppMiddleware: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    "@nuxt/eslint"
  ],
  // auth: {
  //   globalAppMiddleware: true,
  // },
  runtimeConfig: {
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
        },
      ],
    },
  },
  // tailwindcss: {
  //   content: [
  //     // other files...
  //     "./node_modules/flowbite/**/*.{js,ts}"
  //   ],
  //   config: {
  //     plugins: [require('flowbite/plugin')]
  //   }
  // }
})