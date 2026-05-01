/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        "indian-green": "#138808",
        neon: {
          cyan: "#00f0ff",
          magenta: "#ff2bd6",
          lime: "#b5ff00",
          purple: "#9d4dff",
          orange: "#ff7a1a",
          blue: "#4d8bff",
        },
        ink: {
          DEFAULT: "#050507",
          surface: "#0a0a0f",
          card: "#0d0d14",
          line: "#15151d",
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
        "scroll-x": "scroll-x 40s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "shimmer": "shimmer 3s linear infinite",
        "border-spin": "border-spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "blob": "blob 22s ease-in-out infinite",
        "tick": "tick 1.1s steps(2,end) infinite",
        "marquee-tag": "scroll-x 35s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(0,240,255,0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgba(0,240,255,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(0,240,255,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-spin": { "100%": { transform: "rotate(360deg)" } },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-30px,30px) scale(0.95)" },
        },
        tick: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "shimmer-line":
          "linear-gradient(90deg, transparent, rgba(0,240,255,0.7), transparent)",
      },
      boxShadow: {
        "neon-cyan": "0 0 22px rgba(0,240,255,0.35), 0 0 50px rgba(0,240,255,0.12)",
        "neon-magenta": "0 0 22px rgba(255,43,214,0.35), 0 0 50px rgba(255,43,214,0.12)",
        "neon-saffron": "0 0 22px rgba(255,153,51,0.35), 0 0 50px rgba(255,153,51,0.12)",
        "neon-lime": "0 0 22px rgba(181,255,0,0.30), 0 0 50px rgba(181,255,0,0.10)",
        "card-stack": "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
