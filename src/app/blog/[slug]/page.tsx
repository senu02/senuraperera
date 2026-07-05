"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data/blogs";
import BlogCard from "@/components/common/cards/blogCard";

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen pt--140 pb--100 container--80">
      {/* background glow, matches other sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.3),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center space--20 mb-[70px]"
        >
          <p className="text--18 uppercase tracking-[0.2em] text-gray-400">
            Blog
          </p>
          <h1 className="text--48 font-bold leading-tight max-w-[700px]">
            Thoughts & Articles
          </h1>
          <p className="text--18 text-gray-300 max-w-[650px]">
            Notes on web development, design, and everything I'm learning along
            the way.
          </p>
        </motion.div>

        {/* blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space--30">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
