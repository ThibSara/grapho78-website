import React from "react";
import { TestimonialsSection } from "../components/prendre-rdv/TestimonialsSection";
import { ContactSection } from "../components/prendre-rdv/ContactSection";
import { FAQSection } from "../components/prendre-rdv/FAQSection";

export default function page() {
  return (
    <div>
      <ContactSection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
}
