/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in src
    "./src/components/**/*.{js,jsx}", // Include components folder if you have one
  ],
  theme: {
    extend: { // This is where you extend the default theme
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        primaryStart: "#262F96",  // Starting color of the gradient
        primaryEnd: "#1E204F",    // Ending color of the gradient
        customBlue: "#1E90FF", // Example of adding a custom color
        customGray: "#F0F0F0", // Another example
      },
      fontFamily: {
        code: ['"Fira Code"', "monospace"],
        jetbrains: ["'JetBrains Mono'", "monospace"],
        spacemono: ['"Space Mono"', 'monospace'],

      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(to bottom, #262F96, #1E204F)", // Custom gradient
      },
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
      }
    },
  },
  plugins: [],
};
