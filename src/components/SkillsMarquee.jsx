import { useState } from "react";

const ROW_TOP = [
  { name: "React", color: "text-cyan-300", glow: "rgba(34,211,238,0.5)" },
  { name: "Next.js", color: "text-white", glow: "rgba(255,255,255,0.45)" },
  { name: "TypeScript", color: "text-sky-300", glow: "rgba(56,189,248,0.5)" },
  { name: "Node.js", color: "text-emerald-300", glow: "rgba(52,211,153,0.5)" },
  { name: "Postgres", color: "text-sky-200", glow: "rgba(125,211,252,0.5)" },
  { name: "Prisma", color: "text-cyan-200", glow: "rgba(34,211,238,0.45)" },
  { name: "Tailwind", color: "text-cyan-300", glow: "rgba(34,211,238,0.5)" },
  { name: "Redux", color: "text-sky-300", glow: "rgba(56,189,248,0.5)" },
];

const ROW_BOTTOM = [
  { name: "Golang", color: "text-cyan-300", glow: "rgba(34,211,238,0.5)" },
  { name: "Python", color: "text-amber-300", glow: "rgba(252,211,77,0.5)" },
  { name: "Docker", color: "text-sky-300", glow: "rgba(56,189,248,0.5)" },
  { name: "AWS", color: "text-amber-300", glow: "rgba(252,211,77,0.5)" },
  { name: "Linux", color: "text-lime-300", glow: "rgba(190,242,100,0.55)" },
  { name: "Bash", color: "text-emerald-300", glow: "rgba(52,211,153,0.5)" },
  { name: "Cloudflare", color: "text-amber-300", glow: "rgba(252,211,77,0.5)" },
  { name: "Nginx", color: "text-emerald-300", glow: "rgba(52,211,153,0.5)" },
  { name: "Socket.io", color: "text-cyan-300", glow: "rgba(34,211,238,0.5)" },
  { name: "Express", color: "text-white", glow: "rgba(255,255,255,0.45)" },
];

export const SkillsMarquee = () => {
  const [shineKey, setShineKey] = useState(0);
  const [shineId, setShineId] = useState(null);

  const trigger = (id) => {
    setShineId(id);
    setShineKey((k) => k + 1);
  };

  return (
    <div className="relative rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="px-5 sm:px-6 pt-4 pb-3 flex items-center gap-3">
        <StackEmblem />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] font-jetbrains">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-cyan-300">stack</span>
            <span className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
            <span className="text-white/30">tap to spark</span>
          </div>
          <div className="mt-1 text-[11.5px] text-white/55 font-jetbrains">
            Tools I build with — frontend · backend · infra
          </div>
        </div>
      </div>

      <div className="py-4 space-y-2.5 marquee-mask">
        <Row items={ROW_TOP} dir="left" rowId="top" shineId={shineId} shineKey={shineKey} onTrigger={trigger} />
        <Row items={ROW_BOTTOM} dir="right" rowId="bot" shineId={shineId} shineKey={shineKey} onTrigger={trigger} />
      </div>
    </div>
  );
};

const Row = ({ items, dir, rowId, shineId, shineKey, onTrigger }) => {
  const animClass =
    dir === "left"
      ? "animate-marquee-tag"
      : "animate-marquee-tag [animation-direction:reverse]";
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-2.5 w-max ${animClass}`}>
        {doubled.map((it, i) => {
          const id = `${rowId}-${i}`;
          const active = shineId === id;
          return (
            <button
              key={id}
              onClick={() => onTrigger(id)}
              className={`relative overflow-hidden shrink-0 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/20 transition-colors text-[12px] font-jetbrains ${it.color}`}
              style={{ textShadow: `0 0 8px ${it.glow}` }}
            >
              <span className="relative z-10">{it.name}</span>
              {active && (
                <span
                  key={shineKey}
                  className="pointer-events-none absolute inset-0 z-20"
                  style={{
                    background:
                      "linear-gradient(100deg, transparent 25%, rgba(255,255,255,0.55) 50%, transparent 75%)",
                    animation: "skill-shine 0.75s ease-out forwards",
                  }}
                />
              )}
              {active && (
                <span
                  className="pointer-events-none absolute -inset-1 rounded-full"
                  style={{
                    boxShadow: `0 0 16px ${it.glow}, 0 0 32px ${it.glow}`,
                    animation: "skill-glow 0.75s ease-out forwards",
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const StackEmblem = () => (
  <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-cyan-400/15 via-emerald-400/10 to-sky-500/15 grid place-items-center">
    <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:6px_6px]" />
    <svg
      viewBox="0 0 40 40"
      className="relative w-7 h-7 sm:w-8 sm:h-8"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="stack-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="stack-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="stack-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bef264" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <g
        transform="translate(20 22)"
        style={{ filter: "drop-shadow(0 0 4px rgba(34,211,238,0.5))" }}
      >
        <polygon
          points="0,-14 14,-7 0,0 -14,-7"
          fill="url(#stack-a)"
          opacity="0.95"
        />
        <polygon
          points="0,-6 14,1 0,8 -14,1"
          fill="url(#stack-b)"
          opacity="0.85"
        />
        <polygon
          points="0,2 14,9 0,16 -14,9"
          fill="url(#stack-c)"
          opacity="0.75"
        />
      </g>
    </svg>
  </div>
);

export default SkillsMarquee;
