import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label="SMS Enterprises — Home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="32" height="32" stroke="var(--color-gold-500)" strokeWidth="1.5" fill="none" />
          <path d="M4 14 L14 4" stroke="var(--color-gold-500)" strokeWidth="1.5" />
          <path d="M26 36 L36 26" stroke="var(--color-gold-500)" strokeWidth="1.5" />
          <rect x="12" y="12" width="16" height="16" fill="var(--color-gold-500)" fillOpacity="0.9" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-wide text-ivory">
          SMS <span className="text-gold-500">ENTERPRISES</span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
          Land &amp; Layout Infrastructure
        </span>
      </span>
    </Link>
  );
}