import type { Config } from "tailwindcss";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
