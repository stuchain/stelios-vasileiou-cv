import type { ReactNode } from "react";

export interface PixelPanelProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}

export default function PixelPanel({ children, className = "", as: Component = "div" }: PixelPanelProps) {
  return <Component className={`pixel-panel ${className}`.trim()}>{children}</Component>;
}
