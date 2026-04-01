/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        "indian-green": "#138808",
        surface: {
          DEFAULT: "#111111",
          light: "#1a1a1a",
        },
      },

      fontFamily: {
        code: ['"Fira Code"', "monospace"],
        jetbrains: ["'JetBrains Mono'", "monospace"],
        spacemono: ['"Space Mono"', "monospace"],
        geistmono: ["Geist Mono", "monospace"],
      },

      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },

      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },

  plugins: [],
};
