import ExperienceBadge from "@/components/Badge";
import BlogheaderSection from "@/components/BlogPageComponents/BlogheaderSection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <BlogheaderSection />

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row mt-6 lg:mt-12 gap-8">
        {/* Left Section */}
        <div className="lg:w-[70%] space-y-8">
          {/* Approach Header */}
          <div className="p-6 bg-background rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-foreground">Our Approach</h1>
            <p className="text-foreground mt-4">
              We are a team of software developers who are passionate about
              building high-quality software that is easy to use and maintain.
            </p>
          </div>

          {/* Detailed Description */}
          <div className="flex items-center justify-center bg-background p-8 rounded-lg  space-x-6 flex-col lg:flex-row ">
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/office2.jpg"
                alt="hero"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">
                Unlock Potential of Business
              </h2>
              <p className="text-foreground mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate animi minus quod dolorem. Praesentium officiis
                accusamus neque corrupti nemo repudiandae unde culpa recusandae
                consequatur, ut quisquam ex nulla cum quis, distinctio magnam
                modi eius quaerat sequi. Minima omnis nobis quia?
              </p>
              <FeaturesSection />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[30%] bg-background p-4 rounded-lg ">
          <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/office.jpg"
              alt="hero"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* <ExperienceBadge /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
