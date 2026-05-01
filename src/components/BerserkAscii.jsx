import { useEffect, useState } from "react";

const BASE = [
  "       ▄▄▀▀▀▀▀▀▀▀▀▄▄       ",
  "     ▄▀░░░░░░░░░░░░░▀▄     ",
  "    ▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌    ",
  "   ▌▒▒░▄▄▄▄░░░░░▄▄▄▄░▒▒▌   ",
  "   ▌▒░█▀▀▀▀█░░░█▀▀▀▀█░▒▌   ",
  "   ▌▒░█    █░░░█    █░▒▌   ",
  "   ▌▒░█  X █░░░█ X  █░▒▌   ",
  "   ▌▒░█▄▄▄▄█░░░█▄▄▄▄█░▒▌   ",
  "   ▌▒▒░░░░░░░▼░░░░░░░▒▒▌   ",
  "    ▌▒▒░░░▓▓███▓▓░░░▒▒▌    ",
  "     ▀▄░░░▓░░░░░▓░░░▄▀     ",
  "       ▀▄▄░░░░░░░▄▄▀       ",
  "          ▀▀▀▀▀▀▀          ",
  "             █             ",
  "          ▄▄███▄▄          ",
  "         ▀▀█████▀▀         ",
  "             █             ",
  "             █             ",
  "             █             ",
  "             █             ",
  "             ▼             ",
];

const GLITCH_CHARS = "░▒▓█▌▐│║◆◇◈⚡✦◢◣◤◥";
const RED_CHARS = new Set(["X"]);

const lerp = (a, b, t) => a + (b - a) * t;

const gradientColor = (t) => {
  // 0: cyan #38e1ff, 0.5: magenta #ff2bd6, 1: violet #a855f7
  let r, g, b;
  if (t < 0.5) {
    const k = t / 0.5;
    r = lerp(56, 255, k);
    g = lerp(225, 43, k);
    b = lerp(255, 214, k);
  } else {
    const k = (t - 0.5) / 0.5;
    r = lerp(255, 168, k);
    g = lerp(43, 85, k);
    b = lerp(214, 247, k);
  }
  return [Math.round(r), Math.round(g), Math.round(b)];
};

export const BerserkAscii = ({ className = "" }) => {
  const [tick, setTick] = useState(0);
  const [eyeOn, setEyeOn] = useState(true);
  const [glitchSeed, setGlitchSeed] = useState(0);

  useEffect(() => {
    let raf;
    let last = performance.now();
    let glitchAt = 800 + Math.random() * 1800;
    const loop = (now) => {
      if (now - last > glitchAt) {
        last = now;
        glitchAt = 800 + Math.random() * 2200;
        setGlitchSeed((s) => s + 1);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 120);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let id;
    const flicker = () => {
      setEyeOn(false);
      setTimeout(() => setEyeOn(true), 70 + Math.random() * 80);
      id = setTimeout(flicker, 1400 + Math.random() * 2400);
    };
    id = setTimeout(flicker, 1200);
    return () => clearTimeout(id);
  }, []);

  const renderChar = (ch, lineIdx, colIdx, totalLines) => {
    if (ch === " ") return " ";

    if (RED_CHARS.has(ch)) {
      return (
        <span
          key={`${lineIdx}-${colIdx}`}
          style={{
            color: eyeOn ? "#ff2bd6" : "#3a0828",
            textShadow: eyeOn
              ? "0 0 8px #ff2bd6, 0 0 16px #ff2bd6, 0 0 24px #c026d3"
              : "none",
            transition: "color 0.08s, text-shadow 0.08s",
          }}
        >
          ●
        </span>
      );
    }

    const seed = (glitchSeed * 31 + lineIdx * 7 + colIdx) & 0xff;
    const isGlitched = seed > 248;
    const display = isGlitched
      ? GLITCH_CHARS[(seed * 13) % GLITCH_CHARS.length]
      : ch;

    const t = lineIdx / Math.max(1, totalLines - 1);
    const [r, g, b] = gradientColor(t);
    let alpha = 0.6;
    if (ch === "█" || ch === "▓") alpha = 0.92;
    else if (ch === "▒") alpha = 0.55;
    else if (ch === "░") alpha = 0.32;
    else if (ch === "▌" || ch === "▐" || ch === "│" || ch === "║") alpha = 0.7;
    else if (ch === "▼") alpha = 0.85;
    else if (ch === "▲" || ch === "▀") alpha = 0.75;

    let color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    let shadow = "none";
    if (isGlitched) {
      color = "rgba(255, 80, 240, 0.85)";
      shadow = "0 0 6px rgba(255, 80, 240, 0.7)";
    } else if (ch === "█" || ch === "▓") {
      shadow = `0 0 6px rgba(${r}, ${g}, ${b}, 0.45)`;
    }

    return (
      <span key={`${lineIdx}-${colIdx}`} style={{ color, textShadow: shadow }}>
        {display}
      </span>
    );
  };

  const drift = Math.sin(tick / 14) * 1.5;
  const total = BASE.length;

  return (
    <div className={`relative inline-block ${className}`} aria-hidden="true">
      <div
        className="absolute -inset-4 rounded-full blur-3xl opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 43, 214, 0.3) 0%, rgba(56, 225, 255, 0.18) 45%, transparent 75%)",
        }}
      />

      <pre
        className="relative font-jetbrains text-[8.5px] sm:text-[10px] leading-[1.05] tracking-[0.02em] select-none whitespace-pre"
        style={{ transform: `translateY(${drift * 0.2}px)` }}
      >
        {BASE.map((line, li) => (
          <div key={li}>
            {[...line].map((c, ci) => renderChar(c, li, ci, total))}
          </div>
        ))}
      </pre>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 2px, rgba(168,85,247,0.05) 3px, rgba(255,255,255,0) 4px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default BerserkAscii;
