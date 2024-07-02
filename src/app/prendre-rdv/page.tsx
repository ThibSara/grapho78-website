"use client";
import React from "react";
import { TestimonialsSection } from "../components/prendre-rdv/TestimonialsSection";
import { ContactSection } from "../components/prendre-rdv/ContactSection";
import { FAQSection } from "../components/prendre-rdv/FAQSection";
import { motion } from "framer-motion";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection />
      <FAQSection />
      <TestimonialsSection />
    </motion.div>
  );
}
