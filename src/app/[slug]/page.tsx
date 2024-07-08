"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { reqUrl } from "@/app/config";
import { LoadingSection } from "../sections/common/LoadingSection";
import "./styles.css";
import { BlogSection } from "../sections/common/BlogSection";

interface BlogPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

type PageProps = {
  params: {
    slug: string;
  };
};

const Page: React.FC<PageProps> = ({ params }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const req = await fetch(
          `${reqUrl}posts?_fields=id,slug,title,content&slug=${
            params.slug
          }&t=${new Date().getTime()}`,
          {
            cache: "force-cache",
          }
        );
        if (!req.ok) {
          throw new Error("Failed to fetch");
        }
        const post: BlogPost[] = await req.json();
        if (post.length > 0) {
          setPost(post[0]);
        } else {
          throw new Error("Post not found");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchBlogPosts = async () => {
      try {
        const req = await fetch(
          `${reqUrl}posts?_fields=id,slug,title,date,content`,
          {
            cache: "force-cache",
          }
        );
        if (!req.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const blogPosts: BlogPost[] = await req.json();
        setBlogPosts(blogPosts);
      } catch (error: any) {
        console.error("Error fetching blog posts:", error.message);
      }
    };

    fetchPost();
    fetchBlogPosts();
  }, [params.slug]);

  if (loading) {
    return <LoadingSection />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 sm:py-36 items-center mx-auto justify-center max-w-4xl flex flex-col"
    >
      <h1
        className="text-3xl font-bold tracking-tight text-blue sm:text-4xl pb-12"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      ></h1>
      <div
        className="styled-content"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
      <BlogSection blogPosts={blogPosts} />
    </motion.div>
  );
};

export default Page;
