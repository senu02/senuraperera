"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Palette,
  Wrench,
  FileCode2,
} from "lucide-react";
import type { MouseEvent } from "react";

const techCategories = [
  {
    icon: Code2,
    title: "Languages",
    items: ["JavaScript", "Java", "C", "PHP", "HTML"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    items: ["React Js", "Next Js", "Spring Boot", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    icon: FileCode2,
    title: "Headless CMS",
    items: ["Directus", "Strapi"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["Git & GitHub", "Android Studio"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["Figma", "UI/UX Design"],
  },
];

const marqueeItems = [
  ...techCategories.flatMap((c) => c.items),
  ...techCategories.flatMap((c) => c.items),
];

function TechCard({
  category,
  index,
}: {
  category: (typeof techCategories)[number];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      style={{ perspective: 800 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative flex flex-col space--30 px--40 py--40 rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:bg-white/[0.07] transition-colors h-full"
      >
        <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_25%_15%,rgba(37,99,235,0.25),transparent_60%)] pointer-events-none" />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center space--15">
            <div className="flex items-center justify-center w-[48px] h-[48px] rounded-[14px] bg-blue-600/15 border border-blue-500/20 group-hover:bg-blue-600/25 transition-colors">
              <Icon className="w-[22px] h-[22px] text-blue-400" />
            </div>
            <h3 className="text--20 font-semibold">{category.title}</h3>
          </div>
          <span className="text--12 text-gray-500 uppercase tracking-[0.1em]">
            {String(category.items.length).padStart(2, "0")}
          </span>
        </div>

        <div className="relative flex flex-wrap space--15">
          {category.items.map((item) => (
            <span
              key={item}
              className="text--14 px--10 py--5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-blue-500/40 hover:text-white transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Technologies() {
  return (
    <section className="relative overflow-hidden bg-black text-white pb--100 container--80">
      {/* background glow, matches hero section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_25%,rgba(37,99,235,0.3),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="relative z-10">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center space--20 mb-[50px]"
        >
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text--18 uppercase tracking-[0.2em] text-gray-400">
              Technologies
            </p>
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="h-[2px] bg-blue-500 rounded-full"
            />
          </div>
          <h2 className="text--48 font-bold leading-tight max-w-[700px]">
            Tools I work with
          </h2>
          <p className="text--18 text-gray-300 max-w-[600px]">
            A snapshot of the languages, frameworks, and tools I use to design,
            build, and ship full-stack applications.
          </p>
        </motion.div>

        {/* infinite tech-stack ticker */}
        <div className="relative mb-[50px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center space--40"
          >
            {marqueeItems.map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="flex items-center gap-[10px] text--16 text-gray-500 whitespace-nowrap"
              >
                {tool}
                <span className="w-[4px] h-[4px] rounded-full bg-blue-500/50" />
              </span>
            ))}
          </motion.div>
        </div>

        {/* categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch space--30">
          {techCategories.map((category, index) => (
            <TechCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
