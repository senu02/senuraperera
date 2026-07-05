"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { SVGProps } from "react";
import type { Project } from "@/lib/data/projects";

// GitHub isn't reliably exported by lucide-react across versions,
// so it's defined here as a small inline SVG icon.
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.69-1.3-3.69-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.19.91.1-.71.38-1.19.7-1.46-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.21-2.57 5.14-5.01 5.41.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.35-1.45 7.49-5.55 7.49-10.39C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { title, description, image, tags, type, githubUrl, liveUrl } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-blue-500/40 transition-colors"
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

        <span className="absolute top-[14px] left-[14px] text--12 uppercase tracking-[0.1em] px--12 py--4 rounded-full bg-black/60 border border-white/10 text-gray-300">
          {type}
        </span>

        {/* action icons, shown on hover */}
        <div className="absolute top-[14px] right-[14px] flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-black/70 border border-white/10 hover:bg-blue-600/90 transition-colors"
            >
              <GithubIcon className="w-[16px] h-[16px] text-white" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live link`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-blue-600/90 hover:bg-blue-500 transition-colors"
            >
              <ArrowUpRight className="w-[18px] h-[18px] text-white" />
            </a>
          )}
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 space--15 px--40 py--40">
        <h3 className="text--22 font-semibold">{title}</h3>

        <p className="text--16 text-gray-400 leading-relaxed flex-1">
          {description}
        </p>

        <div className="flex flex-wrap space--10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text--13 px--10 py--5 rounded-full border border-white/10 bg-white/5 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
