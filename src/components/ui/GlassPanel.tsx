import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export interface GlassPanelProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  as?: "div" | "section";
}

export default function GlassPanel({
  children,
  className = "",
  hoverable = false,
  as: _as = "div",
  ...rest
}: GlassPanelProps) {
  const classes = `glass-panel${hoverable ? " glass-panel--hoverable" : ""} ${className}`.trim();

  if (_as === "section") {
    return (
      <motion.section className={classes} {...(rest as HTMLMotionProps<"section">)}>
        {children}
      </motion.section>
    );
  }

  return (
    <motion.div className={classes} {...rest}>
      {children}
    </motion.div>
  );
}
