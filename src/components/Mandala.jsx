const Mandala = ({ size = 500, className = "" }) => {
  const petals = (count, radius, rx, ry, color) =>
    Array.from({ length: count }, (_, i) => (
      <ellipse
        key={`p-${count}-${i}`}
        cx="0"
        cy={-radius}
        rx={rx}
        ry={ry}
        fill="none"
        stroke={color}
        strokeWidth="0.7"
        transform={`rotate(${(360 / count) * i} 0 0)`}
      />
    ));

  const dots = (count, radius, r, color) =>
    Array.from({ length: count }, (_, i) => {
      const angle = ((Math.PI * 2) / count) * i;
      return (
        <circle
          key={`d-${count}-${i}`}
          cx={Math.cos(angle) * radius}
          cy={Math.sin(angle) * radius}
          r={r}
          fill={color}
        />
      );
    });

  return (
    <svg
      width={size}
      height={size}
      viewBox="-300 -300 600 600"
      className={`mandala-spin ${className}`}
    >
      {/* Outer rings */}
      <circle cx="0" cy="0" r="260" fill="none" stroke="#FF9933" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="255" fill="none" stroke="#138808" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="248" fill="none" stroke="#FF9933" strokeWidth="0.3" strokeDasharray="8 4" />

      {/* Outer dots */}
      {dots(32, 242, 2.5, "#FF9933")}
      {dots(32, 232, 1.5, "#138808")}

      {/* Diamond accents */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = ((Math.PI * 2) / 8) * i;
        const x = Math.cos(angle) * 218;
        const y = Math.sin(angle) * 218;
        const rot = (360 / 8) * i;
        return (
          <rect
            key={`dm-${i}`}
            x={x - 5}
            y={y - 5}
            width="10"
            height="10"
            fill="none"
            stroke="#FF9933"
            strokeWidth="0.8"
            transform={`rotate(${rot + 45} ${x} ${y})`}
          />
        );
      })}

      {/* Petal layers */}
      {petals(16, 195, 18, 50, "#FF9933")}
      <circle cx="0" cy="0" r="170" fill="none" stroke="#FF993330" strokeWidth="0.5" strokeDasharray="6 3" />

      {petals(12, 135, 14, 38, "#138808")}
      <circle cx="0" cy="0" r="115" fill="none" stroke="#13880830" strokeWidth="0.5" strokeDasharray="4 4" />

      {petals(8, 82, 11, 28, "#FF9933")}
      <circle cx="0" cy="0" r="68" fill="none" stroke="#FF993330" strokeWidth="0.5" />

      {/* Center lotus */}
      {petals(10, 34, 8, 26, "#FF9933")}
      {petals(10, 24, 5, 18, "#138808")}

      {/* Center circle */}
      <circle cx="0" cy="0" r="12" fill="none" stroke="#FF9933" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="4" fill="#FF9933" opacity="0.5" />
    </svg>
  );
};

export default Mandala;
