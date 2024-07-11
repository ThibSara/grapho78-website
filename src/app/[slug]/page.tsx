"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingSection } from "../sections/common/LoadingSection";
import "./styles.css";
import { BlogSection } from "../sections/common/BlogSection";
import { Custom404 } from "../404";

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
      setLoading(true);
      setError(null);

      try {
        const req = await fetch("/api/blog-posts");
        if (!req.ok) {
          throw new Error("Failed to fetch posts");
        }
        const blogPosts: BlogPost[] = await req.json();
        setBlogPosts(blogPosts);

        const matchingPost = blogPosts.find(
          (post) => post.slug === params.slug
        );

        if (matchingPost) {
          setPost(matchingPost);
        } else {
          throw new Error("Post not found");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (loading) {
    return <LoadingSection />;
  }

  if (error) {
    return <Custom404 />;
  }

  if (!post) {
    return <Custom404 />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="py-24 sm:py-36 items-center mx-auto justify-center max-w-4xl flex flex-col">
        <h1
          className="text-3xl font-bold tracking-tight text-blue sm:text-4xl pb-12"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
        <div
          className="styled-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
      <BlogSection blogPosts={blogPosts} />
    </motion.div>
  );
};

export default Page;
