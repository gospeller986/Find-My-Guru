import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation : {
         blob : "blob 7s infinite ease-in-out",
         rotate : 'rotate 10s linear infinite',
      },
      keyframes : {
          rotate : {
            '0%': { transform: 'rotate(0deg) scale(10)' },
            '100%': { transform: 'rotate(-360deg) scale(10)' },
          },
          blob : {
            "0%" : {
              transform: "translate(0px, 0px) scale(1)"
            },
            "33%" : {
              transform: "translate(30px, -50px) scale(1.1)"
            },
            "66%" : {
              transform: "translate(-20px, 20px) scale(0.9)"
            },
            "100%" : {
              transform: "translate(0px, 0px) scale(1)"
            },
          }
      }
    },
  },
  plugins: [],
} satisfies Config;
