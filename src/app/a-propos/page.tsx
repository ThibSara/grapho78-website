"use client";
import React from "react";
import { HeroSection } from "../sections/a-propos/HeroSection";
import { BlogSection } from "../sections/common/BlogSection";
import { motion } from "framer-motion";
import { reqUrl } from "@/app/config";

export default async function Page() {
  const req = await fetch(`${reqUrl}posts?_fields=id,slug,title,date,content`);
  const blogPosts = await req.json();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <BlogSection blogPosts={blogPosts} />
    </motion.div>
  );
}
