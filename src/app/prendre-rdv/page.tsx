"use client";
import React, { useState, useEffect } from "react";
import { TestimonialsSection } from "../sections/prendre-rdv/TestimonialsSection";
import { ContactSection } from "../sections/prendre-rdv/ContactSection";
import { FAQSection } from "../sections/prendre-rdv/FAQSection";
import { motion } from "framer-motion";

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {isLoaded ? (
        <>
          <ContactSection />
          <FAQSection />
          <TestimonialsSection />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-gray-500 text-xl">Loading...</div>
        </div>
      )}
    </motion.div>
  );
}
