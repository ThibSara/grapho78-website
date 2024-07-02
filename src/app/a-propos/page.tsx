"use client";
import React from "react";
import { HeroSection } from "../components/a-propos/HeroSection";
import { BlogSection } from "../components/common/BlogSection";
import { motion } from "framer-motion";

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <BlogSection />
    </motion.div>
  );
}
