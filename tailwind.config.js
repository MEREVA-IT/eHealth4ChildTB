export default {
  content: [
    "./index.html",
    "./about.html",
    "./terms.html",
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1868FE",
          red: "#EE133C",
          sky: "#02ADEF",
          yellow: "#FFD02F",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "emerald",
      {
        cdssTheme: {
          primary: "#1868FE",
          secondary: "#EE133C",
          accent: "#02ADEF",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#02ADEF",
          success: "#22C55E",
          warning: "#FFD02F",
          error: "#EE133C",
        },
      },
    ],
  },
};
