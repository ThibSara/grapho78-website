"use client";
import React, { useEffect, useState } from "react";
import { HeroSection } from "../sections/a-propos/HeroSection";
import { BlogSection } from "../sections/common/BlogSection";
import { motion } from "framer-motion";
import { LoadingSection } from "../sections/common/LoadingSection";

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

const Page: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [splineLoaded, setSplineLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        console.log("Fetching blog posts...");
        const req = await fetch("/api/blog-posts");
        if (!req.ok) {
          throw new Error("Failed to fetch");
        }
        const blogPosts: BlogPost[] = await req.json();
        setBlogPosts(blogPosts);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  useEffect(() => {
    if (!loading && splineLoaded) {
      console.log("Both blog posts and Spline scene loaded.");
      setLoading(false);
    }
  }, [splineLoaded]);

  if (loading) {
    return <LoadingSection />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection onSplineLoad={handleSplineLoad} />
      <BlogSection blogPosts={blogPosts} />
    </motion.div>
  );
};

export default Page;
