"use client";
import React, { useEffect, useState } from "react";
import ExperienceBadge from "@/components/Badge";
import BlogheaderSection from "@/components/BlogPageComponents/BlogheaderSection";
import FeaturesSection from "@/components/FeatureSection";
import FloatingButton from "@/components/FloatingButton";
import Footer from "@/components/Footer";
import { useTheme } from "@/src/context/ThemeContext";

import Image from "next/image";
import ServicesSolutions from "@/components/ServiceSolutions";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import Header from "@/components/Header";

function Page() {
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
      <div className="bg-background text-foreground">
        <Header />
        {/* Header Section */}
        <BlogheaderSection />

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row mt-6 lg:mt-12 gap-8">
          {/* Left Section */}
          <div className="lg:w-[70%] space-y-8">
            {/* Approach Header */}
            <div className="p-2 pl-20">
              <h1 className="text-2xl font-bold text-foreground">
                Our Approach
              </h1>
              <p className="text-foreground mt-4">
                We are a team of software developers who are passionate about
                building high-quality software that is easy to use and maintain.
              </p>
            </div>

            {/* Detailed Description */}
            <div className="flex items-center justify-center bg-background p-4 rounded-lg  space-x-6 flex-col lg:flex-row ">
              <div className="relative w-[300px] h-[400px] lg:h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/office2.jpg"
                  alt="hero"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-semibold text-foreground">
                  Unlock Potential of Business
                </h2>
                <p className="text-foreground mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate animi minus quod dolorem. Praesentium officiis
                  accusamus neque corrupti nemo repudiandae unde culpa
                  recusandae consequatur, ut quisquam ex nulla cum quis,
                  distinctio magnam modi eius quaerat sequi. Minima omnis nobis
                  quia?
                </p>
                <div className="relative w-full h-[2px] bg-foreground mt-5">
                  <span className="absolute top-[-8px] left-[25%] w-5 h-5 border-white border-2  bg-green-600 rounded-full"></span>
                  <span className="absolute top-[-8px] left-[75%] w-5 h-5 border-white border-2  bg-green-600 rounded-full"></span>
                </div>
                <FeaturesSection />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-[30%] bg-background p-4 rounded-lg ">
            <div className="relative w-full h-[200px] lg:h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/office.jpg"
                alt="hero"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-[300px] mt-4 lg:h-300px] overflow-hidden rounded-lg">
              <Image
                src="/digisol.png"
                alt="hero"
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* <ExperienceBadge /> */}
          </div>
        </div>
        <ServicesSolutions />
        <WhatWeDo />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
