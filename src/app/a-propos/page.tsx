"use client";
import React, { useEffect, useState } from "react";
import { HeroSection } from "../sections/a-propos/HeroSection";
import { BlogSection } from "../sections/common/BlogSection";
import { motion } from "framer-motion";
import { reqUrl } from "@/app/config";
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

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const req = await fetch(
          `${reqUrl}posts?_fields=id,slug,title,date,content`,
          {
            cache: "force-cache",
          }
        );
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
      <HeroSection />
      <BlogSection blogPosts={blogPosts} />
    </motion.div>
  );
};

export default Page;
