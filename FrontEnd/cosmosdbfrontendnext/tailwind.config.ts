import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#444791",
          100: "#3e3e8c",
          200: "#383886",
          300: "#323280",
          400: "#2c2c7a",
          500: "#262674",
          600: "#20206e",
          700: "#1a1a68",
          800: "#141462",
          900: "#0e0e5c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
