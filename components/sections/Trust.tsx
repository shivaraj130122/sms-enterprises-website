"use client";

import Container from "@/components/ui/Container";

import TrustBackground from "@/components/trust/TrustBackground";
import StatsStrip from "@/components/trust/StatsStrip";
import ClientsGrid from "@/components/trust/ClientsGrid";
import Testimonials from "@/components/trust/Testimonials";
import FeatureStrip from "@/components/trust/FeatureStrip";
import CertificationBadges from "@/components/trust/CertificationBadges";
import FAQ from "@/components/trust/FAQ";
import FinalCTA from "@/components/trust/FinalCTA";

export default function Trust() {
  return (
    <section id="trust" className="relative overflow-hidden bg-[#071426] py-24 sm:py-32">
      <TrustBackground />

      <Container className="relative z-10 flex flex-col gap-24 sm:gap-28 lg:gap-32">
        <StatsStrip />

        <ClientsGrid />

        <div id="testimonials">
          <Testimonials />
        </div>

        <FeatureStrip />

        <CertificationBadges />

        <div id="faq">
          <FAQ />
        </div>

        <FinalCTA />
      </Container>
    </section>
  );
}
