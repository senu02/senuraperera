"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blogs";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  const { slug, title, description, image, tags, date } = post;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group flex flex-col rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-blue-500/40 transition-colors"
    >
      {/* image */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 space--15 px--40 py--40">
        {/* tags */}
        <div className="flex flex-wrap space--10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text--13 px--10 py--10 rounded-full border border-white/10 bg-white/5 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text--22 font-semibold leading-snug">{title}</h3>

        {/* date + read time */}
        <div className="flex items-center gap-[8px] text--14 text-gray-500">
          <Calendar className="w-[14px] h-[14px]" />
          <span>{date}</span>
        </div>

        <p className="text--16 text-gray-400 leading-relaxed flex-1 line-clamp-3">
          {description}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="group/btn inline-flex items-center gap-[8px] text--15 font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-[6px]"
        >
          Read Full Article
          <ArrowRight className="w-[15px] h-[15px] transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
