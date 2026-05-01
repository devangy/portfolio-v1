import { useEffect, useState } from "react";

const SCENE = [
  "  .   *    .   *    ",
  "    .   ✦    .    * ",
  " *    .    *    .   ",
  "   .  ☾    .    *   ",
  "  *    .    *    .  ",
  "     .    *    .    ",
  "        ▲            ",
  "       ▲▲▲           ",
  "      ▲▒░▲     ▲     ",
  "     ▲░░░▲▲   ▲▲▲    ",
  "    ▲░░░░░▲▲ ▲░░▲    ",
  "   ▲▒░░░░░▲▲▲▒░░▲▲   ",
  "  ▲▒▒░░░░░▲▲▒░░░░▲▲  ",
  " ▲▒▒▒░░░▲▲▲▒▒░░░░▲▲▲ ",
  "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
  " ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ",
  "                     ",
];

const STAR_CHARS = new Set([".", "*", "✦", "✧", "+", "·"]);
const MOON_CHARS = new Set(["☾", "☽"]);
const MOUNTAIN_OUTLINE = new Set(["▲"]);
const SNOW_DEEP = new Set(["▒"]);
const SNOW_LIGHT = new Set(["░"]);
const GROUND = new Set(["▄", "▀", "▌", "▐", "█"]);
const WATER = new Set(["~"]);

const STAR_VARIANTS = [".", "*", "✦", "·", "+"];

export const AsciiMountains = ({ className = "" }) => {
  const [tick, setTick] = useState(0);
  const [shootSeed, setShootSeed] = useState(-1);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 110);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let timeout;
    const fire = () => {
      setShootSeed(Date.now());
      timeout = setTimeout(fire, 4500 + Math.random() * 6000);
    };
    timeout = setTimeout(fire, 2200);
    return () => clearTimeout(timeout);
  }, []);

  const totalLines = SCENE.length;
  const cols = SCENE[0].length;
  const shootProgress = shootSeed > 0 ? ((Date.now() - shootSeed) / 900) % 1 : -1;
  const shootCol = Math.floor(shootProgress * (cols + 6)) - 3;
  const shootRow = Math.floor(shootProgress * 5);

  const renderChar = (ch, li, ci) => {
    if (li === shootRow && ci === shootCol && shootProgress > 0 && shootProgress < 1) {
      return (
        <span
          key={`${li}-${ci}`}
          style={{
            color: "#fef3c7",
            textShadow: "0 0 8px #fde047, 0 0 14px #f59e0b",
          }}
        >
          ─
        </span>
      );
    }

    if (ch === " ") return " ";

    if (STAR_CHARS.has(ch)) {
      const seed = (li * 17 + ci * 7) & 0xff;
      const phase = (tick * 0.08 + seed * 0.13) % (Math.PI * 2);
      const twinkle = Math.sin(phase) * 0.5 + 0.5;
      const alpha = 0.25 + twinkle * 0.75;
      const flickerVariant = (tick + seed) % 47 === 0;
      const display = flickerVariant
        ? STAR_VARIANTS[(seed + tick) % STAR_VARIANTS.length]
        : ch;
      const big = ch === "✦" || ch === "✧";
      return (
        <span
          key={`${li}-${ci}`}
          style={{
            color: `rgba(186, 230, 253, ${alpha})`,
            textShadow: big
              ? `0 0 6px rgba(125,211,252,${alpha}), 0 0 12px rgba(56,189,248,${alpha * 0.8})`
              : alpha > 0.7
              ? `0 0 5px rgba(186,230,253,${alpha * 0.7})`
              : "none",
          }}
        >
          {display}
        </span>
      );
    }

    if (MOON_CHARS.has(ch)) {
      const glow = (Math.sin(tick * 0.05) * 0.5 + 0.5) * 0.4 + 0.6;
      return (
        <span
          key={`${li}-${ci}`}
          style={{
            color: "#fef9c3",
            textShadow: `0 0 ${6 + glow * 6}px rgba(253,224,71,${glow}), 0 0 18px rgba(245,158,11,${glow * 0.6})`,
          }}
        >
          {ch}
        </span>
      );
    }

    if (MOUNTAIN_OUTLINE.has(ch)) {
      const t = (li - 6) / Math.max(1, totalLines - 8);
      const r = Math.round(34 + (16 - 34) * t);
      const g = Math.round(211 + (185 - 211) * t);
      const b = Math.round(238 + (129 - 238) * t);
      return (
        <span
          key={`${li}-${ci}`}
          style={{
            color: `rgba(${r}, ${g}, ${b}, 0.95)`,
            textShadow: `0 0 5px rgba(${r}, ${g}, ${b}, 0.55)`,
          }}
        >
          {ch}
        </span>
      );
    }

    if (SNOW_DEEP.has(ch)) {
      return (
        <span key={`${li}-${ci}`} style={{ color: "rgba(224, 242, 254, 0.8)" }}>
          {ch}
        </span>
      );
    }

    if (SNOW_LIGHT.has(ch)) {
      return (
        <span key={`${li}-${ci}`} style={{ color: "rgba(186, 230, 253, 0.55)" }}>
          {ch}
        </span>
      );
    }

    if (GROUND.has(ch)) {
      return (
        <span
          key={`${li}-${ci}`}
          style={{
            color: "rgba(16, 185, 129, 0.75)",
            textShadow: "0 0 4px rgba(16,185,129,0.4)",
          }}
        >
          {ch}
        </span>
      );
    }

    if (WATER.has(ch)) {
      const phase = (tick * 0.1 + ci * 0.4) % (Math.PI * 2);
      const wave = Math.sin(phase) * 0.5 + 0.5;
      const alpha = 0.35 + wave * 0.45;
      return (
        <span
          key={`${li}-${ci}`}
          style={{
            color: `rgba(34, 211, 238, ${alpha})`,
            textShadow: `0 0 4px rgba(34,211,238,${alpha * 0.6})`,
          }}
        >
          {ch}
        </span>
      );
    }

    return ch;
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden font-jetbrains ${className}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,47,73,0.45) 0%, rgba(2,6,23,0.35) 55%, rgba(6,78,59,0.4) 100%)",
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-[60%] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 70% 25%, rgba(253,224,71,0.18), transparent 55%)",
        }}
      />

      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/[0.06] bg-black/30 backdrop-blur-sm relative z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]" />
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shadow-[0_0_5px_#fcd34d]" />
        <span className="ml-1.5 text-white/40 text-[7.5px] sm:text-[8.5px] tracking-[0.2em]">
          ~/scenes · sky.sh
        </span>
      </div>

      <pre className="relative z-10 px-1.5 pt-1.5 text-[7.5px] sm:text-[8.5px] leading-[1.05] tracking-[0.02em] select-none whitespace-pre">
        {SCENE.map((line, li) => (
          <div key={li}>
            {[...line].map((c, ci) => renderChar(c, li, ci))}
          </div>
        ))}
      </pre>

      <div
        className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay opacity-40"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.04) 3px, transparent 4px)",
        }}
      />
    </div>
  );
};

export default AsciiMountains;
