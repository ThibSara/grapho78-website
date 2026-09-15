"use client";
import { motion } from "framer-motion";
import React from "react";
import { WrittingSection } from "../sections/seances/WrittingSection";
import { CTASection } from "../sections/seances/CTASection";
import { BilanSection } from "../sections/seances/BilanSection";
import { SeancesSection } from "../sections/seances/SeancesSections";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <WrittingSection />
      <BilanSection />
      <SeancesSection />
      <CTASection />
    </motion.div>
  );
}
