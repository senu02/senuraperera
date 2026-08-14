"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/common/cards/projectCard";

export default function ProjectsPage() {
  const projectTypes = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.type)));
    return ["All", ...unique];
  }, []);

  const [activeType, setActiveType] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (activeType === "All") return projects;
    return projects.filter((project) => project.type === activeType);
  }, [activeType]);

  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen pt--200 pb--100 container--80">
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
          className="flex flex-col items-center text-center space--20 pb--60"
        >
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text--18 uppercase tracking-[0.2em] text-gray-400">
              Portfolio
            </p>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="h-[2px] bg-blue-500 rounded-full"
            />
          </div>
          <h1 className="text--48 font-bold leading-tight max-w-[700px]">
            All Projects
          </h1>
          <p className="text--18 text-gray-300 max-w-[650px]">
            A complete look at the group and individual projects I've built
            while studying and working — spanning web platforms, mobile apps,
            and UI/UX design.
          </p>

          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-[8px] py--10 px--10 rounded-full border border-white/10 bg-white/5"
          >
            <span className="w-[6px] h-[6px] rounded-full bg-blue-500" />
            <span className="text--13 text-gray-400 ">
              {projects.length} projects
            </span>
          </motion.div> */}
        </motion.div>

        {/* filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-[10px] py--40"
        >
          {projectTypes.map((type) => {
            const isActive = type === activeType;
            return (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`relative px--20 py--10 rounded-full text--14 font-medium transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-blue-600 border border-blue-500/40"
                  />
                )}
                <span className="relative">{type}</span>
              </button>
            );
          })}
        </motion.div>

        {/* projects grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={activeType}
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space--40"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center py--60 space--10"
            >
              <p className="text--18 text-gray-400">
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
