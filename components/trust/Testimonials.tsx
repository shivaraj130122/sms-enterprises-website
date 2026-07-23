"use client";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

import TestimonialCard from "@/components/trust/TestimonialCard";

/**
 * The testimonials below are illustrative placeholders written to show
 * the intended tone and layout. Replace name, company, rating, and quote
 * with real client feedback before this section goes live — publishing
 * fabricated testimonials as genuine client quotes is not appropriate
 * for a production site.
 */
const TESTIMONIALS = [
  {
    name: "Ramesh Kulkarni",
    company: "Vantage Builders",
    rating: 5,
    quote:
      "The boundary survey was turned around faster than we expected, and the coordinates matched our sale deed exactly. No surprises during registration.",
  },
  {
    name: "Ananya Rao",
    company: "Nordholt Infra",
    rating: 5,
    quote:
      "We used their drone survey for a 40-acre site. The contour data saved our design team weeks compared to a manual topographic survey.",
  },
  {
    name: "Suresh Patil",
    company: "Sundar Developers",
    rating: 4,
    quote:
      "Layout planning was handled with a clear understanding of approval requirements. Our sanction went through without a single revision.",
  },
  {
    name: "Divya Menon",
    company: "Greenline Realty",
    rating: 5,
    quote:
      "Site demarcation on a tricky irregular plot was done with genuine care. Every corner point was documented and physically marked on site.",
  },
  {
    name: "Arjun Iyer",
    company: "Anchor Constructions",
    rating: 5,
    quote:
      "Road and drainage survey for our internal layout was accurate down to the level readings. Construction started with zero rework.",
  },
  {
    name: "Priya Nair",
    company: "Meridian Properties",
    rating: 4,
    quote:
      "Professional, responsive, and precise. Their civil engineering desk caught a grading issue before it became a costly problem on site.",
  },
] as const;

export default function Testimonials() {
  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="CLIENT VOICES"
          title="What clients say about working with us."
          description="Feedback from developers, builders, and landowners who've relied on our survey and civil engineering work."
        />
      </Reveal>

      {/* Mobile: horizontal scroll-snap carousel. sm+: static grid. */}
      <div className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-16 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, i) => (
          <div
            key={testimonial.name}
            className="w-[85%] shrink-0 snap-center sm:w-auto sm:shrink sm:snap-none"
          >
            <TestimonialCard
              name={testimonial.name}
              company={testimonial.company}
              rating={testimonial.rating}
              quote={testimonial.quote}
              index={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
