import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        section: {
          bg: "rgb(var(--section-bg))",
          fg: "rgb(var(--section-fg))",
          line: "rgb(var(--section-line))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
