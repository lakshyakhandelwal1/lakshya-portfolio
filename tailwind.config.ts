import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light-bg': 'url("/assets/light_bg.png")',
        'dark-bg': 'url("/assets/dark_bg.jpg")',
      },
      colors: {
        trans: {
          blue: "rgba(11, 78, 172, 0.45)", 
          cyan: "rgba(175, 217, 231, 0.59)",
          black: "rgba(0, 0, 0, 0.4)",
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
}
export default config
