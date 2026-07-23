"use client";

import { Landmark, Satellite, ShieldCheck, Award } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import AchievementCard from "@/components/achievements/AchievementCard";

/**
 * Figures below are illustrative and must be replaced with SMS
 * Enterprises' real numbers before shipping to production.
 */
const ACHIEVEMENTS = [
  { icon: Landmark, value: 50, suffix: "+", label: "Government Approved Layouts" },
  { icon: Satellite, value: 15, suffix: "+", label: "Drone Mapping Projects" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Client Satisfaction" },
  { icon: Award, value: 20, suffix: "+", label: "Repeat Corporate Clients" },
] as const;

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-[#081832] py-24 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="ACHIEVEMENTS"
            title="Milestones that reflect the standard we hold."
            description="A snapshot of the reach and reliability behind SMS Enterprises' survey and civil engineering work."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {ACHIEVEMENTS.map((achievement, i) => (
            <AchievementCard
              key={achievement.label}
              icon={achievement.icon}
              value={achievement.value}
              suffix={achievement.suffix}
              label={achievement.label}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
