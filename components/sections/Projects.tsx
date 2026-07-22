"use client";

import Link from "next/link";
import { Home, Factory, Route, Droplets, Landmark, Satellite } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import ProjectCard from "@/components/projects/ProjectCard";

const PROJECTS = [
  {
    icon: Home,
    title: "Residential Layout Development",
    category: "Layout Development",
    location: "Bengaluru, KA",
    description:
      "Full plot subdivision and layout planning for a residential development, balancing saleable area with road access and civic approval requirements.",
  },
  {
    icon: Factory,
    title: "Industrial Site Survey",
    category: "Land Survey",
    location: "Hosur, TN",
    description:
      "Boundary and topographic survey across a multi-acre industrial parcel, delivered with cadastral-grade accuracy ahead of facility design.",
  },
  {
    icon: Route,
    title: "Road Infrastructure",
    category: "Road Formation",
    location: "Tumakuru, KA",
    description:
      "Alignment, gradient, and camber survey for an internal access road network, set out to civil engineering standards for construction.",
  },
  {
    icon: Droplets,
    title: "Drainage Construction",
    category: "Drainage",
    location: "Mysuru, KA",
    description:
      "Stormwater drainage layout engineered from precise site levels, routing runoff correctly across a mixed-use development site.",
  },
  {
    icon: Landmark,
    title: "Government Layout",
    category: "Layout Development",
    location: "Chikkaballapur, KA",
    description:
      "Survey and layout documentation prepared to municipal and land-record standards for a government-sanctioned residential layout.",
  },
  {
    icon: Satellite,
    title: "Drone Mapping",
    category: "GPS & Drone Survey",
    location: "Kolar, KA",
    description:
      "UAV photogrammetry across a large-format site, producing an accurate orthomosaic and contour data in a fraction of standard field time.",
  },
] as const;

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#081832] py-24 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="OUR PROJECTS"
            title="Ground data behind real developments."
            description="A cross-section of the residential, industrial, and infrastructure work SMS Enterprises has surveyed and set out on the ground."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              category={project.category}
              location={project.location}
              description={project.description}
              index={i}
            />
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center lg:mt-20">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}