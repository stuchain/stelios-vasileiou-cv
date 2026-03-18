import { motion } from "framer-motion";
import { profile, social } from "../data/generated";
import GlassPanel from "./ui/GlassPanel";
import GlassButton from "./ui/GlassButton";
import BlinkingCursor from "./ui/BlinkingCursor";

export default function Hero() {
  return (
    <div className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <GlassPanel className="hero-card">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-tagline">
            {profile.tagline}
            {profile.taglineLine2 && (
              <>
                <br />
                {profile.taglineLine2}
              </>
            )}
            <BlinkingCursor />
          </p>
          <div className="hero-ctas">
            <GlassButton href="#projects">View Projects</GlassButton>
            <GlassButton href={social.github}>GitHub</GlassButton>
            <GlassButton href="#contact" variant="secondary">
              Contact
            </GlassButton>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  );
}
