import { motion } from "framer-motion";
import { useTheme, ACCENT_MAP, type BackgroundStyle } from "../../contexts/ThemeContext";

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

/* ── Blobs ── */
const BLOBS = [
  { size: "45vmax", duration: 22, offsetX: ["-10%", "15%", "-5%", "-10%"], offsetY: ["-15%", "10%", "5%", "-15%"] },
  { size: "40vmax", duration: 26, offsetX: ["60%", "50%", "70%", "60%"], offsetY: ["0%", "20%", "-10%", "0%"] },
  { size: "35vmax", duration: 20, offsetX: ["20%", "40%", "10%", "20%"], offsetY: ["60%", "50%", "75%", "60%"] },
  { size: "30vmax", duration: 24, offsetX: ["70%", "55%", "80%", "70%"], offsetY: ["70%", "55%", "80%", "70%"] },
];

function BlobsBg({ rgb, baseLightness, accent }: { rgb: string; baseLightness: number; accent: string }) {
  return (
    <>
      {BLOBS.map((blob, i) => {
        const opacity = baseLightness + (i % 2 === 0 ? 0.05 : 0);
        return (
          <motion.div
            key={`${accent}-blob-${i}`}
            className="animated-bg-blob"
            style={{
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle, rgba(${rgb}, ${opacity}) 0%, transparent 70%)`,
            }}
            animate={{ left: blob.offsetX, top: blob.offsetY }}
            transition={{ duration: blob.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
    </>
  );
}

/* ── Aurora ── */
function AuroraBg({ rgb, baseLightness, accent }: { rgb: string; baseLightness: number; accent: string }) {
  const layers = [
    { rotate: [0, 15, -10, 0], scale: [1, 1.15, 0.95, 1], duration: 18 },
    { rotate: [0, -12, 8, 0], scale: [1.1, 0.9, 1.15, 1.1], duration: 22 },
    { rotate: [5, -5, 10, 5], scale: [0.95, 1.1, 1, 0.95], duration: 26 },
  ];
  return (
    <>
      {layers.map((layer, i) => (
        <motion.div
          key={`${accent}-aurora-${i}`}
          className="animated-bg-aurora"
          style={{
            background: `conic-gradient(
              from ${i * 120}deg,
              rgba(${rgb}, ${baseLightness + 0.08}) 0%,
              transparent 30%,
              rgba(${rgb}, ${baseLightness + 0.04}) 50%,
              transparent 70%,
              rgba(${rgb}, ${baseLightness + 0.06}) 100%
            )`,
            filter: "blur(60px)",
          }}
          animate={{ rotate: layer.rotate, scale: layer.scale }}
          transition={{ duration: layer.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

/* ── Waves ── */
function WavesBg({ rgb, baseLightness, accent }: { rgb: string; baseLightness: number; accent: string }) {
  const waves = [
    { height: "60vh", bottom: "-20%", duration: 16, y: ["0%", "-8%", "4%", "0%"] },
    { height: "50vh", bottom: "-25%", duration: 20, y: ["0%", "6%", "-5%", "0%"] },
    { height: "45vh", bottom: "-30%", duration: 24, y: ["0%", "-4%", "7%", "0%"] },
  ];
  return (
    <>
      {waves.map((wave, i) => (
        <motion.div
          key={`${accent}-wave-${i}`}
          className="animated-bg-wave"
          style={{
            height: wave.height,
            bottom: wave.bottom,
            background: `linear-gradient(180deg, rgba(${rgb}, ${baseLightness + 0.06 - i * 0.015}) 0%, transparent 100%)`,
            filter: "blur(40px)",
          }}
          animate={{ y: wave.y, rotate: [0, 1, -1, 0] }}
          transition={{ duration: wave.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

/* ── Grid ── */
function GridBg({ rgb, accent }: { rgb: string; accent: string }) {
  return (
    <motion.div
      key={`${accent}-grid`}
      className="animated-bg-grid"
      style={{
        backgroundImage: `
          linear-gradient(rgba(${rgb}, 0.25) 1px, transparent 1px),
          linear-gradient(90deg, rgba(${rgb}, 0.25) 1px, transparent 1px)
        `,
      }}
      animate={{ opacity: [0.12, 0.18, 0.12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ── Renderer map ── */
const BG_RENDERERS: Record<
  Exclude<BackgroundStyle, "none">,
  React.FC<{ rgb: string; baseLightness: number; accent: string }>
> = {
  blobs: BlobsBg,
  aurora: AuroraBg,
  waves: WavesBg,
  grid: GridBg,
};

export default function AnimatedBackground() {
  const { accent, mode, background } = useTheme();
  if (background === "none") return null;

  const accentHex = ACCENT_MAP[accent];
  const rgb = hexToRgb(accentHex);
  const baseLightness = mode === "dark" ? 0.15 : 0.12;

  const Renderer = BG_RENDERERS[background];

  return (
    <div className="animated-bg" aria-hidden="true">
      <Renderer rgb={rgb} baseLightness={baseLightness} accent={accent} />
    </div>
  );
}
