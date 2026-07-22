"use client";

import Reveal from "@/components/ui/Reveal";
import StatCounter from "./StatCounter";

/**
 * Figures below are illustrative and must be replaced with SMS
 * Enterprises' real, current numbers before shipping to production.
 */
const STATS = [
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 450, suffix: "+", label: "Projects Completed" },
  { value: 300, suffix: "+", label: "Clients Served" },
  { value: 8500, suffix: "+", label: "Acres Surveyed" },
] as const;

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] lg:grid-cols-4">
      {STATS.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.1}>
          <div className="flex h-full flex-col gap-2 bg-[#0B2340]/70 px-6 py-8 backdrop-blur-md sm:px-8 sm:py-10">
            <span className="font-display text-4xl font-semibold tracking-tight text-[#F5F3EC] sm:text-5xl">
              <StatCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8EA3C2] sm:text-[11px]">
              {stat.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
