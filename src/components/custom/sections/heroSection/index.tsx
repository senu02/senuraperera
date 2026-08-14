"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef, type MouseEvent } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function PortfolioHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative overflow-hidden bg-black text-white pt--250 pb--100 min-h-[75vh] md:min-h-[85vh] lg:min-h-screen container--80">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_75%_45%,rgba(37,99,235,0.35),transparent_30%),radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.06),transparent_20%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px] opacity-25" />
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center space--60">
          {/* left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col space--30 lg:text-left text-center"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-[10px] self-center lg:self-start px--10 py--5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm w-fit"
            >
              <span className="relative flex h-[8px] w-[8px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-emerald-400" />
              </span>
              <span className="text--13 uppercase tracking-[0.15em] text-gray-300">
                Available
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text--18 uppercase tracking-[0.2em] text-gray-400"
            >
              Hi, I'm Senura Perera
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text--60 font-bold leading-tight max-w-[900px]"
            >
              Full Stack{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-300 bg-clip-text text-transparent">
                Web Developer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text--20 text-gray-300 max-w-[780px]"
            >
              Full-Stack Web Developer with a strong foundation in React,
              Next.js, and modern web technologies. I specialize in building
              clean, responsive, and user-centric applications — combining
              thoughtful front-end design with reliable, scalable backend
              systems to deliver seamless digital experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap space--25 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/projects"
                className="group inline-flex items-center gap-[10px] px--30 py--15 rounded-[14px] bg-blue-600 text-white font-semibold transition-colors duration-300 hover:bg-blue-500 shadow-[0_0_0_0_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_0_rgba(37,99,235,0.45)]"
              >
                View Projects
                <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/contact-us"
                className="group inline-flex items-center gap-[10px] px--30 py--15 rounded-[14px] border border-white/20 bg-white/5 text-white font-semibold transition-colors duration-300 hover:bg-white/10 hover:border-white/30"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="relative flex justify-center lg:justify-end"
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] lg:w-[calc(520/1920*100vw)] lg:h-[calc(520/1920*100vw)]"
            >
              {/* rotating gradient ring — signature accent */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[6px] rounded-[36px] opacity-70 [background:conic-gradient(from_0deg,rgba(37,99,235,0.6),transparent_30%,transparent_70%,rgba(56,189,248,0.6))]"
              />

              <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl scale-110" />

              <motion.div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full h-full rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_80px_rgba(37,99,235,0.25)]"
              >
                <Image
                  src="/images/profile.png"
                  alt="Senura Perera"
                  width={520}
                  height={520}
                  className="object-cover object-contain w-full h-full pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden lg:flex flex-col items-center gap-[8px] absolute left-1/2 -translate-x-1/2 bottom-[10px] text-gray-500"
        >
          <span className="text--12 uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-[16px] h-[16px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}