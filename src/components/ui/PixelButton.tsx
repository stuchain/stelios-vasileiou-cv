import type { ReactNode } from "react";

export interface PixelButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function PixelButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: PixelButtonProps) {
  const variantClass = variant === "primary" ? "pixel-btn--primary" : "pixel-btn--secondary";
  const baseClass = `pixel-btn ${variantClass} ${className}`.trim();

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
    <button type="button" className={baseClass} onClick={onClick}>
      {children}
    </button>
  );
}
