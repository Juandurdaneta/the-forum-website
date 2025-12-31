import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { Community } from "@/components/sections/Community";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhatsIncluded />
      <Community />
      <BeforeAfter />
      <LeadMagnet />
      <FAQ />
      <FinalCTA />
    </>
  );
}
