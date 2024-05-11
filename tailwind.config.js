/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
      "hero-pattern": "url('/public/herobg.png')",
    }
  },
  },
  plugins: [
    require('flowbite/plugin')
]
}

