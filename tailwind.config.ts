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
        zozySky: "#C3EBFA",
        zozySkyLight: "#EDF9FD",
        zozyPurple: "#CFCEFF",
        zozyPurpleLight: "#F1F0FF",
        zozyYellow: "#FAE27C",
        ZozyYellowLight: "#FEFCE8"
      }
    },
  },
  plugins: [],
};
export default config;
