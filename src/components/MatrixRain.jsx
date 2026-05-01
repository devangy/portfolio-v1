import { useEffect, useRef } from "react";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ01░▒▓│║◆◇◈⚡✦";

export const MatrixRain = ({ opacity = 0.07 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let columns = [];
    const fontSize = 16;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const colCount = Math.floor(window.innerWidth / fontSize);
      columns = Array.from({ length: colCount }, () => ({
        y: Math.random() * -window.innerHeight,
        speed: 0.7 + Math.random() * 1.2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let last = performance.now();
    const draw = (now) => {
      const dt = now - last;
      if (dt > 70) {
        last = now;
        ctx.fillStyle = "rgba(5, 5, 7, 0.10)";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.font = `${fontSize - 2}px 'JetBrains Mono', monospace`;
        for (let i = 0; i < columns.length; i++) {
          const col = columns[i];
          const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
          const x = i * fontSize;
          ctx.fillStyle = "rgba(181, 255, 0, 0.85)";
          ctx.fillText(ch, x, col.y);
          ctx.fillStyle = "rgba(0, 240, 255, 0.20)";
          ctx.fillText(ch, x, col.y - fontSize);
          ctx.fillStyle = "rgba(0, 240, 255, 0.07)";
          ctx.fillText(ch, x, col.y - fontSize * 2);
          if (col.y > window.innerHeight && Math.random() > 0.985) col.y = 0;
          col.y += fontSize * col.speed;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
