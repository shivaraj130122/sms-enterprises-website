"use client";

import Link from "next/link";
import { HardHat, Radar, ShieldCheck, Zap, Wallet, LifeBuoy } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import FeatureCard from "@/components/why/FeatureCard";

const FEATURES = [
  {
    icon: HardHat,
    title: "Experienced Engineers",
    description:
      "Licensed surveyors and civil engineers who've handled residential plots, industrial layouts, and infrastructure corridors lead every project on site.",
  },
  {
    icon: Radar,
    title: "Modern Survey Equipment",
    description:
      "RTK-corrected GPS, total stations, and UAV mapping systems replace guesswork with sub-centimetre accuracy on every reading we take.",
  },
  {
    icon: ShieldCheck,
    title: "Government Approved Process",
    description:
      "Documentation prepared to match local land-record, RERA, and municipal requirements, so approvals move without back-and-forth.",
  },
  {
    icon: Zap,
    title: "Fast Project Delivery",
    description:
      "Field work and reporting are scheduled against your project timeline, keeping financing, design, and construction from waiting on us.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Transparent, project-based quotes with no hidden re-survey costs, sized to fit residential plots and large-format developments alike.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    description:
      "From the first boundary reading through layout, earthwork, and drainage, one team stays accountable for the ground data throughout.",
  },
] as const;

export default function WhyChooseUs() {
  return (
   <section id="why-us" className="relative bg-[#071426] py-24 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="What sets our fieldwork apart."
            description="Every reading, layout, and report we produce is built on the same standard — precise, approvable, and delivered on your timeline."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={i}
            />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center lg:mt-20">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}