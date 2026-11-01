/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F4F0",
        foreground: "#111111",
        maroon: "#941D27",
        secondary: "#777777",
        borderline: "#DAD9D4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

