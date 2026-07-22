"use client";

import Link from "next/link";
import {
  LandPlot,
  LayoutGrid,
  Mountain,
  Route,
  Droplets,
  Satellite,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import ServiceCard from "@/components/services/ServiceCard";

const SERVICES = [
  {
    icon: LandPlot,
    title: "Land Survey",
    description:
      "Boundary, topographic, and cadastral survey carried out with RTK-corrected GPS and total stations, giving you a plot record you can act on with confidence.",
  },
  {
    icon: LayoutGrid,
    title: "Layout Development",
    description:
      "Plot subdivision and layout planning that balances saleable area, access, and civic norms — engineered for approval and buildability from the first draft.",
  },
  {
    icon: Mountain,
    title: "Earthwork",
    description:
      "Cut-and-fill planning and site levelling calculated from precise ground data, keeping earthwork volumes and grading accurate before machinery ever moves.",
  },
  {
    icon: Route,
    title: "Road Formation",
    description:
      "Alignment, gradient, and camber survey for internal and access roads, set out to civil engineering standards for a durable running surface.",
  },
  {
    icon: Droplets,
    title: "Drainage Construction",
    description:
      "Stormwater and drainage layout designed to actual site levels, directing runoff correctly and protecting the development from waterlogging.",
  },
  {
    icon: Satellite,
    title: "GPS & Drone Survey",
    description:
      "Large-format sites mapped fast with RTK-GPS and UAV photogrammetry, producing accurate orthomosaics and contour data in a fraction of the field time.",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative bg-[#071426] py-24 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Survey and civil groundwork, under one roof."
            description="From the first boundary reading to road and drainage formation, SMS Enterprises carries each site from raw land data through to construction-ready groundwork."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center lg:mt-20">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request a Survey
              </Button>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}