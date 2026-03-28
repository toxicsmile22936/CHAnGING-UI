"use client";

import * as React from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

type OrbPalette = {
  base: string;
  glow: string;
  rim: string;
};

export type OrbSpec = {
  id: string;
  label?: string;
  size: number; // px
  x: number; // px (scene-local)
  y: number; // px (scene-local)
  depth: number; // 0.2..1 (parallax multiplier)
  z: number;
  palette: OrbPalette;
  icon?: React.ReactNode;
};

type OrbSceneProps = {
  className?: string;
};

function isFinePointer() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function isMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Light collision prevention: iterative relaxation on initial centers.
function relaxPositions(
  specs: OrbSpec[],
  minDist: number,
  passes: number,
): OrbSpec[] {
  const out = specs.map((s) => ({ ...s }));
  for (let p = 0; p < passes; p += 1) {
    for (let i = 0; i < out.length; i += 1) {
      for (let j = i + 1; j < out.length; j += 1) {
        const a = out[i];
        const b = out[j];
        const ax = a.x + a.size / 2;
        const ay = a.y + a.size / 2;
        const bx = b.x + b.size / 2;
        const by = b.y + b.size / 2;
        const dx = bx - ax;
        const dy = by - ay;
        const d = Math.hypot(dx, dy) || 0.0001;
        const push = (minDist - d) / 2;
        if (push <= 0) continue;
        const nx = dx / d;
        const ny = dy / d;
        // Push slightly more on smaller orbs to preserve hierarchy.
        const aw = 1 / Math.max(0.8, a.size / 90);
        const bw = 1 / Math.max(0.8, b.size / 90);
        a.x -= nx * push * aw;
        a.y -= ny * push * aw;
        b.x += nx * push * bw;
        b.y += ny * push * bw;
      }
    }
  }
  return out;
}

export function useParallax(enabled: boolean) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const targetX = React.useRef(0);
  const targetY = React.useRef(0);
  const raf = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      const nx = (e.clientX / w - 0.5) * 2;
      const ny = (e.clientY / h - 0.5) * 2;
      // Max offset handled downstream; keep unit [-1,1].
      targetX.current = clamp(nx, -1, 1);
      targetY.current = clamp(ny, -1, 1);
    };

    const tick = () => {
      const cx = px.get();
      const cy = py.get();
      // Lerp smoothing (no direct jumps).
      px.set(lerp(cx, targetX.current, 0.08));
      py.set(lerp(cy, targetY.current, 0.08));
      raf.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current !== null) window.cancelAnimationFrame(raf.current);
      raf.current = null;
      px.set(0);
      py.set(0);
    };
  }, [enabled, px, py]);

  return { px, py };
}

export function useFloating(id: string, reduced: boolean, intensity: number) {
  const seed = React.useMemo(() => {
    let h = 0;
    for (let i = 0; i < id.length; i += 1) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return h;
  }, [id]);

  const dur = 6 + (seed % 5); // 6..10
  const delay = -((seed % 1000) / 1000) * 2.4; // negative for desync
  const ampY = 10 * intensity + ((seed >> 3) % 4); // ~10..14
  const ampX = 5 * intensity + ((seed >> 7) % 3); // ~5..7
  const breathe = 1.04;

  if (reduced) {
    return { dur, delay, ampX: 0, ampY: 0, breathe: 1 };
  }
  return { dur, delay, ampX, ampY, breathe };
}

