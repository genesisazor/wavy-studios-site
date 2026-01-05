import { useEffect, useRef } from "react";

const SineWave = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let animationId: number;
    let phase = 0;

    const animate = () => {
      phase += 0.03;
      if (pathRef.current) {
        const width = 400;
        const amplitude = 12;
        const frequency = 0.03;
        let d = `M 0 20`;

        for (let x = 0; x <= width; x++) {
          const y = 20 + Math.sin(x * frequency + phase) * amplitude;
          d += ` L ${x} ${y}`;
        }

        pathRef.current.setAttribute("d", d);
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <svg
        viewBox="0 0 400 40"
        className="w-full h-10"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          ref={pathRef}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default SineWave;
