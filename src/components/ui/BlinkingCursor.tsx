export interface BlinkingCursorProps {
  className?: string;
}

export default function BlinkingCursor({ className = "" }: BlinkingCursorProps) {
  return <span className={`blinking-cursor ${className}`.trim()} aria-hidden="true" role="presentation" />;
}
