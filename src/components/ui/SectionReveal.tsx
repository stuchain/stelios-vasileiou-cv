import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  void delay;
  return (
    <div className={`section-reveal ${className}`.trim()}>
      {children}
    </div>
  );
}
