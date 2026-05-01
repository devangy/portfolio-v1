import { useEffect, useRef } from "react";

export const AudioVisualizer = ({
  playing = true,
  bars = 48,
  height = 56,
  colors = ["#38e1ff", "#ff2bd6", "#a855f7"],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;
    const seeds = Array.from({ length: bars }, () => Math.random() * Math.PI * 2);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const hexToRgb = (h) => {
      const m = h.replace("#", "");
      const n = parseInt(m, 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    };
    const rgbs = colors.map(hexToRgb);
    const sampleColor = (p) => {
      const seg = (rgbs.length - 1) * p;
      const i = Math.min(rgbs.length - 2, Math.floor(seg));
      const f = seg - i;
      const a = rgbs[i];
      const b = rgbs[i + 1];
      return [
        Math.round(a[0] + (b[0] - a[0]) * f),
        Math.round(a[1] + (b[1] - a[1]) * f),
        Math.round(a[2] + (b[2] - a[2]) * f),
      ];
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const gap = 2;
      const barW = (w - gap * (bars - 1)) / bars;
      t += playing ? 0.012 : 0.002;

      for (let i = 0; i < bars; i++) {
        const center = bars / 2;
        const dist = Math.abs(i - center) / center;
        const wave =
          (Math.sin(t * 1.4 + seeds[i]) * 0.5 + 0.5) *
          (Math.sin(t * 0.7 + i * 0.3) * 0.3 + 0.7);
        const env = 1 - Math.pow(dist, 2.2);
        const energy = playing ? 0.18 + wave * 0.82 * env : 0.08 + wave * 0.05;
        const bh = Math.max(2, energy * h);
        const x = i * (barW + gap);
        const y = (h - bh) / 2;

        const [r, g, b] = sampleColor(i / (bars - 1));
        const grad = ctx.createLinearGradient(0, y, 0, y + bh);
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
        grad.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, 0.75)`);
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.18)`);
        ctx.fillStyle = grad;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.9)`;
        ctx.shadowBlur = 12;
        ctx.fillRect(x, y, barW, bh);
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [bars, playing, colors]);

  return (
    <canvas
      ref={canvasRef}
      style={{ height }}
      className="w-full block"
      aria-hidden="true"
    />
  );
};
