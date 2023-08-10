// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

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
