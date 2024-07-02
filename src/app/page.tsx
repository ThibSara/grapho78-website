"use client";
import { NavBar } from "./sections/common/NavBar";
import { HeroSection } from "./sections/home/HeroSection";
import { ContentSection } from "./sections/home/ContentSection";
import { BlogSection } from "./sections/common/BlogSection";
import { CTASection } from "./sections/home/CTASection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ContentSection />
      <CTASection />
      <BlogSection />
    </motion.div>
  );
}
