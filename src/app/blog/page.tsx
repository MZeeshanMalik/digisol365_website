"use client";
import Blogdata from "@/components/BlogPageComponents/Blogdata";
import BlogheaderSection from "@/components/BlogPageComponents/BlogheaderSection";
import Comments from "@/components/BlogPageComponents/Comments";
import SubscriptionSection from "@/components/BlogPageComponents/SubscriptionSection";
import FloatingButton from "@/components/FloatingButton";
import Footer from "@/components/Footer";
import { useTheme } from "@/src/context/ThemeContext";
// import Image from "next/image";
import React, { useEffect, useState } from "react";

const BlogMasonry = () => {
  const { state } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <div
      className={`${
        state.theme === "dark" ? "dark" : ""
      } transition-all duration-500 ease-in-out bg-background text-foreground`}
    >
      <FloatingButton />
      {/* Header Section */}
      <BlogheaderSection />
      {/* Subscription Section */}
      <SubscriptionSection />
      {/* blog data section */}
      <Blogdata />
      {/* Comments Section */}
      <Comments />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default BlogMasonry;
