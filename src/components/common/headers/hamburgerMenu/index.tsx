"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "@/components/common/safeImage";

type NavGroup = {
  label: string;
  items: { label: string; href: string }[];
};

type BottomLink = {
  label: string;
  href: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  logoSrc?: string;
};

const navGroups: NavGroup[] = [
  {
    label: "Digital",
    items: [
      { label: "Search Engine Optimization (SEO)", href: "/digital/seo" },
      { label: "Local Search Optimization", href: "/digital/local-seo" },
      { label: "Pay Per Click (PPC) Marketing", href: "/digital/ppc" },
      { label: "Metasearch Marketing", href: "/digital/metasearch" },
      { label: "Yandex Advertising", href: "/digital/yandex" },
      { label: "Social Media Management", href: "/digital/smm" },
      { label: "Social Media Advertising", href: "/digital/social-ads" },
      { label: "Content Development", href: "/digital/content" },
      { label: "Blog Content Management", href: "/digital/blog" },
      { label: "Web Analytics", href: "/digital/analytics" },
      { label: "Digital Marketing Consultancy", href: "/digital/consultancy" },
    ],
  },
  {
    label: "Web",
    items: [
      { label: "App Development", href: "/web/app" },
      { label: "Hotel Facsheet Development", href: "/web/factsheet" },
      { label: "Web Hosting", href: "/web/hosting" },
    ],
  },
  {
    label: "Products",
    items: [
      { label: "BookingEye", href: "/products/bookingeye" },
      { label: "PaymentsEye", href: "/products/paymentseye" },
      { label: "RestaurantsEye", href: "/products/restaurantseye" },
      { label: "GiftsEye", href: "/products/giftseye" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Our Story", href: "/about-us" },
      { label: "Executive Team", href: "/about-us/executive-team" },
      { label: "Our Portfolio", href: "/about-us/portfolio" },
      { label: "Partnerships & Certifications", href: "/about-us/memberships" },
      { label: "EME Academy", href: "/academy" },
      { label: "Webinars", href: "/webinars" },
      { label: "Awards & Accolades", href: "/about-us/awards" },
      { label: "News & Events", href: "/news" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const bottomLinks: BottomLink[] = [
  { label: "Our Expertise", href: "/expertise" },
  { label: "Careers", href: "/careers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Social Media Wall", href: "/social" },
  { label: "Testimonials", href: "/reviews" },
  { label: "Contact Us", href: "/contact-us" },
];

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.264 5.633L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SocialCircle = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-[42px] h-[42px] rounded-full border border-gray-300 text-gray-600 hover:text-blue-green hover:border-blue-green transition-colors duration-200"
  >
    {children}
  </Link>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, y: -10 },
};

export default function HamburgerMenu({
  isOpen,
  onClose,
  logoSrc = "/images/logoeme.svg",
}: Props) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90] bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Panel — slides down from top */}
          <motion.div
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.div
              className="container--80 py--60"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Top row — logo + close */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between"
              >
                <Link href="/" onClick={onClose}>
                  <SafeImage
                    src={logoSrc}
                    alt="eMarketingEye"
                    width={157}
                    height={44}
                    loading="eager"
                    className="w-[120px] h-auto"
                  />
                </Link>
                <button
                  onClick={onClose}
                  className="cursor-pointer text-gray-800 hover:text-strong-orange transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </motion.div>

              {/* Nav groups — 4 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space--40 py--40">
                {navGroups.map((group) => (
                  <motion.div key={group.label} variants={itemVariants}>
                    {/* Group heading with left accent */}
                    <div className="flex items-center space--15 pb--25">
                      <span className="w-[4px] h-[50px] bg-blue-green flex-shrink-0" />
                      <h3 className="text--40 font-medium text-gray-800">
                        {group.label}
                      </h3>
                    </div>
                    {/* Items */}
                    <ul className="flex flex-col space--15 pt--20">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="text--18 text-dark-gray hover:text-blue-green transition-colors duration-200 leading-snug"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Bottom links row */}
              <motion.div variants={itemVariants} className="pb--50">
                <div className="flex flex-wrap items-center space--10">
                  {bottomLinks.map((link, index) => (
                    <div
                      key={link.href}
                      className="flex items-center space--10"
                    >
                      {index > 0 && (
                        <span className="text--18 text-dark-gray">/</span>
                      )}
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="text--18 text-dark-gray hover:text-blue-green transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social icons row */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space--15"
              >
                <SocialCircle href="https://facebook.com">
                  <FacebookIcon />
                </SocialCircle>
                <SocialCircle href="https://instagram.com">
                  <InstagramIcon />
                </SocialCircle>
                <SocialCircle href="https://youtube.com">
                  <YoutubeIcon />
                </SocialCircle>
                <SocialCircle href="https://linkedin.com">
                  <LinkedinIcon />
                </SocialCircle>
                <SocialCircle href="https://x.com">
                  <TwitterIcon />
                </SocialCircle>
                <SocialCircle href="https://whatsapp.com">
                  <WhatsappIcon />
                </SocialCircle>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
