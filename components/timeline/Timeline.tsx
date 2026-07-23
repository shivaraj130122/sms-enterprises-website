"use client";

import { Flag, Award, Plane, Trophy, Building2, Sparkles } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import TimelineItem from "@/components/timeline/TimelineItem";

/**
 * Years below are approximated from the "12+ years experience" figure
 * used elsewhere on the site and should be replaced with SMS
 * Enterprises' real founding and milestone dates.
 */
const MILESTONES = [
  {
    year: "2014",
    title: "Company Started",
    description:
      "SMS Enterprises begins as a small field survey team, taking on boundary and plot surveys for local landowners.",
    icon: Flag,
  },
  {
    year: "2016",
    title: "100 Projects",
    description:
      "The team crosses its first 100 completed surveys, expanding into layout planning for residential clients.",
    icon: Award,
  },
  {
    year: "2018",
    title: "Drone Survey Introduced",
    description:
      "UAV photogrammetry is added to the service line, cutting large-site survey time significantly.",
    icon: Plane,
  },
  {
    year: "2021",
    title: "500 Projects",
    description:
      "Project count passes 500, spanning residential, industrial, and government layout work.",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Expansion",
    description:
      "A dedicated civil engineering desk is added, extending capability into road, drainage, and earthwork services.",
    icon: Building2,
  },
  {
    year: "Today",
    title: "Full-Service Practice",
    description:
      "SMS Enterprises operates as a complete land survey and development practice, serving developers and landowners across the region.",
    icon: Sparkles,
  },
] as const;

export default function Timeline() {
  return (
    <section id="journey" className="relative bg-[#071426] py-24 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="OUR JOURNEY"
            title="Built one accurate survey at a time."
            description="From a single field team to a full-service land survey and civil engineering practice."
          />
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-1 h-full w-px bg-gradient-to-b from-[#C6A15B]/50 via-white/10 to-transparent lg:left-1/2" />

          {MILESTONES.map((milestone, i) => (
            <TimelineItem
              key={milestone.year}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              icon={milestone.icon}
              index={i}
              align={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
