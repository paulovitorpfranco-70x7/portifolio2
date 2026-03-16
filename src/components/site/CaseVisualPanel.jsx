function PanelShell({ palette, children }) {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] border border-white/60 p-6 shadow-[0_24px_50px_rgba(15,23,42,0.08)]"
      style={{
        background: `linear-gradient(180deg, ${palette.soft} 0%, rgba(255,255,255,0.95) 100%)`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_45%)]" />
      {children}
    </div>
  );
}

function CardsVariant({ palette }) {
  return (
    <div className="relative h-60">
      <div
        className="absolute inset-x-12 top-10 h-32 rounded-[1.6rem]"
        style={{ background: palette.accent, opacity: 0.32 }}
      />
      <div
        className="absolute inset-x-6 top-16 h-36 rounded-[1.8rem] border border-white/70"
        style={{ background: palette.base, opacity: 0.82 }}
      />
      <div className="absolute left-12 right-12 top-24">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="mb-3 h-2 rounded-full bg-white/60"
            style={{ width: `${82 - index * 10}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function GridVariant({ palette }) {
  return (
    <div className="grid h-60 grid-cols-2 gap-3">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="rounded-[1.5rem] border border-white/70"
          style={{
            background: index % 2 === 0 ? palette.base : palette.accent,
            opacity: index % 2 === 0 ? 0.8 : 0.38,
          }}
        />
      ))}
    </div>
  );
}

function TracksVariant({ palette }) {
  return (
    <div className="relative h-60">
      {[18, 34, 50, 66].map((top, index) => (
        <div
          key={top}
          className="absolute left-4 right-4 h-px"
          style={{
            top: `${top}%`,
            background: `linear-gradient(90deg, transparent, ${palette.base}, transparent)`,
            opacity: 0.6,
          }}
        />
      ))}
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="absolute h-4 w-4 rounded-full border border-white/70"
          style={{
            top: `${26 + index * 18}%`,
            left: `${22 + index * 18}%`,
            background: palette.base,
          }}
        />
      ))}
    </div>
  );
}

function StackVariant({ palette }) {
  return (
    <div className="relative h-60">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="absolute inset-x-10 rounded-[1.7rem] border border-white/70"
          style={{
            top: `${24 + index * 16}%`,
            height: "4.2rem",
            background: index === 1 ? palette.base : palette.accent,
            opacity: index === 1 ? 0.82 : 0.36,
          }}
        />
      ))}
    </div>
  );
}

function MapVariant({ palette }) {
  return (
    <div className="relative h-60">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 240" fill="none">
        <path d="M24 180 C80 160, 100 80, 160 100 S250 180, 296 76" stroke={palette.base} strokeWidth="4" strokeLinecap="round" />
        <path d="M34 52 C90 70, 118 144, 172 128 S252 72, 292 170" stroke={palette.accent} strokeWidth="4" strokeLinecap="round" opacity="0.8" />
      </svg>
      {[["26%", "70%"], ["48%", "40%"], ["72%", "56%"]].map(([left, top]) => (
        <div
          key={`${left}-${top}`}
          className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80"
          style={{ left, top, background: palette.base }}
        />
      ))}
    </div>
  );
}

function RingsVariant({ palette }) {
  return (
    <div className="relative flex h-60 items-center justify-center">
      <svg className="h-52 w-52" viewBox="0 0 100 100" fill="none">
        {[40, 30, 20, 10].map((radius) => (
          <circle
            key={radius}
            cx="50"
            cy="50"
            r={radius}
            stroke={palette.base}
            strokeWidth="1.1"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
}

function WaveVariant({ palette }) {
  return (
    <div className="relative h-60">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 240" fill="none">
        <path d="M0 120 C30 88, 64 150, 98 120 S166 88, 200 120 S268 152, 320 120" stroke={palette.base} strokeWidth="3.2" />
        <path d="M0 156 C30 124, 64 186, 98 156 S166 124, 200 156 S268 188, 320 156" stroke={palette.accent} strokeWidth="3.2" opacity="0.82" />
        <path d="M0 84 C30 52, 64 114, 98 84 S166 52, 200 84 S268 116, 320 84" stroke={palette.base} strokeWidth="3.2" opacity="0.48" />
      </svg>
    </div>
  );
}

const variantMap = {
  cards: CardsVariant,
  grid: GridVariant,
  tracks: TracksVariant,
  stack: StackVariant,
  map: MapVariant,
  rings: RingsVariant,
  wave: WaveVariant,
};

export default function CaseVisualPanel({ panel, palette }) {
  const Variant = variantMap[panel.variant] ?? CardsVariant;

  return (
    <PanelShell palette={palette}>
      <Variant palette={palette} />

      <div className="relative mt-4">
        <p className="text-sm font-semibold tracking-tight text-stone-900">
          {panel.title}
        </p>
        <p className="mt-2 text-sm leading-7 text-stone-600">{panel.caption}</p>
      </div>
    </PanelShell>
  );
}
