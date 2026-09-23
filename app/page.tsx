import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Immersive } from "@/components/sections/Immersive";
import { MobileService } from "@/components/sections/MobileService";
import { Gallery } from "@/components/sections/Gallery";
import { ConversionCTA } from "@/components/sections/ConversionCTA";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramCTA } from "@/components/sections/InstagramCTA";
import { Footer } from "@/components/sections/Footer";
import { MobileCTA } from "@/components/sections/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Problem />
        <Services />
        <Process />
        <Immersive />
        <MobileService />
        <Gallery />
        <ConversionCTA />
        <FAQ />
        <InstagramCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
