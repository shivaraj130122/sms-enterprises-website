"use client";

interface SkeletonCardProps {
  className?: string;
}

export default function SkeletonCard({ className = "" }: SkeletonCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#0B2340]/40 ${className}`}
      aria-hidden="true"
    >
      <div className="h-48 w-full animate-pulse bg-gradient-to-br from-[#0E2543] via-[#123159] to-[#0E2543] bg-[length:200%_200%]" />
      <div className="space-y-3 p-5">
        <div className="h-3 w-1/3 animate-pulse rounded bg-white/10" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-white/5" />
      </div>
    </div>
  );
}
