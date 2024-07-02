"use client";
import { NavBar } from "./components/common/NavBar";
import { HeroSection } from "./components/home/HeroSection";
import { ContentSection } from "./components/home/ContentSection";
import { BlogSection } from "./components/common/BlogSection";
import { CTASection } from "./components/home/CTASection";
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
