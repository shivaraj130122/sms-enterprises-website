"use client";

import { motion } from "framer-motion";
import { Satellite, BadgeCheck, Plane, Ruler, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Reveal from "@/components/ui/Reveal";

interface Certification {
  icon: LucideIcon;
  label: string;
}

const CERTIFICATIONS: Certification[] = [
  { icon: Satellite, label: "GPS Enabled" },
  { icon: BadgeCheck, label: "Licensed Survey" },
  { icon: Plane, label: "Drone Mapping" },
  { icon: Ruler, label: "Civil Engineering" },
  { icon: Landmark, label: "Government Documentation" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CertificationBadges() {
  return (
    <div>
      <Reveal>
        <h3 className="text-center font-display text-2xl font-semibold tracking-tight text-[#F5F3EC] sm:text-3xl">
          Certifications &amp; Capabilities
        </h3>
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="flex items-center gap-2.5 rounded-full border border-[#C6A15B]/35 bg-[#0B2340]/50 px-5 py-3 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/70 hover:bg-[#0B2340]/80"
          >
            <cert.icon className="h-4 w-4 text-[#C6A15B]" strokeWidth={1.8} />
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#E8C77E]">
              {cert.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
