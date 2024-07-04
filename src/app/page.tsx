"use client";
import React from "react";
import { HeroSection } from "./sections/home/HeroSection";
import { ContentSection } from "./sections/home/ContentSection";
import { BlogSection } from "./sections/common/BlogSection";
import { CTASection } from "./sections/home/CTASection";
import { motion } from "framer-motion";
import { reqUrl } from "@/app/config";

export default async function Home() {
  const req = await fetch(`${reqUrl}posts?_fields=id,slug,title,date,content`);
  const blogPosts = await req.json();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ContentSection />
      <CTASection />
      <BlogSection blogPosts={blogPosts} />
    </motion.div>
  );
}
