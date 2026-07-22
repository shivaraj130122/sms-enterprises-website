"use client";

import {
  Crosshair,
  Satellite,
  Users,
  Clock,
  ShieldCheck,
  FileBarChart,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CornerFrame from "@/components/ui/CornerFrame";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

import StatsGrid from "@/components/about/StatsGrid";

/**
 * NOTE ON ASSUMED COMPONENT APIS
 * -----------------------------------------------------------------------
 * As in Phase 2, Container/Reveal/CornerFrame are used exactly as before.
 * Two components introduced here for the first time are assumed as:
 *
 *   <Card>            children, className?  — a surface/panel primitive
 *   <SectionHeading eyebrow title description align? className? />
 *
 * If your actual props differ, the fix is local to this file — nothing
 * else depends on their internals.
 */

const WHY_CHOOSE_US = [
  {
    icon: Crosshair,
    title: "Survey-Grade Precision",
    description:
      "Every boundary, elevation, and layout point is captured to sub-centimetre accuracy using RTK-corrected GPS, so what's on paper matches what's on the ground.",
  },
  {
    icon: Satellite,
    title: "Modern Instrumentation",
    description:
      "Total stations, GPS/GNSS receivers, and drone-based aerial mapping work together, giving clients data that's faster to collect and easier to trust.",
  },
  {
    icon: Users,
    title: "Experienced Field Teams",
    description:
      "Licensed surveyors and civil engineers who've worked residential plots, industrial layouts, and infrastructure corridors alike lead every project on site.",
  },
  {
    icon: Clock,
    title: "Dependable Turnaround",
    description:
      "Survey plans and reports are scheduled against your project timeline, not ours — so approvals, financing, and construction are never left waiting.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance You Can Rely On",
    description:
      "Documentation prepared to match local land-record, RERA, and municipal approval requirements, reducing back-and-forth at the sanctioning stage.",
  },
  {
    icon: FileBarChart,
    title: "Transparent Reporting",
    description:
      "Clear drawings, coordinate sheets, and survey reports — not raw data dumps — so architects, lawyers, and landowners can act on findings immediately.",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="relative bg-[#081832] py-24 sm:py-32">
      {/* Faint survey-grid continuity from the hero, kept quiet here */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
        <defs>
          <pattern id="sms-about-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#3E5C7E" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sms-about-grid)" />
      </svg>

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT SMS ENTERPRISES"
            title="Precision has always been our blueprint."
            description="SMS Enterprises is a land surveying and development practice built on a simple conviction: every plan, permit, and foundation is only as reliable as the ground data behind it. We deliver that data — accurately, quickly, and in a form your team can build on with confidence."
          />
        </Reveal>

        {/* Story + Mission/Vision */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-5 lg:gap-10">
          <Reveal delay={0.1} className="lg:col-span-3">
            <CornerFrame className="h-full p-8 sm:p-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8EA3C2]">
                Our Story
              </span>
              <p className="mt-5 text-base leading-relaxed text-[#C7D1E0] sm:text-lg">
                Founded on the principle that every structure begins with an
                accurate boundary, SMS Enterprises started with a small field
                team and a single total station, surveying individual plots
                for local landowners. As those clients moved from acquisition
                into construction, they kept asking for the same discipline
                applied to bigger problems — layout planning, road alignment,
                site demarcation, civil design.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#C7D1E0] sm:text-lg">
                Today, that field discipline sits alongside GPS and drone
                survey capability, a dedicated civil engineering desk, and a
                track record across residential, commercial, and
                infrastructure projects — without losing the on-the-ground
                rigor the company was built on.
              </p>
            </CornerFrame>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <Reveal delay={0.2}>
              <Card className="border border-[#C6A15B]/20 bg-[#0B2340]/60 p-7 backdrop-blur-md sm:p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6A15B]">
                  Mission
                </span>
                <p className="mt-4 text-base leading-relaxed text-[#DCE3ED]">
                  To deliver land survey and civil engineering data precise
                  enough that every decision built on it — legal,
                  architectural, financial — can be made with total
                  confidence.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.3}>
              <Card className="border border-white/10 bg-[#0B2340]/60 p-7 backdrop-blur-md sm:p-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8EA3C2]">
                  Vision
                </span>
                <p className="mt-4 text-base leading-relaxed text-[#DCE3ED]">
                  To be the surveying partner developers, architects, and
                  landowners call first — the trusted source of ground truth
                  behind the region's next generation of developments.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>

        {/* Why Choose SMS Enterprises */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-[#F5F3EC] sm:text-3xl">
              Why Choose SMS Enterprises
            </h3>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i}>
                <Card className="group h-full border border-white/10 bg-[#0B2340]/50 p-7 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/30 hover:bg-[#0B2340]/80">
                  <item.icon
                    className="h-6 w-6 text-[#C6A15B] transition-transform duration-300 group-hover:-translate-y-0.5"
                    strokeWidth={1.6}
                  />
                  <h4 className="mt-5 font-display text-lg font-semibold text-[#F5F3EC]">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#AEBBCE]">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Animated Statistics */}
        <div className="mt-20 lg:mt-28">
          <Reveal>
            <StatsGrid />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
