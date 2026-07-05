"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import type { SVGProps } from "react";

// Brand logos aren't reliably available in lucide-react across versions,
// so GitHub and LinkedIn are defined here as simple inline SVG icons.
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.69-1.3-3.69-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.19.91.1-.71.38-1.19.7-1.46-2.43-.28-4.99-1.22-4.99-5.42 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.21-2.57 5.14-5.01 5.41.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.35-1.45 7.49-5.55 7.49-10.39C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "dulajperera34senura@gmail.com",
    href: "mailto:dulajperera34senura@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 77 168 7613",
    href: "tel:+94771687613",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: null,
  },
];

const socialLinks = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/senura-perera-21b26b33a/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/senu02",
  },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-black text-white pb--100 container--80">
      {/* background glow, matches hero section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_60%,rgba(37,99,235,0.3),transparent_35%),radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center space--20 pb--40"
        >
          <p className="text--18 uppercase tracking-[0.2em] text-gray-400">
            Contact
          </p>
          <h2 className="text--48 font-bold leading-tight max-w-[700px]">
            Let's build something together
          </h2>
          <p className="text--18 text-gray-300 max-w-[600px]">
            Have a project in mind or just want to say hi? I'm always open to
            discussing new ideas, opportunities, and collaborations.
          </p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative flex flex-col items-center rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm max-w-[900px] mx-auto"
        > */}
        {/* contact details */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space--30 px--40 py--40 w-full">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const Wrapper = detail.href ? "a" : "div";
              return (
                <Wrapper
                  key={detail.label}
                  {...(detail.href ? { href: detail.href } : {})}
                  className="group flex flex-col items-center text-center space--15 py--20  rounded-[16px] border border-white/10 bg-white/[0.03] hover:border-blue-500/40 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex items-center justify-center w-[48px] h-[48px] rounded-[14px] bg-blue-600/15 border border-blue-500/20 group-hover:bg-blue-600/25 transition-colors">
                    <Icon className="w-[20px] h-[20px] text-blue-400" />
                  </div>
                  <p className="text--13 uppercase tracking-[0.15em] text-gray-500">
                    {detail.label}
                  </p>
                  <p className="text--15 text-gray-300 break-all">
                    {detail.value}
                  </p>
                </Wrapper>
              );
            })}
          </div> */}

        {/* social links */}
        {/* <div className="flex items-center space--25 pb--40">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-[44px] h-[44px] rounded-full border border-white/10 bg-white/5 hover:border-blue-500/40 hover:bg-blue-600/15 transition-colors"
                >
                  <Icon className="w-[20px] h-[20px] text-gray-300" />
                </a>
              );
            })}
          </div> */}

        {/* button to main contact page */}
        <div className="pb--40 justify-center flex items-center">
          <Link
            href="/contact-us"
            className="group inline-flex items-center gap-[10px] px--30 py--15 rounded-[14px] bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
          >
            Say Hello !
            <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
}
