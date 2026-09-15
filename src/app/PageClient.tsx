"use client";
import React, { useEffect, useState } from "react";
import { HeroSection } from "./sections/home/HeroSection";
import { ContentSection } from "./sections/home/ContentSection";
import { BlogSection } from "./sections/common/BlogSection";
import { CTASection } from "./sections/home/CTASection";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  date: string;
  content: {
    rendered: string;
  };
}

const Home: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogLoading, setBlogLoading] = useState<boolean>(true);
  const [blogError, setBlogError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const req = await fetch("/api/blog-posts");
        if (!req.ok) {
          throw new Error("Failed to fetch");
        }
        const blogPosts: BlogPost[] = await req.json();
        setBlogPosts(blogPosts);
      } catch (error: any) {
        setBlogError(error.message);
      } finally {
        setBlogLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection onSplineLoad={() => {}} />
      <ContentSection />
      <CTASection />
      <BlogSection
        blogPosts={blogPosts}
        loading={blogLoading}
        error={blogError}
      />
    </motion.div>
  );
};

export default Home;
