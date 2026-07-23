"use client";

import Reveal from "@/components/ui/Reveal";

import ClientLogo from "@/components/trust/ClientLogo";

/**
 * Names below are illustrative wordmark placeholders — replace with real
 * client logo files once SMS Enterprises provides permission to display
 * them.
 */
const CLIENTS = [
  "Vantage Builders",
  "Nordholt Infra",
  "Sundar Developers",
  "Greenline Realty",
  "Anchor Constructions",
  "Meridian Properties",
  "Kaveri Township",
  "Bedrock Estates",
] as const;

export default function ClientsGrid() {
  return (
    <div>
      <Reveal>
        <h3 className="text-center font-display text-2xl font-semibold tracking-tight text-[#F5F3EC] sm:text-3xl">
          Trusted by Developers, Builders &amp; Infrastructure Companies
        </h3>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {CLIENTS.map((name, i) => (
          <ClientLogo key={name} name={name} index={i} />
        ))}
      </div>
    </div>
  );
}
