import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const accentMap = {
  cyan: { line: "from-neon-cyan/60 via-transparent to-neon-magenta/40", dot: "bg-neon-cyan shadow-[0_0_12px_#00f0ff]" },
  magenta: { line: "from-neon-magenta/60 via-transparent to-neon-purple/40", dot: "bg-neon-magenta shadow-[0_0_12px_#ff2bd6]" },
  saffron: { line: "from-saffron/60 via-transparent to-indian-green/40", dot: "bg-saffron shadow-[0_0_12px_#FF9933]" },
  lime: { line: "from-neon-lime/60 via-transparent to-neon-cyan/40", dot: "bg-neon-lime shadow-[0_0_12px_#b5ff00]" },
  purple: { line: "from-neon-purple/60 via-transparent to-neon-magenta/40", dot: "bg-neon-purple shadow-[0_0_12px_#9d4dff]" },
};

export const Card = ({
  id,
  children,
  className = "",
  label,
  index,
  accent = "cyan",
  delay = 0,
}) => {
  const a = accentMap[accent];
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "stack-card relative scroll-mt-24 rounded-3xl border border-white/[0.08] glass overflow-hidden",
        "p-6 sm:p-8 md:p-10 shadow-card-stack",
        className
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r", a.line)} />

      <span className="ascii-corner absolute top-2 left-3">┌─</span>
      <span className="ascii-corner absolute top-2 right-3">─┐</span>
      <span className="ascii-corner absolute bottom-2 left-3">└─</span>
      <span className="ascii-corner absolute bottom-2 right-3">─┘</span>

      {(label || index !== undefined) && (
        <div className="flex items-center gap-3 mb-6 text-[11px] uppercase tracking-[0.22em] text-white/45 font-jetbrains">
          {index !== undefined && (
            <span className="text-white/30 font-mono">
              {String(index).padStart(2, "0")}
            </span>
          )}
          <span className={cn("w-1.5 h-1.5 rounded-full", a.dot)} />
          {label && <span>{label}</span>}
          <span className="flex-1 h-px bg-gradient-to-r from-white/[0.08] to-transparent" />
        </div>
      )}

      {children}
    </motion.section>
  );
};
