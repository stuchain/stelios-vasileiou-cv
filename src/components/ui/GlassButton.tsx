import type { ReactNode } from "react";

export interface GlassButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit";
}

export default function GlassButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: GlassButtonProps) {
  const variantClass = variant === "primary" ? "glass-btn--primary" : "glass-btn--secondary";
  const baseClass = `glass-btn ${variantClass} ${className}`.trim();
  const isExternal = href?.startsWith("http") || href?.startsWith("mailto:") || href?.startsWith("//");

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}
