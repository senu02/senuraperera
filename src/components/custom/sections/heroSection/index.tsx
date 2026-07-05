"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white pt--250 min-h-[75vh] md:min-h-screen lg:min-h-screen container--80">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_75%_45%,rgba(37,99,235,0.35),transparent_30%),radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.06),transparent_20%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px] opacity-25" />
      </div>

      <div className=" relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[50px] lg:gap-[calc(80/1920*100vw)]">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space--30"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text--18 uppercase tracking-[0.2em] text-gray-400"
            >
              Hi, I'm Senura Perera
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text--60 font-bold leading-tight max-w-[900px]"
            >
              Full Stack Web Developer{" "}
              {/* <span className="inline-block px--20 py--5 rounded-[18px] bg-blue-600">
                & Designer
              </span> */}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text--20 text-gray-300 max-w-[780px]"
            >
              Passionate about building visually compelling and high-performing
              digital experiences. I combine clean code with thoughtful design
              to create modern, user-friendly websites and applications. From
              frontend development to backend systems and graphic design, I
              enjoy turning ideas into impactful digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-[16px]"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px--30 py--15 rounded-[14px] bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px--30 py--15 rounded-[14px] border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] lg:w-[calc(520/1920*100vw)] lg:h-[calc(520/1920*100vw)]"
            >
              <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl scale-110" />

              <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_80px_rgba(37,99,235,0.25)]">
                <Image
                  src="/images/profile.png"
                  alt="Senura Perera"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
