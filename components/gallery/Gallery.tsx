"use client";

import { useMemo, useState } from "react";
import {
  Crosshair,
  LayoutGrid,
  Route,
  Droplets,
  Mountain,
  Satellite,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import GalleryFilter, { type GalleryCategory } from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Lightbox from "@/components/gallery/Lightbox";
import type { GalleryItem } from "@/components/gallery/GalleryCard";

/**
 * The tiles below use a stylized graphic in place of on-site photography.
 * Swap `icon` for a real image (next/image) per item once site photos
 * are available.
 */
const GALLERY_ITEMS: GalleryItem[] = [
  { id: "survey-1", title: "Boundary Survey, Residential Plot", category: "Survey", icon: Crosshair },
  { id: "survey-2", title: "Topographic Survey, Industrial Site", category: "Survey", icon: Crosshair },
  { id: "layouts-1", title: "Residential Layout Plan", category: "Layouts", icon: LayoutGrid },
  { id: "layouts-2", title: "Government Layout Documentation", category: "Layouts", icon: LayoutGrid },
  { id: "roads-1", title: "Internal Road Alignment", category: "Roads", icon: Route },
  { id: "roads-2", title: "Access Road Formation", category: "Roads", icon: Route },
  { id: "drainage-1", title: "Stormwater Drainage Layout", category: "Drainage", icon: Droplets },
  { id: "drainage-2", title: "Site Drainage Grading", category: "Drainage", icon: Droplets },
  { id: "earthwork-1", title: "Cut-and-Fill Site Levelling", category: "Earthwork", icon: Mountain },
  { id: "earthwork-2", title: "Grading Volume Survey", category: "Earthwork", icon: Mountain },
  { id: "drone-1", title: "UAV Orthomosaic Mapping", category: "Drone", icon: Satellite },
  { id: "drone-2", title: "Aerial Contour Survey", category: "Drone", icon: Satellite },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="relative bg-[#081832] py-24 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="PROJECT GALLERY"
            title="A closer look at the work."
            description="Browse by category to see the kind of survey and civil groundwork SMS Enterprises delivers on site."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <GalleryFilter active={activeCategory} onChange={setActiveCategory} />
          </div>
        </Reveal>

        <div className="mt-10">
          <GalleryGrid items={filteredItems} onOpen={setLightboxIndex} />
        </div>
      </Container>

      <Lightbox
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
