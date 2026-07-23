"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Satellite,
  Radar,
  Zap,
  Wallet,
  LifeBuoy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";

interface Feature {
  icon: LucideIcon;
  label: string;
}

const FEATURES: Feature[] = [
  { icon: ShieldCheck, label: "Government Approved" },
  { icon: Satellite, label: "Drone Survey" },
  { icon: Radar, label: "Modern Equipment" },
  { icon: Wallet, label: "Transparent Pricing" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: LifeBuoy, label: "End-to-End Support" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FeatureStrip() {
  return (
    <div>
      <Reveal>
        <h3 className="text-center font-display text-2xl font-semibold tracking-tight text-[#F5F3EC] sm:text-3xl">
          Why Customers Trust SMS
        </h3>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <Card className="flex h-full flex-col items-center gap-3 border border-white/10 bg-[#0B2340]/40 px-4 py-6 text-center backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/35">
              <feature.icon className="h-6 w-6 text-[#C6A15B]" strokeWidth={1.6} />
              <span className="text-xs font-medium leading-snug text-[#DCE3ED] sm:text-sm">
                {feature.label}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
