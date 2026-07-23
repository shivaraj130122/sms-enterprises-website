import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";
import Trust from "@/components/sections/Trust";

import ScrollProgress from "@/components/ux/ScrollProgress";
import BackToTop from "@/components/ux/BackToTop";
import FloatingWhatsapp from "@/components/ux/FloatingWhatsapp";
import LoadingScreen from "@/components/ux/LoadingScreen";
import CookieConsent from "@/components/ux/CookieConsent";
import MobileContactBar from "@/components/ux/MobileContactBar";
import PremiumCursor from "@/components/ux/PremiumCursor";

import Gallery from "@/components/gallery/Gallery";
import Timeline from "@/components/timeline/Timeline";
import Achievements from "@/components/achievements/Achievements";

export default function Home() {
  return (
    <>
      {/* Premium UX Components */}
      <LoadingScreen />
      <ScrollProgress />
      <PremiumCursor />

      {/* Main Website */}
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Timeline />
      <Achievements />
      <Gallery />
      <Trust />
      <Contact />

      {/* Floating Components */}
      <BackToTop />
      <FloatingWhatsapp />
      <MobileContactBar />
      <CookieConsent />
    </>
  );
}