export function OrbScene({ className }: OrbSceneProps) {
  const reducedMotion = useReducedMotion();
  const [interactive, setInteractive] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [hovered, setHovered] = React.useState<string | null>(null);

  React.useEffect(() => {
    const update = () => {
      setInteractive(isFinePointer());
      setMobile(isMobileViewport() || !isFinePointer());
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const specs = React.useMemo(() => {
    const base: OrbSpec[] = [
      {
        id: "primary-pink",
        label: "Instagram",
        size: 112,
        x: 212,
        y: 10,
        depth: 0.35,
        z: 6,
        palette: {
          base:
            "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.36) 14%, rgba(255,150,182,0.92) 46%, rgba(255,112,150,0.92) 74%, rgba(206,142,255,0.85) 100%)",
          glow: "rgba(255, 148, 184, 0.38)",
          rim: "rgba(255,255,255,0.55)",
        },
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
              stroke="rgba(255,255,255,0.82)"
              strokeWidth="1.5"
            />
            <path
              d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
              stroke="rgba(255,255,255,0.82)"
              strokeWidth="1.5"
            />
            <path
              d="M17.6 6.4h.01"
              stroke="rgba(255,255,255,0.82)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        id: "graphite",
        label: "X",
        size: 92,
        x: 130,
        y: 88,
        depth: 0.7,
        z: 7,
        palette: {
          base:
            "radial-gradient(circle at 22% 22%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.2) 12%, rgba(54,62,86,0.92) 46%, rgba(19,21,30,0.98) 100%)",
          glow: "rgba(24, 26, 36, 0.18)",
          rim: "rgba(255,255,255,0.5)",
        },
        icon: <span className="text-[15px] font-bold tracking-[-0.01em] text-white/85">X</span>,
      },
      {
        id: "blue",
        label: "Facebook",
        size: 96,
        x: 246,
        y: 156,
        depth: 0.52,
        z: 5,
        palette: {
          base:
            "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.28) 14%, rgba(122,188,255,0.92) 46%, rgba(70,118,255,0.96) 100%)",
          glow: "rgba(120, 176, 255, 0.3)",
          rim: "rgba(255,255,255,0.52)",
        },
        icon: (
          <span className="text-[18px] font-bold leading-none text-white/85" style={{ transform: "translateY(1px)" }}>
            f
          </span>
        ),
      },
      {
        id: "cyan",
        label: "LinkedIn",
        size: 72,
        x: 302,
        y: 250,
        depth: 0.9,
        z: 4,
        palette: {
          base:
            "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.24) 14%, rgba(136,236,255,0.92) 48%, rgba(63,150,255,0.96) 100%)",
          glow: "rgba(120, 210, 255, 0.26)",
          rim: "rgba(255,255,255,0.5)",
        },
        icon: <span className="text-[14px] font-semibold tracking-[-0.02em] text-white/85">in</span>,
      },
      {
        id: "small-red",
        label: "YouTube",
        size: 58,
        x: 220,
        y: 206,
        depth: 1,
        z: 8,
        palette: {
          base:
            "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.25) 14%, rgba(255,140,160,0.92) 52%, rgba(232,56,88,0.96) 100%)",
          glow: "rgba(255, 114, 134, 0.26)",
          rim: "rgba(255,255,255,0.55)",
        },
        icon: (
          <span
            className="inline-block h-0 w-0"
            style={{
              borderLeft: "9px solid rgba(255,255,255,0.82)",
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              transform: "translateX(1px)",
            }}
          />
        ),
      },
      {
        id: "pale",
        label: "Eomeg",
        size: 50,
        x: 318,
        y: 44,
        depth: 0.25,
        z: 3,
        palette: {
          base:
            "radial-gradient(circle at 24% 22%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.62) 26%, rgba(205,216,255,0.72) 60%, rgba(154,178,255,0.82) 100%)",
          glow: "rgba(196, 210, 255, 0.22)",
          rim: "rgba(255,255,255,0.62)",
        },
        icon: <span className="text-[11px] font-semibold tracking-[-0.02em] text-white/70">Ae</span>,
      },
    ];

    const desktop = relaxPositions(base, 72, 6);
    if (!mobile) return desktop;

    // Mobile fallback: fewer orbs, calmer.
    return relaxPositions(
      desktop
        .filter((s) => ["primary-pink", "graphite", "blue", "cyan"].includes(s.id))
        .map((s) => ({ ...s, size: Math.round(s.size * 0.92) })),
      68,
      5,
    );
  }, [mobile]);

  const { px, py } = useParallax(interactive && !mobile && !reducedMotion);

  const maxOffset = mobile ? 10 : 14;
  const sceneW = mobile ? 320 : 380;
  const sceneH = mobile ? 300 : 380;

  const rootClassName = ["relative", className].filter(Boolean).join(" ");

  return (
    <div
      className={rootClassName}
      style={{ width: sceneW, height: sceneH }}
      onPointerLeave={() => setHovered(null)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 70% 42%, rgba(172, 186, 255, 0.32) 0%, rgba(172, 186, 255, 0) 62%), radial-gradient(circle at 62% 62%, rgba(255, 184, 218, 0.26) 0%, rgba(255, 184, 218, 0) 60%), radial-gradient(circle at 82% 76%, rgba(180, 244, 255, 0.22) 0%, rgba(180, 244, 255, 0) 55%)",
          }}
        />

        <svg
          className="absolute right-0 top-0 h-full w-full"
          viewBox="0 0 380 380"
          fill="none"
          aria-hidden
          style={{ opacity: mobile ? 0.05 : 0.08 }}
        >
          <circle cx="250" cy="170" r="130" stroke="rgba(140,162,242,0.55)" strokeWidth="1" />
          <circle cx="250" cy="170" r="90" stroke="rgba(140,162,242,0.45)" strokeWidth="1" />
          <circle cx="250" cy="170" r="56" stroke="rgba(140,162,242,0.35)" strokeWidth="1" />
        </svg>
      </div>

      {specs.map((spec) => (
        <Orb
          key={spec.id}
          spec={spec}
          reducedMotion={!!reducedMotion}
          mobile={mobile}
          maxParallax={maxOffset}
          px={px}
          py={py}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

type OrbProps = {
  spec: OrbSpec;
  reducedMotion: boolean;
  mobile: boolean;
  maxParallax: number;
  px: ReturnType<typeof useMotionValue<number>>;
  py: ReturnType<typeof useMotionValue<number>>;
  hovered: string | null;
  setHovered: (id: string | null) => void;
};

export function Orb({
  spec,
  reducedMotion,
  mobile,
  maxParallax,
  px,
  py,
  hovered,
  setHovered,
}: OrbProps) {
  const isHovered = hovered === spec.id;
  const isDimmed = hovered !== null && !isHovered;
  const intensity = mobile ? 0.78 : 1;
  const float = useFloating(spec.id, reducedMotion, intensity);

  const ox = useTransform(px, (v) => v * maxParallax * spec.depth);
  const oy = useTransform(py, (v) => v * maxParallax * spec.depth);

  const baseOpacity = isDimmed ? 0.62 : 1;
  const baseScale = isDimmed ? 0.96 : 1;
  const hoverScale = 1.08;

  return (
    <motion.div
      className="absolute"
      style={{
        left: spec.x,
        top: spec.y,
        width: spec.size,
        height: spec.size,
        zIndex: spec.z,
        willChange: "transform",
        x: ox,
        y: oy,
      }}
      onPointerEnter={() => setHovered(spec.id)}
      onPointerLeave={() => setHovered(null)}
    >
      <motion.div
        className="relative h-full w-full"
        animate={
          reducedMotion
            ? { scale: baseScale, opacity: baseOpacity }
            : {
                y: [0, -float.ampY, 0],
                x: [0, float.ampX, 0],
                scale: isHovered ? hoverScale : [baseScale, float.breathe * baseScale, baseScale],
                opacity: baseOpacity,
              }
        }
        transition={{
          duration: float.dur,
          ease: "easeInOut",
          repeat: reducedMotion ? 0 : Infinity,
          delay: float.delay,
        }}
      >
        <motion.div
          className="absolute inset-[-18%] rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${spec.palette.glow} 0%, rgba(0,0,0,0) 62%)`,
            opacity: isHovered ? 0.9 : 0.55,
            willChange: "transform",
          }}
        />

        <motion.div
          className="relative h-full w-full rounded-full"
          style={{
            background: spec.palette.base,
            filter: isDimmed ? "blur(0.4px)" : "none",
            boxShadow: "0 18px 34px rgba(34, 44, 80, 0.14), inset 0 0 24px rgba(255,255,255,0.12)",
            border: `1px solid rgba(255,255,255,0.32)`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 28% 24%, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.28) 18%, rgba(255,255,255,0) 52%)",
              opacity: 0.9,
              mixBlendMode: "screen",
            }}
          />

          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 72% 78%, rgba(18,22,40,0.18) 0%, rgba(18,22,40,0) 54%)",
              opacity: 0.8,
              mixBlendMode: "multiply",
            }}
          />

          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: `inset 0 0 0 1px ${spec.palette.rim}`,
              opacity: 0.55,
            }}
          />

          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 46%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 60%), radial-gradient(circle at 60% 60%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 65%)",
              opacity: isHovered ? 0.7 : 0.5,
            }}
          />

          <div className="absolute inset-0 grid place-items-center">
            <div
              className={[
                "grid place-items-center rounded-full bg-white/5 px-3 py-2",
                mobile ? "backdrop-blur-[10px]" : "backdrop-blur-[14px]",
              ].join(" ")}
            >
              <div className="grid place-items-center">{spec.icon}</div>
            </div>
          </div>
        </motion.div>

        {spec.label && (
          <motion.div
            className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-[#2b3868] shadow-[0_10px_24px_rgba(176,191,244,0.18)] backdrop-blur-md"
            initial={false}
            animate={
              isHovered
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -6, scale: 0.98 }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {spec.label}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
