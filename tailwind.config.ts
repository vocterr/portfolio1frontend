import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        poppins: ['"Poppins-Regular"', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "3xl": "1920px"
      },
      animation: {
        'flowing-border': "flowingBorder 3s linear infinite"
      },
      keyframes: {
        flowingBorder: {
          '0%': {backgroundPosition: '0% 50%'},
          '100%': {backgroundPosition: '100% 50%'}
        }
      },
      safelist: [
        "text-blue-400",
        "text-amber-400",
        "text-green-400",
      ],
    },
  },
  plugins: [],
} satisfies Config;
