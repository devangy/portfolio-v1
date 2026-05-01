import { useEffect, useRef, useState } from "react";

const WORLD_MAP = [
  "....................................",
  "......######......######............",
  "...##########..############....##...",
  "...##########.#############...####..",
  "....########..############....####..",
  ".....######....##########.....####..",
  "......####......########......##....",
  ".......##........######.............",
  "........#........######.............",
  ".......##........#####..............",
  "........##.......######....##.......",
  ".........#........####.....##.......",
  "..........#........##......#........",
  "...........#........#...............",
  "............................##......",
  "....................................",
];

const MAP_W = WORLD_MAP[0].length;
const MAP_H = WORLD_MAP.length;

const isLand = (latNorm, lonNorm) => {
  const x = Math.floor(((lonNorm + 1) * 0.5) * MAP_W) % MAP_W;
  const y = Math.floor(((1 - latNorm) * 0.5) * MAP_H);
  if (y < 0 || y >= MAP_H) return false;
  return WORLD_MAP[y][(x + MAP_W) % MAP_W] === "#";
};

const SHADE_LAND = ["█", "▓", "▒", "░"];
const SHADE_OCEAN = ["·", "∙", " ", " "];

export const AsciiGlobe = ({
  cols = 34,
  rows = 17,
  className = "",
  speed = 0.025,
}) => {
  const [theta, setTheta] = useState(0);
  const rafRef = useRef();
  const lastRef = useRef(performance.now());

  useEffect(() => {
    const loop = (now) => {
      const dt = (now - lastRef.current) / 1000;
      lastRef.current = now;
      setTheta((t) => t + dt * speed * Math.PI * 2);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  const cx = (cols - 1) / 2;
  const cy = (rows - 1) / 2;
  const r = Math.min(cx, cy) - 0.4;

  const lightX = -0.55;
  const lightY = -0.45;
  const lightZ = 0.7;
  const lightLen = Math.sqrt(lightX * lightX + lightY * lightY + lightZ * lightZ);

  const lines = [];
  for (let y = 0; y < rows; y++) {
    let row = [];
    for (let x = 0; x < cols; x++) {
      const dx = (x - cx) / r;
      const dy = ((y - cy) * 1.9) / r;
      const r2 = dx * dx + dy * dy;
      if (r2 > 1) {
        row.push({ ch: " ", kind: "void" });
        continue;
      }
      const dz = Math.sqrt(1 - r2);
      const rotX = Math.cos(theta) * dx + Math.sin(theta) * dz;
      const rotZ = -Math.sin(theta) * dx + Math.cos(theta) * dz;
      const lat = -dy;
      const lon = Math.atan2(rotX, rotZ) / Math.PI;
      const land = isLand(lat, lon);

      const lambert =
        (dx * lightX + -dy * lightY + dz * lightZ) / lightLen;
      const shade = Math.max(0, Math.min(0.999, (lambert + 1) / 2));
      const idx = Math.floor((1 - shade) * 4);

      if (land) {
        row.push({ ch: SHADE_LAND[Math.min(3, idx)], kind: "land", shade });
      } else {
        row.push({ ch: SHADE_OCEAN[Math.min(3, idx)], kind: "ocean", shade });
      }
    }
    lines.push(row);
  }

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 40% 35%, rgba(56,189,248,0.4) 0%, rgba(16,185,129,0.18) 40%, transparent 70%)",
        }}
      />
      <pre
        className="font-jetbrains text-[9px] sm:text-[11px] leading-[0.95] tracking-[0.04em] select-none whitespace-pre"
      >
        {lines.map((row, li) => (
          <div key={li}>
            {row.map((cell, ci) => {
              if (cell.kind === "void") return " ";
              if (cell.kind === "land") {
                const a = 0.55 + cell.shade * 0.45;
                return (
                  <span
                    key={ci}
                    style={{
                      color: `rgba(110, 231, 183, ${a})`,
                      textShadow: `0 0 6px rgba(52,211,153,${a * 0.55})`,
                    }}
                  >
                    {cell.ch}
                  </span>
                );
              }
              const a = 0.25 + cell.shade * 0.6;
              return (
                <span
                  key={ci}
                  style={{
                    color: `rgba(125, 211, 252, ${a})`,
                    textShadow:
                      cell.shade > 0.7
                        ? `0 0 5px rgba(56,189,248,${a * 0.7})`
                        : "none",
                  }}
                >
                  {cell.ch}
                </span>
              );
            })}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default AsciiGlobe;
