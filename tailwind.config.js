/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/herobg.png')",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Inter', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

