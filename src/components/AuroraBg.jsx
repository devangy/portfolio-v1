export const AuroraBg = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />

    <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-neon-cyan/25 blur-[130px] animate-blob" />
    <div
      className="absolute top-1/3 -right-40 w-[640px] h-[640px] rounded-full bg-neon-magenta/20 blur-[150px] animate-blob"
      style={{ animationDelay: "-7s" }}
    />
    <div
      className="absolute bottom-0 left-1/4 w-[520px] h-[520px] rounded-full bg-saffron/15 blur-[130px] animate-blob"
      style={{ animationDelay: "-14s" }}
    />
    <div
      className="absolute -bottom-40 right-1/4 w-[420px] h-[420px] rounded-full bg-neon-purple/15 blur-[120px] animate-blob"
      style={{ animationDelay: "-3s" }}
    />

    <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/40" />
  </div>
);
