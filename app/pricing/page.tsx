import { Metadata } from "next";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { AddOns } from "@/components/sections/AddOns";
import { PricingFAQ } from "@/components/sections/PricingFAQ";
import { PricingFinalCTA } from "@/components/sections/PricingFinalCTA";
import { LeadMagnet } from "@/components/sections/LeadMagnet";

export const metadata: Metadata = {
  title: "Pricing | The Forum - Fort Lauderdale Podcast Studio",
  description:
    "Choose your creative rhythm. All memberships include studio access, professional equipment, post-production editing, and community access.",
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <PricingTiers />
      <ComparisonTable />
      <AddOns />
      <PricingFAQ />
      <LeadMagnet />
      <PricingFinalCTA />
    </div>
  );
}
