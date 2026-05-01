import { useEffect, useRef } from "react";

export const NeonBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let dots = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const palette = ["#22d3ee", "#34d399", "#a3e635", "#38bdf8", "#fcd34d"];
      dots = Array.from({ length: 55 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        c: palette[Math.floor(Math.random() * palette.length)],
        a: Math.random() * Math.PI * 2,
        s: 0.008 + Math.random() * 0.022,
        r: 0.6 + Math.random() * 1.1,
        vx: (Math.random() - 0.5) * 0.08,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.a += d.s;
        d.x += d.vx;
        if (d.x < -10) d.x = w + 10;
        if (d.x > w + 10) d.x = -10;
        const op = (Math.sin(d.a) * 0.5 + 0.5) * 0.8 + 0.1;
        ctx.fillStyle = d.c;
        ctx.globalAlpha = op * 0.55;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = op * 0.12;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * 4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-30 bg-black" />

      <div
        className="fixed inset-0 -z-30 pointer-events-none opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 45%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 45%, black 30%, transparent 85%)",
        }}
      />

      <div
        className="fixed inset-0 -z-30 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.05) 1px, transparent 1px)",
          backgroundSize: "220px 220px",
        }}
      />

      <div className="fixed -top-32 -right-40 -z-20 w-[600px] h-[600px] rounded-full bg-cyan-400/15 blur-[140px] pointer-events-none" />
      <div className="fixed -bottom-40 -left-40 -z-20 w-[600px] h-[600px] rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-[500px] h-[500px] rounded-full bg-sky-500/[0.10] blur-[150px] pointer-events-none" />

      <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      <div
        className="fixed inset-0 -z-10 pointer-events-none mix-blend-overlay opacity-[0.7]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.022) 2px, rgba(255,255,255,0.022) 3px)",
        }}
      />

      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
};
