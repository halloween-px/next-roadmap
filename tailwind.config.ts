import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    container: {
      center: true,
      padding: '24px',
      screens: {
        "2xl": '1300px'
      }
    },
    colors: {
      "dark": colors.gray[800],
      "white": colors.white,
      "primary": '#e04f0f'
    }
  },
  plugins: [],
}
export default config
