import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const accentColors = {
  cyan: { ring: "ring-neon-cyan/40", text: "text-neon-cyan", bg: "bg-neon-cyan", glow: "shadow-neon-cyan" },
  magenta: { ring: "ring-neon-magenta/40", text: "text-neon-magenta", bg: "bg-neon-magenta", glow: "shadow-neon-magenta" },
  lime: { ring: "ring-neon-lime/40", text: "text-neon-lime", bg: "bg-neon-lime", glow: "shadow-neon-lime" },
  saffron: { ring: "ring-saffron/40", text: "text-saffron", bg: "bg-saffron", glow: "shadow-neon-saffron" },
};

export const ProjectTile = ({ project, accent = "cyan", index }) => {
  const ref = useRef(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  const a = accentColors[accent];

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ rx: -py * 6, ry: px * 8 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setT({ rx: 0, ry: 0 })}
      animate={{ rotateX: t.rx, rotateY: t.ry }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 1200 }}
      className="group relative"
    >
      <div className="relative rounded-2xl border border-white/[0.08] bg-ink-card/70 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors">
        {/* terminal chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
          </div>
          <span className="text-white/30 text-[11px] font-jetbrains ml-2">
            ~/projects/{project.name.toLowerCase()}
          </span>
          <span className="ml-auto text-[10px] text-white/25 font-jetbrains">
            {String(index + 1).padStart(2, "0")} / 03
          </span>
        </div>

        {/* glow blob */}
        <div
          className={`absolute -top-20 -right-20 w-56 h-56 rounded-full ${a.bg} opacity-[0.08] blur-3xl group-hover:opacity-20 transition-opacity duration-700`}
        />

        <div className="relative p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <span className={`w-1.5 h-1.5 rounded-full ${a.bg} ${a.glow}`} />
              <h3 className={`text-2xl sm:text-3xl font-spacemono ${a.text}`}>
                {project.name}
              </h3>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`shrink-0 grid place-items-center w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/40 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all`}
              aria-label={`View ${project.name} on GitHub`}
            >
              <ArrowUpRight size={16} />
            </a>
          </div>

          {project.tags && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-white/50 font-jetbrains"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-white/55 text-[14.5px] leading-relaxed font-jetbrains">
            {project.desc}
          </p>

          <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-3 text-[11px] font-jetbrains text-white/30">
            <Github size={12} />
            <span className="truncate">{project.url.replace("https://", "")}</span>
            <span className="ml-auto flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${a.bg} animate-tick`} />
              live
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
