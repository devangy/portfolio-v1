import { useEffect, useRef } from "react";

export const FogBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let embers = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = window.innerWidth;
      const h = window.innerHeight;
      particles = Array.from({ length: 22 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 120 + Math.random() * 220,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        a: 0.04 + Math.random() * 0.06,
        hue: Math.random() < 0.18 ? "ember" : "fog",
      }));
      embers = Array.from({ length: 35 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: -(0.15 + Math.random() * 0.55),
        vx: (Math.random() - 0.5) * 0.25,
        size: 0.6 + Math.random() * 1.6,
        life: Math.random() * 1,
        baseLife: 0.5 + Math.random() * 0.6,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.fillStyle = "rgba(2, 2, 4, 1)";
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = w + p.r;
        if (p.x > w + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = h + p.r;
        if (p.y > h + p.r) p.y = -p.r;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        if (p.hue === "ember") {
          grad.addColorStop(0, `rgba(180, 30, 30, ${p.a * 1.6})`);
          grad.addColorStop(1, "rgba(180, 30, 30, 0)");
        } else {
          grad.addColorStop(0, `rgba(70, 70, 90, ${p.a})`);
          grad.addColorStop(1, "rgba(70, 70, 90, 0)");
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      embers.forEach((e) => {
        e.x += e.vx;
        e.y += e.vy;
        e.life += 0.004;
        if (e.life >= e.baseLife) {
          e.life = 0;
          e.x = Math.random() * w;
          e.y = h + 20;
        }
        const fade = 1 - e.life / e.baseLife;
        ctx.fillStyle = `rgba(255, ${100 + Math.random() * 60}, 40, ${fade * 0.55})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
      });

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
      <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/70" />
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
