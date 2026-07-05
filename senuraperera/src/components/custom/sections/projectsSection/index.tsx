"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack online store with product management, cart, and secure checkout built using Next.js and Stripe.",
    image: "/images/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe"],
    link: "/projects/e-commerce-platform",
  },
  {
    title: "Portfolio CMS Dashboard",
    description:
      "An admin dashboard for managing portfolio content dynamically, with authentication and role-based access.",
    image: "/images/projects/project-2.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "/projects/portfolio-cms-dashboard",
  },
  {
    title: "Real-Time Chat App",
    description:
      "A messaging application with real-time updates, typing indicators, and media sharing using WebSockets.",
    image: "/images/projects/project-3.jpg",
    tags: ["Socket.io", "Express", "React"],
    link: "/projects/real-time-chat-app",
  },
];

export default function Projects() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space--30">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-blue-500/40 transition-colors"
            >
              <Link href={project.link} className="flex flex-col h-full">
                {/* image */}
                <div className="relative w-full h-[200px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute top-[14px] right-[14px] flex items-center justify-center w-[36px] h-[36px] rounded-full bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-[18px] h-[18px] text-white" />
                  </div>
                </div>

                {/* content */}
                <div className="flex flex-col flex-1 space--15 px--40 py--40">
                  <h3 className="text--22 font-semibold">{project.title}</h3>

                  <p className="text--16 text-gray-400 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap space--10 ">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text--13 px--10 py--5 rounded-full border border-white/10 bg-white/5 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
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
            className="group inline-flex items-center gap-[10px] px--30 py--15 rounded-[14px] bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
          >
            View All Projects
            <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
