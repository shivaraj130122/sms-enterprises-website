"use client";

import { motion } from "framer-motion";

export type GalleryCategory =
  | "All"
  | "Survey"
  | "Layouts"
  | "Roads"
  | "Drainage"
  | "Earthwork"
  | "Drone";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Survey",
  "Layouts",
  "Roads",
  "Drainage",
  "Earthwork",
  "Drone",
];

interface GalleryFilterProps {
  active: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
}

export default function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter gallery by category"
      className="flex flex-wrap justify-center gap-2.5"
    >
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className="relative rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#AEBBCE] transition-colors duration-300 hover:text-[#F5F3EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60"
          >
            {isActive && (
              <motion.span
                layoutId="gallery-filter-pill"
                className="absolute inset-0 rounded-full border border-[#C6A15B]/40 bg-[#C6A15B]/10"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <span className={`relative ${isActive ? "text-[#E8C77E]" : ""}`}>
              {category}
            </span>
          </button>
        );
      })}
    </div>
  );
}
