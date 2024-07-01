import React from "react";
import { WrittingSection } from "../components/seances/WrittingSection";
import { CTASection } from "../components/seances/CTASection";
import { BilanSection } from "../components/seances/BilanSection";
import { SeancesSection } from "../components/seances/SeancesSections";

export default function page() {
  return (
    <div>
      <WrittingSection />
      <BilanSection />
      <SeancesSection />
      <CTASection />
    </div>
  );
}
