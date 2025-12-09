/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        primaryStart: "#262F96",
        primaryEnd: "#1E204F",
        customBlue: "#1E90FF",
        customGray: "#F0F0F0",
      },

      fontFamily: {
        code: ['"Fira Code"', "monospace"],
        jetbrains: ["'JetBrains Mono'", "monospace"],
        spacemono: ['"Space Mono"', "monospace"],
        geistmono: ['Geist Mono', 'monospace'],
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #262F96, #1E204F)",
      },

      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
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
