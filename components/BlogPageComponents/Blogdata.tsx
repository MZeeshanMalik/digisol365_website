import React from "react";
import Image from "next/image";

const categories = [
  "Web Design",
  "App Development",
  "Software Development",
  "Machine Learning",
  "UI/UX Design",
];
const newestPosts = [
  {
    title: "Great Distribution Tools That Can Increase Your Sales",
    date: "Oct 15, 2023",
  },
  {
    title: "Distribution Costs That Can Make Your Sales Slow",
    date: "Sep 28, 2023",
  },
  {
    title: "Costly Mistakes in the Ease of Doing Business",
    date: "Sep 14, 2023",
  },
];
const tags = ["Updates", "Tech News", "UI/UX", "Software Design"];

function Blogdata() {
  return (
    <section>
      <div className="bg-background text-foreground py-12 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Blog Header */}
          <div className="relative w-full h-[60vh]">
            <Image
              src="/coding.jpg"
              alt="Blog image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-16 mt-8">
            {/* Main Content */}
            <main className="flex-1">
              <div className="space-y-6">
                <p className="leading-7 text-foreground">
                  Technology has transformed the way we live, work, and
                  communicate. It continues to evolve at a rapid pace, bringing
                  new advancements and challenges every day. This article dives
                  into the latest tech trends and explores the impact they have
                  on various industries.
                </p>

                <blockquote className="bg-background border-l-4 border-buttoncolor pl-6 pr-4 py-4 rounded-lg italic text-lg">
                  "I work with algorithms that are changing the world, breaking
                  barriers, and integrating into my workflow to optimize
                  productivity."
                  <br />
                  <span className="text-buttoncolor font-semibold">
                    — Leslie Alexander
                  </span>
                </blockquote>

                <p className="leading-7 text-foreground">
                  In this article, we explore various technological innovations
                  shaping the future. From Artificial Intelligence to software
                  development, technology continues to evolve and redefine our
                  world. Stay tuned as we dive deeper into how these innovations
                  are transforming industries and society as a whole.
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Office Work"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Technology"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Developer"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>

              <p className="mt-10 leading-7 ">
                With new technologies emerging every day, it’s crucial to stay
                updated with the latest trends. Whether it’s software
                engineering, data science, or AI-driven solutions, technology is
                the driving force behind progress.
              </p>
            </main>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 space-y-10 bg-card">
              {/* Categories */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="hover:text-buttoncolorhover cursor-pointer"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newest Posts */}
              <div>
                <h3 className="font-semibold text-xl mb-4">Newest Posts</h3>
                <ul className="space-y-5">
                  {newestPosts.map((post, index) => (
                    <div className="flex" key={index}>
                      <div className="mr-4">
                        <Image
                          height={100}
                          width={200}
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="post image"
                          className="h-20 w-40 rounded-xl"
                        />
                      </div>
                      <div>
                        <li key={index}>
                          <h4 className="text-buttoncolorhover">
                            {post.title}
                          </h4>
                          <p className="text-foreground">{post.date}</p>
                        </li>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold text-xl mb-4">All Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-background py-1 px-4 rounded-md hover:bg-buttoncolorhover transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogdata;
