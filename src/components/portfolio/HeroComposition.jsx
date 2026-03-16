import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const defaultPieces = [];

const compositionPhases = [
  {
    "silabala-plus": { x: 19.5, y: 41.5, radius: "3rem" },
    datacheck: { x: 57, y: 25, radius: "50%" },
    "crystal-flow": { x: 80, y: 47, radius: "6.5rem" },
    "ai-lab": { x: 42, y: 77, radius: "999px 999px 0 0" },
  },
  {
    "silabala-plus": { x: 22.5, y: 44, radius: "4rem 1.1rem 1.1rem 4rem" },
    datacheck: {
      x: 53.5,
      y: 28,
      radius: "43% 57% 49% 51% / 48% 46% 54% 52%",
    },
    "crystal-flow": { x: 75.5, y: 44.5, radius: "1.1rem 4rem 4rem 1.1rem" },
    "ai-lab": { x: 44.5, y: 73.5, radius: "6rem 6rem 1.5rem 1.5rem" },
  },
  {
    "silabala-plus": { x: 20.5, y: 39, radius: "2.2rem 4.4rem 2.2rem 4.4rem" },
    datacheck: { x: 58.5, y: 26.5, radius: "50%" },
    "crystal-flow": { x: 78.5, y: 41.5, radius: "4.4rem 2.2rem 4.4rem 2.2rem" },
    "ai-lab": { x: 47, y: 75.5, radius: "999px 999px 0 0" },
  },
  {
    "silabala-plus": { x: 17.5, y: 46, radius: "4.6rem 1rem 3rem 1rem" },
    datacheck: { x: 53, y: 23, radius: "50%" },
    "crystal-flow": { x: 81.5, y: 50.5, radius: "1rem 4.6rem 1rem 3rem" },
    "ai-lab": { x: 46, y: 79, radius: "999px 999px 0 0" },
  },
];

function toCssSize(value) {
  return typeof value === "number" ? `${value}px` : value;
}

function getPieceDimensions(piece) {
  if (piece.shape === "circle") {
    return { width: toCssSize(piece.size), height: toCssSize(piece.size) };
  }

  if (piece.shape === "half-circle") {
    const size = toCssSize(piece.size);
    return { width: size, height: `calc(${size} / 2)` };
  }

  return { width: toCssSize(piece.width), height: toCssSize(piece.height) };
}

function getTextColor(piece) {
  return piece.color === "#ffd541" ? "#242424" : "#FFFFFF";
}

