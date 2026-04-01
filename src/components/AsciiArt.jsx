import { useState, useEffect, useRef } from "react";

// 3D wireframe cube rendered as ASCII in a <pre> — rotates slowly
const CUBE_SIZE = 1.2;
const WIDTH = 32;
const HEIGHT = 22;

const vertices = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1,  1], [1, -1,  1], [1, 1,  1], [-1, 1,  1],
].map(([x, y, z]) => [x * CUBE_SIZE, y * CUBE_SIZE, z * CUBE_SIZE]);

const edges = [
  [0,1],[1,2],[2,3],[3,0], // back face
  [4,5],[5,6],[6,7],[7,4], // front face
  [0,4],[1,5],[2,6],[3,7], // connecting edges
];

function rotateY(v, a) {
  const cos = Math.cos(a), sin = Math.sin(a);
  return [v[0] * cos + v[2] * sin, v[1], -v[0] * sin + v[2] * cos];
}

function rotateX(v, a) {
  const cos = Math.cos(a), sin = Math.sin(a);
  return [v[0], v[1] * cos - v[2] * sin, v[1] * sin + v[2] * cos];
}

function project(v) {
  const fov = 4;
  const z = v[2] + fov;
  const scale = fov / z;
  return [v[0] * scale, v[1] * scale, v[2]];
}

function plotLine(x0, y0, x1, y1, z0, z1, grid, depthGrid) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const steps = Math.max(dx, dy, 1);
  for (let i = 0; i <= steps; i++) {
    const t = steps === 0 ? 0 : i / steps;
    const x = Math.round(x0 + (x1 - x0) * t);
    const y = Math.round(y0 + (y1 - y0) * t);
    const z = z0 + (z1 - z0) * t;
    if (x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
      grid[y][x] = true;
      depthGrid[y][x] = z;
    }
  }
}

function renderFrame(angleY, angleX) {
  const grid = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(false));
  const depthGrid = Array.from({ length: HEIGHT }, () => Array(WIDTH).fill(0));

  const projected = vertices.map((v) => {
    const r = rotateX(rotateY(v, angleY), angleX);
    return project(r);
  });

  // Plot edges
  for (const [a, b] of edges) {
    const [ax, ay, az] = projected[a];
    const [bx, by, bz] = projected[b];
    const sx = Math.round(ax * 6 + WIDTH / 2);
    const sy = Math.round(ay * 4 + HEIGHT / 2);
    const ex = Math.round(bx * 6 + WIDTH / 2);
    const ey = Math.round(by * 4 + HEIGHT / 2);
    plotLine(sx, sy, ex, ey, az, bz, grid, depthGrid);
  }

  // Plot vertices as bright points
  const vertexPositions = new Set();
  for (const [px, py] of projected) {
    const sx = Math.round(px * 6 + WIDTH / 2);
    const sy = Math.round(py * 4 + HEIGHT / 2);
    if (sx >= 0 && sx < WIDTH && sy >= 0 && sy < HEIGHT) {
      vertexPositions.add(`${sx},${sy}`);
    }
  }

  // Build output
  const lines = [];
  for (let y = 0; y < HEIGHT; y++) {
    let line = "";
    for (let x = 0; x < WIDTH; x++) {
      if (vertexPositions.has(`${x},${y}`)) {
        line += "◈";
      } else if (grid[y][x]) {
        const d = depthGrid[y][x];
        // Closer edges are brighter
        if (d > 0.3) line += "█";
        else if (d > -0.3) line += "▓";
        else line += "░";
      } else {
        line += " ";
      }
    }
    lines.push(line);
  }
  return lines;
}

const AsciiArt = ({ className = "" }) => {
  const [frame, setFrame] = useState(() => renderFrame(0.6, 0.4));
  const angleRef = useRef({ y: 0.6, x: 0.4 });
  const rafRef = useRef(null);

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      angleRef.current.y += dt * 0.4;
      angleRef.current.x += dt * 0.15;
      setFrame(renderFrame(angleRef.current.y, angleRef.current.x));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const charColor = (char) => {
    if (char === "◈") return "text-saffron";
    if (char === "█") return "text-saffron/70";
    if (char === "▓") return "text-indian-green/50";
    if (char === "░") return "text-cyan-400/30";
    return "";
  };

  return (
    <pre
      className={`font-code text-[10px] sm:text-[11px] md:text-xs leading-[1.2] select-none pointer-events-none whitespace-pre ${className}`}
    >
      {frame.map((line, i) => (
        <div key={i}>
          {[...line].map((char, j) =>
            char === " " ? (
              char
            ) : (
              <span key={j} className={charColor(char)}>
                {char}
              </span>
            )
          )}
        </div>
      ))}
    </pre>
  );
};

export default AsciiArt;
