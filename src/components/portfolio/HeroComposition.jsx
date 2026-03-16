import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const defaultPieces = [];

const compositionPhases = [
  {
    "silabala-plus": { x: 18.5, y: 50, radius: "3rem" },
    datacheck: { x: 53.5, y: 27, radius: "50%" },
    "crystal-flow": { x: 79, y: 62, radius: "6.5rem" },
    "ai-lab": { x: 43, y: 81, radius: "999px 999px 0 0" },
  },
  {
    "silabala-plus": { x: 21.5, y: 48, radius: "4rem 1.1rem 1.1rem 4rem" },
    datacheck: {
      x: 51.5,
      y: 30,
      radius: "43% 57% 49% 51% / 48% 46% 54% 52%",
    },
    "crystal-flow": { x: 76.5, y: 65, radius: "1.1rem 4rem 4rem 1.1rem" },
    "ai-lab": { x: 45.5, y: 78.5, radius: "6rem 6rem 1.5rem 1.5rem" },
  },
  {
    "silabala-plus": { x: 20, y: 52.5, radius: "2.2rem 4.4rem 2.2rem 4.4rem" },
    datacheck: { x: 56.5, y: 24.5, radius: "50%" },
    "crystal-flow": { x: 78.5, y: 67, radius: "4.4rem 2.2rem 4.4rem 2.2rem" },
    "ai-lab": { x: 48, y: 82, radius: "999px 999px 0 0" },
  },
  {
    "silabala-plus": { x: 17.5, y: 47.5, radius: "4.6rem 1rem 3rem 1rem" },
    datacheck: { x: 52.5, y: 28, radius: "50%" },
    "crystal-flow": { x: 81.5, y: 63.5, radius: "1rem 4.6rem 1rem 3rem" },
    "ai-lab": { x: 44.5, y: 79.5, radius: "999px 999px 0 0" },
  },
];

const staffLines = [18, 34, 50, 66, 82];
const measureBars = [12, 38, 64, 90];
const tempoModes = {
  adagio: { label: "Adagio", interval: 3100, playheadDuration: 10.5 },
  moderato: { label: "Moderato", interval: 2300, playheadDuration: 7.4 },
  allegro: { label: "Allegro", interval: 1700, playheadDuration: 5.1 },
};

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

function getStemColor(piece) {
  return piece.color === "#ffd541" ? "rgba(36, 36, 36, 0.34)" : "rgba(255, 255, 255, 0.42)";
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

function PieceStem({ piece, isHovered }) {
  if (!piece.stemDirection) {
    return null;
  }

  const stemLength = piece.stemLength ?? "clamp(48px, 6vw, 84px)";
  const stemColor = getStemColor(piece);
  const sideClass =
    piece.stemSide === "left"
      ? "left-[15%]"
      : piece.stemSide === "center"
        ? "left-1/2 -translate-x-1/2"
        : "right-[15%]";

  const stemStyle =
    piece.stemDirection === "up"
      ? { bottom: "calc(100% + 0.45rem)", height: stemLength, background: stemColor }
      : { top: "calc(100% + 0.45rem)", height: stemLength, background: stemColor };

  const headStyle =
    piece.stemDirection === "up"
      ? { bottom: `calc(100% + ${stemLength} + 0.3rem)`, background: stemColor }
      : { top: `calc(100% + ${stemLength} + 0.3rem)`, background: stemColor };
  const originClass = piece.stemDirection === "up" ? "origin-bottom" : "origin-top";

  return (
    <>
      <motion.div
        className={`absolute ${sideClass} w-px ${originClass}`}
        style={stemStyle}
        animate={{ opacity: isHovered ? 0.82 : 0.45, scaleY: isHovered ? 1.06 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={`absolute ${sideClass} h-2.5 w-2.5 rounded-full`}
        style={headStyle}
        animate={{ opacity: isHovered ? 0.92 : 0.62, scale: isHovered ? 1.12 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
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
  const [tempoKey, setTempoKey] = useState("moderato");
  const navigate = useNavigate();
  const tempo = tempoModes[tempoKey];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhaseIndex((current) => (current + 1) % compositionPhases.length);
    }, tempo.interval);

    return () => window.clearInterval(interval);
  }, [tempo.interval]);

  return (
    <div
      className={`relative h-[clamp(420px,64svh,560px)] w-full overflow-hidden sm:h-[clamp(470px,66svh,600px)] lg:h-[clamp(500px,68svh,620px)] ${className}`}
    >
      <div className="absolute right-0 top-0 z-20 flex items-center gap-3 rounded-full border border-stone-200/80 bg-white/72 px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-stone-500 shadow-sm shadow-stone-950/5 backdrop-blur-sm">
        <span className="text-stone-400">Tempo</span>
        <div className="flex items-center gap-1.5">
          {Object.entries(tempoModes).map(([key, option]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTempoKey(key)}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                tempoKey === key
                  ? "bg-stone-950 text-stone-50"
                  : "bg-transparent text-stone-500 hover:bg-stone-950/6 hover:text-stone-950"
              }`}
              aria-pressed={tempoKey === key}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-3 bottom-4 top-3 sm:inset-x-6 sm:bottom-6 sm:top-5 lg:inset-x-8 lg:bottom-8 lg:top-6">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute inset-y-1 left-0 w-px bg-gradient-to-b from-transparent via-stone-500/35 to-transparent"
            animate={{ x: ["0%", "100%"] }}
            transition={{
              duration: tempo.playheadDuration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {measureBars.map((left) => (
            <div
              key={left}
              className="absolute bottom-0 top-0 w-px bg-stone-300/40"
              style={{ left: `${left}%` }}
            />
          ))}

          {staffLines.map((top, index) => (
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

          <div className="absolute left-0 top-0 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-stone-400">
            Score for selected work
          </div>
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
              <PieceStem piece={piece} isHovered={isHovered} />

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
