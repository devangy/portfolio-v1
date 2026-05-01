import { useEffect, useRef } from "react";

export const VibrantBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let stars = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = window.innerWidth;
      const h = window.innerHeight;
      const palette = ["#ffffff", "#a5f3fc", "#f0abfc", "#ddd6fe", "#bef264"];
      stars = Array.from({ length: 110 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.4,
        a: Math.random() * Math.PI * 2,
        s: 0.005 + Math.random() * 0.025,
        c: palette[Math.floor(Math.random() * palette.length)],
        drift: (Math.random() - 0.5) * 0.05,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      stars.forEach((s) => {
        s.a += s.s;
        s.x += s.drift;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        const op = (Math.sin(s.a) * 0.5 + 0.5) * 0.85;
        ctx.fillStyle = s.c;
        ctx.globalAlpha = op * 0.55;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (s.r > 1) {
          ctx.globalAlpha = op * 0.18;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
          ctx.fill();
        }
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
      <div className="fixed inset-0 -z-30 bg-[#06030f]" />

      <div
        className="fixed inset-0 -z-30 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 40%, black 15%, transparent 75%)",
        }}
      />

      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute -top-44 -left-32 w-[640px] h-[640px] rounded-full bg-fuchsia-500/35 blur-[140px] animate-blob" />
        <div
          className="absolute top-1/4 -right-44 w-[720px] h-[720px] rounded-full bg-cyan-400/30 blur-[150px] animate-blob"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[580px] h-[580px] rounded-full bg-violet-500/30 blur-[140px] animate-blob"
          style={{ animationDelay: "-14s" }}
        />
        <div
          className="absolute -bottom-32 right-1/4 w-[460px] h-[460px] rounded-full bg-lime-300/15 blur-[130px] animate-blob"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-pink-400/12 blur-[140px] animate-blob"
          style={{ animationDelay: "-10s" }}
        />
      </div>

      <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />

      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/65" />

      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </>
  );
};
