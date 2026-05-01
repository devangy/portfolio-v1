import { useEffect, useState } from "react";

const SCRIPTS = [
  [
    { t: "cmd", x: "whoami" },
    { t: "out", x: "devang" },
    { t: "cmd", x: "pwd" },
    { t: "out", x: "~/mumbai" },
    { t: "cmd", x: "ls -1" },
    { t: "ok", x: "● beacon" },
    { t: "ok", x: "● datalog" },
    { t: "ok", x: "● lucidlines" },
  ],
  [
    { t: "cmd", x: "git status" },
    { t: "dim", x: "branch main" },
    { t: "ok", x: "clean ✓" },
    { t: "cmd", x: "npm run build" },
    { t: "dim", x: "→ vite v5" },
    { t: "ok", x: "ready 312ms" },
    { t: "cmd", x: "deploy" },
    { t: "ok", x: "✓ live" },
  ],
  [
    { t: "cmd", x: "cat stack" },
    { t: "out", x: "react ████" },
    { t: "out", x: "node  ████" },
    { t: "out", x: "go    ███░" },
    { t: "out", x: "linux ████" },
    { t: "cmd", x: "ship it" },
    { t: "ok", x: "✓ shipped" },
  ],
  [
    { t: "cmd", x: "uname -a" },
    { t: "dim", x: "Fedora 40" },
    { t: "cmd", x: "uptime" },
    { t: "ok", x: "since 2023" },
    { t: "cmd", x: "echo $MOOD" },
    { t: "out", x: "ship · iter" },
  ],
];

const TYPE_SPEED = 32;
const OUT_SPEED = 14;
const PAUSE_AFTER_CMD = 220;
const PAUSE_AFTER_OUT = 70;
const PAUSE_BETWEEN_SCRIPTS = 1400;

export const CodeTerminal = ({ className = "" }) => {
  const [scriptIdx, setScriptIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [partial, setPartial] = useState("");
  const [committed, setCommitted] = useState([]);

  useEffect(() => {
    const script = SCRIPTS[scriptIdx];

    if (lineIdx >= script.length) {
      const t = setTimeout(() => {
        setCommitted([]);
        setLineIdx(0);
        setPartial("");
        setScriptIdx((i) => (i + 1) % SCRIPTS.length);
      }, PAUSE_BETWEEN_SCRIPTS);
      return () => clearTimeout(t);
    }

    const cur = script[lineIdx];
    if (partial.length < cur.x.length) {
      const speed = cur.t === "cmd" ? TYPE_SPEED : OUT_SPEED;
      const t = setTimeout(() => {
        setPartial(cur.x.slice(0, partial.length + 1));
      }, speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => {
        setCommitted((c) => [...c, cur]);
        setLineIdx(lineIdx + 1);
        setPartial("");
      },
      cur.t === "cmd" ? PAUSE_AFTER_CMD : PAUSE_AFTER_OUT
    );
    return () => clearTimeout(t);
  }, [scriptIdx, lineIdx, partial]);

  const script = SCRIPTS[scriptIdx];
  const active = lineIdx < script.length ? script[lineIdx] : null;

  return (
    <div
      className={`relative w-full h-full overflow-hidden font-jetbrains text-[9px] sm:text-[10px] leading-[1.45] ${className}`}
    >
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_5px_#e879f9]" />
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_5px_#a3e635]" />
        <span className="ml-1.5 text-white/30 text-[7.5px] sm:text-[8.5px] tracking-[0.2em]">
          ~/dev · zsh
        </span>
      </div>

      <div className="px-2 py-1.5 space-y-[1px]">
        {committed.map((l, i) => (
          <Line key={i} line={l} />
        ))}
        {active && <Line line={{ ...active, x: partial }} cursor />}
      </div>
    </div>
  );
};

const TYPE_STYLES = {
  cmd: { prefix: "$", prefixColor: "text-cyan-300", textColor: "text-white/90" },
  out: { prefix: " ", prefixColor: "text-white/30", textColor: "text-fuchsia-200/85" },
  ok: { prefix: " ", prefixColor: "text-white/30", textColor: "text-lime-300/90" },
  dim: { prefix: " ", prefixColor: "text-white/30", textColor: "text-violet-300/75" },
};

const Line = ({ line, cursor }) => {
  const s = TYPE_STYLES[line.t];
  const cursorColor =
    line.t === "cmd"
      ? "#22d3ee"
      : line.t === "ok"
      ? "#a3e635"
      : line.t === "dim"
      ? "#a78bfa"
      : "#e879f9";
  return (
    <div className="flex items-center">
      <span className={`mr-1 shrink-0 ${s.prefixColor}`}>{s.prefix}</span>
      <span className={`truncate ${s.textColor}`}>{line.x}</span>
      {cursor && (
        <span
          className="ml-0.5 inline-block w-[4px] h-[9px] align-middle terminal-cursor"
          style={{
            background: cursorColor,
            boxShadow: `0 0 6px ${cursorColor}`,
          }}
        />
      )}
    </div>
  );
};

export default CodeTerminal;
