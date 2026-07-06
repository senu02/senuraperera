"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/common/cards/projectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-black text-white pb--100 container--80">
      {/* background glow, matches hero section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.3),transparent_35%),radial-gradient(circle_at_15%_75%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center space--20 mb-[60px]"
        >
          <p className="text--18 uppercase tracking-[0.2em] text-gray-400">
            Projects
          </p>
          <h2 className="text--48 font-bold leading-tight max-w-[700px]">
            A few things I've built
          </h2>
          <p className="text--18 text-gray-300 max-w-[600px]">
            A selection of projects that showcase my approach to solving
            problems through clean code and thoughtful design.
          </p>
        </motion.div>

        {/* projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center items-stretch justify-center space--30">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* view all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center mt-[60px]"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-[10px] px--30 py--15 rounded-[14px] bg-blue-600 text-white font-semibold hover:bg-blue-800 transition-colors duration-300"
          >
            View All Projects
            <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
