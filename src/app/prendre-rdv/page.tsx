import React from "react";
import { TestimonialsSection } from "../components/prendre-rdv/TestimonialsSection";
import { ContactSection } from "../components/prendre-rdv/ContactSection";

export default function page() {
  return (
    <div>
      <ContactSection />
      <TestimonialsSection />
    </div>
  );
}
