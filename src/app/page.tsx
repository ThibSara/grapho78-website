import Image from "next/image";
import { NavBar } from "./components/common/NavBar";
import { HeroSection } from "./components/home/HeroSection";
import { ContentSection } from "./components/home/ContentSection";
import { BlogSection } from "./components/common/BlogSection";
import { CTASection } from "./components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ContentSection />
      <CTASection />
      <BlogSection />
    </div>
  );
}
