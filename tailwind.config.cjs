/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        controllo: {
          primary: "#AD8BB4",
          neutral: "#E1E7F3",
          "base-100": "#3C4168",
          success: "#53A142",
          warning: "#CC9621",
          error: "#C14138",
        },
      },
    ],
  },
};
