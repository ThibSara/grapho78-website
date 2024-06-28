import React from "react";
import { HeroSection } from "../components/a-propos/HeroSection";
import { BlogSection } from "../components/common/BlogSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <BlogSection />
    </div>
  );
}
