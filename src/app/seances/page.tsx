"use client";
import { motion } from "framer-motion";
import React from "react";
import { WrittingSection } from "../components/seances/WrittingSection";
import { CTASection } from "../components/seances/CTASection";
import { BilanSection } from "../components/seances/BilanSection";
import { SeancesSection } from "../components/seances/SeancesSections";

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
