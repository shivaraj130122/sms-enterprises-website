"use client";

import { motion } from "framer-motion";

const READOUTS = [
  { label: "LAT", value: "12.9716° N" },
  { label: "LONG", value: "77.5946° E" },
  { label: "ACCURACY", value: "± 2 CM" },
  { label: "STATUS", value: "SURVEY ACTIVE" },
];

/**
 * CoordinateTicker
 * -----------------------------------------------------------------------
 * A mono-spaced instrument readout, standing in for the numbered
 * "01 / 02 / 03" markers that don't apply here — this content is real
 * survey telemetry, not a sequence, so it reads left to right as data.
 */
export default function CoordinateTicker() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/10 pt-5 font-mono text-[11px] tracking-[0.15em] text-[#8EA3C2] sm:text-xs">
      {READOUTS.map((item, i) => (
        <div key={item.label} className="flex items-center gap-2">
          {i === READOUTS.length - 1 && (
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]"
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <span className="text-[#4C6386]">{item.label}</span>
          <span className="text-[#D7DEE8]">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
