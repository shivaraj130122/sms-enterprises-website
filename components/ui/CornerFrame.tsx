import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

/**
 * Signature brand element: gold surveyor / blueprint corner brackets.
 * Wrap any panel to give it the "plotted layout" identity.
 */
export default function CornerFrame({
  children,
  className,
  size = 16,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  const style = { "--corner-size": `${size}px` } as CSSProperties;
  const bracket = "absolute h-[var(--corner-size)] w-[var(--corner-size)] border-gold-500/60";

  return (
    <div className={cn("relative", className)} style={style}>
      <span className={cn(bracket, "left-0 top-0 border-l-2 border-t-2")} aria-hidden="true" />
      <span className={cn(bracket, "right-0 top-0 border-r-2 border-t-2")} aria-hidden="true" />
      <span className={cn(bracket, "bottom-0 left-0 border-b-2 border-l-2")} aria-hidden="true" />
      <span className={cn(bracket, "bottom-0 right-0 border-b-2 border-r-2")} aria-hidden="true" />
      {children}
    </div>
  );
}