function RoundedRectSurface({ piece, radius, isHovered }) {
  const { width, height } = getPieceDimensions(piece);
  const textColor = getTextColor(piece);

  return (
    <motion.div
      className="relative overflow-hidden shadow-[0_24px_48px_rgba(15,23,42,0.11)]"
      style={{ width, height }}
      animate={{
        backgroundColor: isHovered ? piece.hoverColor : piece.color,
        borderRadius: radius,
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="absolute left-[18%] right-[18%] top-[18%] opacity-20"
        animate={{ y: isHovered ? -3 : 0 }}
      >
        {[0, 1, 2, 3].map((line) => (
          <motion.div
            key={line}
            className="mb-4 h-px bg-white"
            animate={{ scaleX: isHovered ? 1 : 0.92 }}
            transition={{ duration: 0.3, delay: line * 0.04 }}
          />
        ))}
      </motion.div>

      <div className="absolute bottom-[12%] left-[12%] right-[12%]">
        <motion.h3
          className="text-[clamp(1.08rem,1.35vw,1.55rem)] font-semibold tracking-tight"
          style={{ color: textColor }}
          animate={{ y: isHovered ? -3 : 0 }}
        >
          {piece.name}
        </motion.h3>
        <motion.p
          className="mt-2 text-[clamp(0.78rem,0.82vw,0.96rem)] font-medium"
          style={{ color: textColor, opacity: 0.76 }}
          animate={{ opacity: isHovered ? 0.9 : 0.72 }}
        >
          {piece.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function CircleSurface({ piece, radius, isHovered }) {
  const { width, height } = getPieceDimensions(piece);
  const textColor = getTextColor(piece);

  return (
    <motion.div
      className="relative overflow-hidden shadow-[0_24px_48px_rgba(15,23,42,0.11)]"
      style={{ width, height }}
      animate={{
        backgroundColor: isHovered ? piece.hoverColor : piece.color,
        borderRadius: radius,
        scale: isHovered ? 1.035 : 1,
      }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.svg
        className="absolute inset-0 opacity-22"
        viewBox="0 0 100 100"
        fill="none"
        animate={{ rotate: isHovered ? 5 : 0 }}
        transition={{ duration: 0.45 }}
      >
        {[42, 33, 24, 15].map((radiusValue) => (
          <circle
            key={radiusValue}
            cx="50"
            cy="50"
            r={radiusValue}
            stroke={textColor}
            strokeWidth="0.72"
            opacity="0.82"
          />
        ))}
      </motion.svg>

      <div className="absolute inset-x-0 bottom-[16%] text-center">
        <motion.h3
          className="text-[clamp(1.05rem,1.38vw,1.55rem)] font-semibold tracking-tight"
          style={{ color: textColor }}
          animate={{ y: isHovered ? -3 : 0 }}
        >
          {piece.name}
        </motion.h3>
        <motion.p
          className="mt-2 text-[clamp(0.78rem,0.82vw,0.96rem)] font-medium"
          style={{ color: textColor, opacity: 0.62 }}
          animate={{ opacity: isHovered ? 0.78 : 0.62 }}
        >
          {piece.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function HalfCircleSurface({ piece, radius, isHovered }) {
  const { width, height } = getPieceDimensions(piece);
  const textColor = getTextColor(piece);

  return (
    <motion.div
      className="relative overflow-hidden shadow-[0_24px_48px_rgba(15,23,42,0.11)]"
      style={{ width, height }}
      animate={{
        backgroundColor: isHovered ? piece.hoverColor : piece.color,
        borderRadius: radius,
        scale: isHovered ? 1.03 : 1,
      }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.svg
        className="absolute left-[10%] right-[10%] top-[16%] opacity-22"
        viewBox="0 0 240 60"
        fill="none"
        animate={{ x: isHovered ? 6 : 0 }}
        transition={{ duration: 0.45 }}
      >
        <path d="M0 12 C25 2, 55 22, 80 12 S135 2, 160 12 S215 22, 240 12" stroke="white" strokeWidth="0.95" />
        <path d="M0 28 C25 18, 55 38, 80 28 S135 18, 160 28 S215 38, 240 28" stroke="white" strokeWidth="0.95" />
        <path d="M0 44 C25 34, 55 54, 80 44 S135 34, 160 44 S215 54, 240 44" stroke="white" strokeWidth="0.95" />
      </motion.svg>

      <div className="absolute bottom-[14%] left-[12%] right-[12%]">
        <motion.h3
          className="text-[clamp(1.02rem,1.3vw,1.48rem)] font-semibold tracking-tight"
          style={{ color: textColor }}
          animate={{ y: isHovered ? -3 : 0 }}
        >
          {piece.name}
        </motion.h3>
        <motion.p
          className="mt-2 text-[clamp(0.76rem,0.8vw,0.94rem)] font-medium"
          style={{ color: textColor, opacity: 0.72 }}
          animate={{ opacity: isHovered ? 0.88 : 0.72 }}
        >
          {piece.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

const surfaceMap = {
  "rounded-rect": RoundedRectSurface,
  circle: CircleSurface,
  "half-circle": HalfCircleSurface,
};

export default function HeroComposition({ pieces = defaultPieces, className = "" }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhaseIndex((current) => (current + 1) % compositionPhases.length);
    }, 2100);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative h-[clamp(420px,64svh,560px)] w-full overflow-hidden sm:h-[clamp(470px,66svh,600px)] lg:h-[clamp(500px,68svh,620px)] ${className}`}
    >
      <div className="absolute inset-x-3 bottom-4 top-3 sm:inset-x-6 sm:bottom-6 sm:top-5 lg:inset-x-8 lg:bottom-8 lg:top-6">
        <div className="pointer-events-none absolute inset-0">
          {[18, 34, 50, 66, 82].map((top, index) => (
            <motion.div
              key={top}
              className="absolute left-0 right-0 h-px bg-stone-300/70"
              style={{ top: `${top}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.3,
                delay: 0.25 + index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          ))}
        </div>

        {pieces.map((piece) => {
          const Surface = surfaceMap[piece.shape] ?? RoundedRectSurface;
          const isHovered = hoveredId === piece.id;
          const activePhase = compositionPhases[phaseIndex]?.[piece.id] ?? {
            x: piece.x,
            y: piece.y,
            radius: piece.shape === "half-circle" ? "999px 999px 0 0" : piece.shape === "circle" ? "50%" : "3rem",
          };
          const isInteractive = Boolean(piece.href);

          return (
            <motion.div
              key={piece.id}
              className={`absolute ${isInteractive ? "cursor-pointer" : ""}`}
              style={{ left: `${piece.x}%`, top: `${piece.y}%` }}
              transformTemplate={(_, generatedTransform) =>
                `translate(-50%, -50%) ${generatedTransform ?? ""}`
              }
              initial={{ opacity: 0, scale: 0.78, y: 28 }}
              animate={{
                left: `${activePhase.x}%`,
                top: `${activePhase.y}%`,
                opacity: 1,
                scale: isHovered ? 1.02 : 1,
                y: isHovered ? -10 : 0,
              }}
              transition={{
                opacity: { duration: 0.8, delay: piece.delay },
                scale: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] },
                left: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
                top: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
                y: { duration: 0.24 },
              }}
              onHoverStart={() => setHoveredId(piece.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => {
                if (piece.href) {
                  navigate(piece.href);
                }
              }}
              onKeyDown={(event) => {
                if (piece.href && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  navigate(piece.href);
                }
              }}
              role={isInteractive ? "button" : undefined}
              tabIndex={isInteractive ? 0 : undefined}
              aria-label={isInteractive ? `Open ${piece.name}` : undefined}
            >
              <motion.div
                className="absolute -inset-6 rounded-full blur-3xl"
                style={{ background: piece.hoverColor }}
                animate={{ opacity: isHovered ? 0.12 : 0 }}
                transition={{ duration: 0.35 }}
              />

              <Surface piece={piece} radius={activePhase.radius} isHovered={isHovered} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
