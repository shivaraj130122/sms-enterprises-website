"use client";

import Reveal from "@/components/ui/Reveal";
import CornerFrame from "@/components/ui/CornerFrame";

import StatsCounter from "@/components/trust/StatsCounter";

/**
 * Figures below are illustrative and must be replaced with SMS
 * Enterprises' real, current numbers before shipping to production.
 */
const STATS = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 450, suffix: "+", label: "Projects Completed" },
  { value: 300, suffix: "+", label: "Happy Clients" },
  { value: 8500, suffix: "+", label: "Acres Surveyed" },
] as const;

export default function StatsStrip() {
  return (
    <Reveal>
      <CornerFrame className="border border-white/10 bg-[#0B2340]/50 p-2 backdrop-blur-md">
        <div className="grid grid-cols-2 divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-6 py-8 text-center sm:px-8 sm:py-10"
            >
              <span className="font-display text-4xl font-semibold tracking-tight text-[#F5F3EC] sm:text-5xl">
                <StatsCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8EA3C2] sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </CornerFrame>
    </Reveal>
  );
}
