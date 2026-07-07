"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SafeImage from "@/components/common/safeImage";

type NavItem = {
  label: string;
  href: string;
};

type SocialLink = {
  service:
    | "facebook"
    | "instagram"
    | "youtube"
    | "linkedin"
    | "xtwitter"
    | "whatsapp";
  url: string;
};

/* ---------------- Icons (unchanged from your original) ---------------- */

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="21"
    viewBox="0 0 11 21"
    fill="none"
  >
    <path
      d="M7.07865 21V11.4216H10.2924L10.7746 7.68764H7.07865V5.30404C7.07865 4.22331 7.37753 3.4868 8.92905 3.4868L10.9047 3.48599V0.146191C10.563 0.101793 9.39023 0 8.02524 0C5.17491 0 3.22352 1.73981 3.22352 4.93423V7.68764H0V11.4216H3.22352V21H7.07865Z"
      fill="white"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <g clipPath="url(#clip_insta)">
      <path
        d="M19.9805 6.17406C19.9336 5.05825 19.7618 4.29114 19.5156 3.62643C19.2616 2.92085 18.8709 2.28915 18.359 1.76402C17.8589 1.23071 17.2533 0.816306 16.5891 0.553819C15.9524 0.295338 15.2257 0.114898 14.163 0.0657019C13.0924 0.0123391 12.7525 0 10.0371 0C7.32174 0 6.98186 0.0123391 5.91521 0.0615355C4.85253 0.110732 4.12195 0.291332 3.48905 0.549653C2.81692 0.816306 2.2153 1.22654 1.71517 1.76402C1.20726 2.28915 0.812743 2.92502 0.562603 3.62242C0.316431 4.29114 0.144583 5.05408 0.0977295 6.16989C0.0469078 7.29403 0.0351562 7.65091 0.0351562 10.5021C0.0351562 13.3532 0.0469078 13.7101 0.0937615 14.83C0.140615 15.9459 0.312615 16.713 0.558788 17.3777C0.812743 18.0833 1.20726 18.715 1.71517 19.2401C2.2153 19.7734 2.82089 20.1878 3.48508 20.4503C4.12195 20.7088 4.84857 20.8892 5.9114 20.9384C6.97789 20.9878 7.31792 20.9999 10.0333 20.9999C12.7487 20.9999 13.0885 20.9878 14.1552 20.9384C15.2179 20.8892 15.9485 20.7088 16.5814 20.4503C17.9255 19.9046 18.9881 18.7888 19.5078 17.3777C19.7538 16.709 19.9258 15.9459 19.9727 14.83C20.0195 13.7101 20.0313 13.3532 20.0313 10.5021C20.0313 7.65091 20.0273 7.29403 19.9805 6.17406ZM18.1794 14.748C18.1364 15.7736 17.9723 16.3274 17.8356 16.6966C17.4995 17.6115 16.808 18.3376 15.9367 18.6904C15.5851 18.834 15.0538 19.0063 14.0809 19.0513C13.026 19.1007 12.7096 19.1128 10.0411 19.1128C7.37256 19.1128 7.05221 19.1007 6.00113 19.0513C5.02438 19.0063 4.49693 18.834 4.1453 18.6904C3.71172 18.5222 3.31705 18.2555 2.9967 17.9068C2.66461 17.5663 2.41065 17.1561 2.2504 16.7008C2.11366 16.3316 1.94959 15.7736 1.90671 14.7522C1.8597 13.6445 1.8481 13.3122 1.8481 10.5102C1.8481 7.70828 1.8597 7.37191 1.90671 6.26844C1.94959 5.24285 2.11366 4.68903 2.2504 4.31982C2.41065 3.86439 2.66461 3.45015 3.00067 3.11363C3.32483 2.76493 3.71553 2.49828 4.14927 2.33017C4.5009 2.18659 5.03232 2.01432 6.0051 1.96913C7.06 1.91994 7.37653 1.9076 10.0449 1.9076C12.7174 1.9076 13.0338 1.91994 14.0848 1.96913C15.0616 2.01432 15.589 2.18659 15.9407 2.33017C16.3743 2.49828 16.7689 2.76493 17.0893 3.11363C17.4214 3.45416 17.6753 3.86439 17.8356 4.31982C17.9723 4.68903 18.1364 5.24686 18.1794 6.26844C18.2263 7.37608 18.238 7.70828 18.238 10.5102C18.238 13.3122 18.2263 13.6404 18.1794 14.748Z"
        fill="white"
      />
      <path
        d="M10.0371 5.10742C7.20074 5.10742 4.89941 7.52365 4.89941 10.502C4.89941 13.4804 7.20074 15.8966 10.0371 15.8966C12.8737 15.8966 15.1749 13.4804 15.1749 10.502C15.1749 7.52365 12.8737 5.10742 10.0371 5.10742ZM10.0371 14.0014C8.19702 14.0014 6.70442 12.4343 6.70442 10.502C6.70442 8.56975 8.19702 7.00268 10.0371 7.00268C11.8774 7.00268 13.3698 8.56975 13.3698 10.502C13.3698 12.4343 11.8774 14.0014 10.0371 14.0014Z"
        fill="white"
      />
      <path
        d="M16.5777 4.89416C16.5777 5.58964 16.0406 6.15355 15.3781 6.15355C14.7158 6.15355 14.1787 5.58964 14.1787 4.89416C14.1787 4.19852 14.7158 3.63477 15.3781 3.63477C16.0406 3.63477 16.5777 4.19852 16.5777 4.89416Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip_insta">
        <rect width="20" height="21" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
  >
    <g clipPath="url(#clip_li)">
      <path
        d="M19.9951 19L20.0001 18.9992V12.031C20.0001 8.62205 19.2276 5.99609 15.0326 5.99609C13.0159 5.99609 11.6626 7.04743 11.1101 8.04414H11.0517V6.31434H7.07422V18.9992H11.2159V12.7181C11.2159 11.0643 11.5459 9.46518 13.7017 9.46518C15.8259 9.46518 15.8576 11.3525 15.8576 12.8242V19H19.9951Z"
        fill="white"
      />
      <path
        d="M0.330078 6.31543H4.47675V19.0003H0.330078V6.31543Z"
        fill="white"
      />
      <path
        d="M2.40167 0C1.07583 0 0 1.02204 0 2.28158C0 3.54113 1.07583 4.58454 2.40167 4.58454C3.7275 4.58454 4.80333 3.54113 4.80333 2.28158C4.8025 1.02204 3.72667 0 2.40167 0Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip_li">
        <rect width="20" height="19" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
  >
    <path
      d="M10.9992 16C10.9974 16 10.9953 16 10.9933 16C10.3295 15.9954 4.4609 15.9416 2.79821 15.489C1.63621 15.1746 0.718929 14.2525 0.405727 13.0829C-0.0293313 11.4391 -0.00163662 8.27433 0.00138462 8.02162C-0.00146877 7.7701 -0.0294992 4.57915 0.404384 2.92185C0.404888 2.92033 0.405224 2.91864 0.405727 2.91712C0.715404 1.76085 1.65333 0.810152 2.79536 0.494943C2.79821 0.494098 2.80123 0.493423 2.80409 0.492578C4.44798 0.0577715 10.3282 0.00456092 10.9933 0H11.0052C11.6708 0.00456092 17.555 0.0584472 19.2024 0.511666C20.3614 0.825186 21.278 1.74615 21.592 2.91425C22.0433 4.57273 22.0016 7.7706 21.997 8.04054C22.0002 8.30643 22.0266 11.4428 21.594 13.0949C21.5937 13.0966 21.5932 13.0981 21.5928 13.0996C21.2795 14.2692 20.3624 15.1914 19.199 15.5061C19.1975 15.5066 19.1958 15.5069 19.1943 15.5074C17.5506 15.9421 11.6703 15.9953 11.0052 16C11.0032 16 11.0012 16 10.9992 16ZM2.06573 3.36544C1.68371 4.82831 1.7198 7.97855 1.72013 8.0103V8.03311C1.70872 8.90678 1.74884 11.4369 2.0659 12.6352C2.21965 13.2091 2.67199 13.6636 3.24569 13.8189C4.47248 14.1528 9.25225 14.2579 10.9992 14.2702C12.7507 14.2579 17.5375 14.1557 18.7552 13.8351C19.3271 13.6793 19.7779 13.2263 19.9327 12.6518C20.2501 11.4359 20.2899 8.91809 20.2783 8.05C20.2783 8.04088 20.2783 8.03176 20.2784 8.02264C20.2942 7.1385 20.2632 4.57881 19.9342 3.37085C19.9338 3.36967 19.9335 3.36848 19.9333 3.3673C19.7789 2.79094 19.3264 2.33637 18.7527 2.18113C17.5378 1.84683 12.7503 1.7421 10.9992 1.72977C9.2489 1.7421 4.46678 1.84413 3.24536 2.1644C2.68257 2.3215 2.21998 2.79229 2.06573 3.36544ZM8.80863 11.5026V4.49722L14.8243 8L8.80863 11.5026Z"
      fill="white"
    />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      d="M14.7137 0H17.5321L11.3452 7.14286L18.625 17H12.9018L8.40625 11.0179L3.26786 17H0.446429L7.06696 9.35714L0.089286 0H5.95536L10.0179 5.44643L14.7137 0ZM13.7232 15.2857H15.2946L5.06696 1.625H3.37946L13.7232 15.2857Z"
      fill="white"
    />
  </svg>
);

