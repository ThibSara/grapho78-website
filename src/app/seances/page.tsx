import React from "react";
import { WrittingSection } from "../components/seances/WrittingSection";
import { ContentSection } from "../components/seances/ContentSection";
import { CTASection } from "../components/seances/CTASection";

export default function page() {
  return (
    <div>
      <WrittingSection />
      <ContentSection />
      <CTASection />
    </div>
  );
}
