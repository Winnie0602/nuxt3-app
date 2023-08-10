import type { Config } from 'tailwindcss'

export default {
  content: ["./node_modules/flowbite/**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
} satisfies Config