const socialIconMap: Record<string, React.ReactNode> = {
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  youtube: <YoutubeIcon />,
  linkedin: <LinkedinIcon />,
  xtwitter: <XIcon />,
};

const SocialCircle = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className="group relative flex items-center justify-center w-[40px] h-[40px] md:w-[46px] md:h-[46px] shrink-0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 55"
      fill="none"
      className="absolute inset-0 w-full h-full"
    >
      <circle
        opacity="0.3"
        cx="27.5"
        cy="27.5"
        r="27"
        stroke="#DDDDDD"
        className="transition-opacity duration-200 group-hover:opacity-70"
      />
    </svg>
    <span className="relative z-10 flex items-center justify-center scale-[0.72] md:scale-[0.85]">
      {children}
    </span>
  </motion.a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative inline-block w-fit"
    >
      <Link
        href={href}
        className={`text--18 font-light tracking-wide transition-opacity duration-200 ${
          isActive
            ? "text-white opacity-100"
            : "text-gray-300 opacity-100 hover:opacity-100"
        }`}
      >
        {label}
      </Link>
      {isActive ? (
        <div className="absolute bottom-1 left-0 h-[1px] bg-white w-full" />
      ) : (
        <motion.div
          className="absolute bottom-1 left-0 h-[1px] bg-white"
          variants={{ initial: { width: 0 }, hover: { width: "100%" } }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
};

/* ---------------- Static content — edit these values directly ---------------- */

const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact-us" },
];

const socialLinks: SocialLink[] = [
  { service: "linkedin", url: "https://linkedin.com/in/your-profile" },
  { service: "instagram", url: "https://instagram.com/your-profile" },
  { service: "youtube", url: "https://youtube.com/@your-channel" },
  { service: "xtwitter", url: "https://x.com/your-profile" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — just clear the field. Wire this to an email service later if needed.
    setEmail("");
  };

  return (
    <footer className="bg-black text-white relative">
      <div className="container--80 pb--20">
        {/* Top grid: brand / quick links / get in touch / follow me */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-8 md:space-y-0">
          {/* Brand + intro */}
          <div className="flex flex-col  lg:col-span-1 items-center lg:items-start text-center lg:text-left">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-fit"
            >
              <Link href="/" title="Senura Perera" className="inline-flex">
                <SafeImage
                  src="/images/senuralogo.jpg"
                  alt="Senura Perera"
                  width={157}
                  height={44}
                  className="w-[120px] h-[50px] lg:w-[calc(120/1920*100vw)] lg:h-[calc(50/1920*100vw)]"
                />
              </Link>
            </motion.div>
            <p className="hidden md:block text--14 font-light text-gray-400 max-w-[280px] leading-relaxed">
              Building thoughtful digital products, one project at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col space--20 items-center md:items-start">
            <p className="hidden md:block text--16 font-semibold tracking-widest uppercase text-white">
              Quick Links
            </p>
            <nav className="flex flex-row flex-wrap justify-center gap-x-[20px] gap-y-[8px] md:flex-col md:flex-nowrap md:justify-start md:gap-0 md:space--5">
              {quickLinks.map((item) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </nav>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col space--20 text-center lg:text-left">
            <p className="text--16 font-semibold tracking-widest uppercase text-white">
              Get In Touch
            </p>
            <div className="flex flex-col space-y-1 lg:space-y-0">
              <a
                href="mailto:dulajperera34senura@gmail.com"
                className="text--16 font-light text-gray-300 hover:text-blue-500 transition-colors duration-200 break-all"
              >
                dulajperera34senura@gmail.com
              </a>
              <a
                href="tel:+94771687613"
                className="text--16 font-light text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                +94 77 168 7613
              </a>
              <p className="text--16 font-light text-gray-300">
                Colombo, Sri Lanka
              </p>
            </div>
          </div>

          {/* Follow me */}
          <div className="flex flex-col space--10 items-center lg:items-start">
            <p className="text--16 font-semibold tracking-widest uppercase text-white">
              Follow Me
            </p>
            <div className="flex space--15 items-center flex-wrap">
              {socialLinks.map((social) => {
                const icon = socialIconMap[social.service];
                if (!icon) return null;
                return (
                  <SocialCircle key={social.service} href={social.url}>
                    {icon}
                  </SocialCircle>
                );
              })}
            </div>

            {/* Newsletter (static — no backend call) */}
            <div className="flex flex-col space--10 pt--10">
              <p className="text--16 font-light text-gray-400">
                Subscribe to updates
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex items-center border border-white/20 rounded-[10px] w-full min-w-[300px] focus-within:border-white/40 transition-colors duration-200"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  className="flex-1 min-w-0 bg-transparent text--14 text-white placeholder-gray-500 px--10 py--10 outline-none"
                />
                <button
                  type="submit"
                  className="px--10 py--10 text-white hover:text-blue-500 transition-colors duration-200 shrink-0"
                  aria-label="Subscribe"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="18"
                    viewBox="0 0 20 22"
                    fill="none"
                  >
                    <path
                      d="M8.97008 0L7.15553 1.85591L14.4137 9.27957L0 9.35712L0 12.0084L14.4137 11.9309L7.15553 19.3545L8.97008 21.2104L19.3389 10.6052L8.97008 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10 container--80">
        <div className="py--20 flex flex-col md:flex-row space-y-2 lg:space-y-0 items-center justify-center md:justify-between text-center md:text-left">
          <p className="text--14 text-gray-400 tracking-wider">
            © {new Date().getFullYear()} Senura Perera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
