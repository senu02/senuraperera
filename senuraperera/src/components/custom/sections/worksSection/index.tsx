"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Server, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, pixel-perfect interfaces with React, Next.js, and Tailwind CSS that feel fast and intuitive to use.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Designing robust APIs, databases, and server-side logic that power reliable and scalable applications.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Crafting clean, modern visual designs and user flows that balance aesthetics with usability.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Apps",
    description:
      "Ensuring every project looks and performs great across devices, from mobile phones to large desktop screens.",
  },
];

export default function WhatIDo() {
  return (
    <section className="relative overflow-hidden bg-black text-white container--80 pb--100">
      {/* background glow, matches hero section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_60%,rgba(37,99,235,0.3),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.05),transparent_25%)]" />
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
            What I Do
          </p>
          <h2 className="text--48 font-bold leading-tight max-w-[700px]">
            Services I bring to every project
          </h2>
          <p className="text--18 text-gray-300 max-w-[600px]">
            A blend of development and design skills focused on building digital
            products that look great and work even better.
          </p>
        </motion.div>

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space--30">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col space--15 px--30 py--30 rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:bg-white/[0.07] transition-colors"
              >
                <div className="absolute inset-0 rounded-[20px]  opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.25),transparent_60%)] pointer-events-none" />

                <div className="relative flex items-center justify-center w-[56px] h-[56px] rounded-[14px] bg-blue-600/15 border border-blue-500/20 group-hover:bg-blue-600/25 transition-colors">
                  <Icon className="w-[26px] h-[26px] text-blue-400" />
                </div>

                <h3 className="relative text--22 font-semibold">
                  {service.title}
                </h3>

                <p className="relative text--16 text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
